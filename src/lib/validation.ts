import { z } from "zod";
import { serviceDivisions } from "@/data/services";

/**
 * Contact form schema — shared by the client (instant feedback) and the
 * Route Handler (authoritative validation). Never trust the client copy.
 */

export const serviceOptions = [
  ...serviceDivisions.map((d) => d.name),
  "Not sure yet — need advice",
] as const;

export const budgetOptions = [
  "Under ₹50,000",
  "₹50,000 – ₹2,00,000",
  "₹2,00,000 – ₹5,00,000",
  "₹5,00,000 – ₹15,00,000",
  "Above ₹15,00,000",
  "Prefer to discuss",
] as const;

/** Strip control characters (except newlines/tabs) and trim. */
function clean(value: string): string {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();
}

const cleanString = (min: number, max: number, messages: { min: string; max: string }) =>
  z
    .string({ error: messages.min })
    .transform(clean)
    .pipe(z.string().min(min, messages.min).max(max, messages.max));

export const contactSchema = z.object({
  fullName: cleanString(2, 100, {
    min: "Enter your full name.",
    max: "Name must be 100 characters or fewer.",
  }).refine((v) => !/[<>{}]/.test(v), "Name contains characters that aren't allowed."),
  email: z
    .string({ error: "Enter your business email." })
    .transform((v) => clean(v).toLowerCase())
    .pipe(z.email("Enter a valid email address, like name@company.com.").max(160, "Email is too long.")),
  phone: z
    .string({ error: "Enter your phone number." })
    .transform(clean)
    .pipe(
      z
        .string()
        .regex(/^\+?[0-9\s\-()]{8,20}$/, "Enter a valid phone number, like +91 98765 43210.")
        .refine((v) => v.replace(/\D/g, "").length >= 10, "Phone number needs at least 10 digits."),
    ),
  service: z.enum(serviceOptions, { error: "Choose the service you need." }),
  details: cleanString(20, 4000, {
    min: "Tell us a little more — at least 20 characters.",
    max: "Project details must be 4,000 characters or fewer.",
  }),
  budget: z
    .union([z.enum(budgetOptions), z.literal("")])
    .optional()
    .transform((v) => (v ? v : undefined)),
  consent: z.literal(true, { error: "Please confirm we can contact you about this enquiry." }),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactData = z.output<typeof contactSchema>;

export type FieldErrors = Partial<Record<keyof ContactData, string>>;

/** Flatten Zod issues to the first message per field. */
export function toFieldErrors(error: z.ZodError): FieldErrors {
  const out: FieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0] as keyof ContactData | undefined;
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}

/** Spam-protection fields sent alongside the form data. */
export const antiSpamSchema = z.object({
  /** Honeypot — must be empty. Real users never see this field. */
  website: z.string().max(0).optional().or(z.literal("")),
  /** Epoch ms when the form was rendered; used to reject instant bot submissions. */
  startedAt: z.number().int().positive(),
});

export const MIN_FILL_TIME_MS = 3000;
export const MAX_FORM_AGE_MS = 1000 * 60 * 60 * 24; // 24h
