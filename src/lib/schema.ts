import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be at most 50 characters" }),
  lastName: z.string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be at most 50 characters" }),
  phone: z.string()
    .min(10, { message: "Phone number must contain at least 10 characters" })
    .max(15, { message: "Phone number must be at most 15 characters" }),
  email: z.string()
    .email({ message: "Invalid email address" }),
  message: z.string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(500, { message: "Message must be at most 500 characters" }),
});

export type FormSchema = typeof formSchema;
