import { z } from "zod";

export const proceedTransactionSchema = z.object({
	domainIds: z.array(z.number())
});
