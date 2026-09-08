import { z } from "zod";

// Shared between the client form (ms-contact-form.tsx) and the API route
// (app/api/contact/route.ts) so the two can never drift out of sync again.
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name is required")
    .max(100, "Name is too long"),
  email: z.email("Invalid email address"),
  subject: z
    .string()
    .trim()
    .min(3, "Subject is required")
    .max(200, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

export type ContactFormInputs = z.infer<typeof contactFormSchema>;
