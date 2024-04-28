import { z } from "zod";

export const createDomainSchema = z.object({
    name: z.string().min(3).max(32),
    listPrice: z.number().min(1),
    expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    categories: z.array(z.string()).min(0).max(10),
});

export type CreateDomain = z.infer<typeof createDomainSchema>;
