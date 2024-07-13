import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  phone: z.string().min(10).max(15), // Basic length validation for phone number
  email: z.string().email(), // Email validation
  message: z.string().min(10).max(500), // Textarea validation with minimum and maximum length
});

export type FormSchema = typeof formSchema;
