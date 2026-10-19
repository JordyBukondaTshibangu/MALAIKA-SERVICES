import { z } from "zod";

import { needKeys } from "@/data/services";

// Shared between the client form (ms-contact-form.tsx) and the API route
// (app/api/contact/route.ts). Error messages are translation keys under
// "Contact.errors" so the form can show them in the visitor's language.
export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "name").max(100, "name_long"),
  company: z.string().trim().max(120, "company_long").optional().or(z.literal("")),
  email: z.email("email"),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s().-]{6,20}$/, "phone")
    .optional()
    .or(z.literal("")),
  need: z.enum(needKeys, { error: "need" }),
  message: z.string().trim().min(10, "message").max(2000, "message_long"),
});

export type ContactFormInputs = z.infer<typeof contactFormSchema>;
