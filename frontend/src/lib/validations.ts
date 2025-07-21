import { z } from "zod"

export const waitlistSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),
  company: z
    .string()
    .optional(),
  referralSource: z
    .enum(["twitter", "linkedin", "friend", "google", "other"])
    .optional(),
})

export type WaitlistFormData = z.infer<typeof waitlistSchema> 