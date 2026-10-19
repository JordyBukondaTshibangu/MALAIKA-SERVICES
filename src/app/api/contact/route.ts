import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

import { contactFormSchema } from "@/lib/contact-schema";
import fr from "../../../../messages/fr.json";


const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: result.error.issues }, { status: 400 });
    }

    const { name, company, email, phone, need, message } = result.data;
    // The team reads requests in French, whatever language the visitor used.
    const needLabel = fr.Contact.needs[need];

    const rows = [
      ["Nom", name],
      ["Entreprise", company],
      ["E-mail", email],
      ["Téléphone", phone],
      ["Besoin", needLabel],
    ]
      .filter(([, v]) => v)
      .map(([k, v]) => `<p><strong>${k} :</strong> ${escapeHtml(v as string)}</p>`)
      .join("");

    // Created per request so a missing key fails the request, not the build.
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `[Site web] ${needLabel} — ${name}${company ? ` (${company})` : ""}`,
      html: `<h2>Nouvelle demande depuis le site</h2>${rows}
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully", data }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
