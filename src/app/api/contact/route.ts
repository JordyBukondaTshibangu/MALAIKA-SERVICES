import { z } from "zod";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name is required")
    .max(50, "Name must be less than 50 characters"),
  email: z.email("Invalid email address"),
  subject: z
    .string()
    .trim()
    .min(2, "Subject is required")
    .max(100, "Subject must be less than 50 characters"),
  message: z.string().trim().min(10, "Message is required"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject,
      html: ` <h2>New Contact Message from ${name}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, "<br>")}</p>
            `,
      replyTo: email!,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { message: "Failed to send email", error: error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data: data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error },
      { status: 500 }
    );
  }
}
