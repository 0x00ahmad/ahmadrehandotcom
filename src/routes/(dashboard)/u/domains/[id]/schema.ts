import { z } from "zod";

export const domainInfoSchema = z.object({
	name: z.string().min(3).max(32),
	listPrice: z.number().min(1),
	acceptedPrice: z.number().min(1),
	expiresAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
	transferCode: z.string().min(5).max(128),
	status: z.string().min(1).max(32)
});

export type DomainInfo = z.infer<typeof domainInfoSchema>;
