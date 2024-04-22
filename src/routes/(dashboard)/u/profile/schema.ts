import { z } from "zod";

export const personalInfoSchema = z.object({
    // personal info
    firstName: z.string().min(2).max(64),
    lastName: z.string().min(2).max(64),
    email: z.string().email().min(0).max(128), // this does not change
    phoneNumber: z.string().min(3).max(16),
    // address
    address1: z.string().min(3).max(255),
    address2: z.string().min(0).max(255),
    city: z.string().min(3).max(64),
    country: z.string().min(3).max(64),
    postalCode: z.string().min(3).max(16),
    state: z.string().min(3).max(64),
});

export type PersonalInfo = z.infer<typeof personalInfoSchema>;
