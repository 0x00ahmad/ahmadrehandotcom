import { z } from "zod";

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters." })
        .max(128, { message: "Name must be at most 255 characters." }),
    email: z
        .string()
        .email()
        .min(6, { message: "Email must be at least 6 characters." })
        .max(256, { message: "Email must be at most 255 characters." }),
    subject: z
        .string()
        .min(2, { message: "Subject must be at least 2 characters." })
        .max(128, { message: "Subject must be at most 255 characters." }),
    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters." })
        .max(1024, { message: "Message must be at most 500 characters." }),
});

export type ContactFormModel = z.infer<typeof contactFormSchema>;
