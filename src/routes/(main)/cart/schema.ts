import { z } from "zod";

export const proceedTransactionSchema = z.object({
    id: z.string().min(1).max(64),
    domainIds: z.array(z.number()),
})
