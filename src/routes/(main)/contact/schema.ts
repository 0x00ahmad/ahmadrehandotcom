import { z } from "zod";

export const formSchema = z.object({
    firstName: z.string().min(3).max(32),
    lastName: z.string().min(3).max(32),
    email: z.string().email().max(128),
    phone: z.string().max(20),
    subject: z.string().max(100),
    message: z.string().max(500),
});

