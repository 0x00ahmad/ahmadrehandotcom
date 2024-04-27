import { db } from "..";
import { transaction } from "../schema";
import type { Result } from "$lib/types";
import { and, eq, inArray } from "drizzle-orm";
import { TRANSACTION_STATUS } from "$lib/utils/constants";

export type Transaction = typeof transaction.$inferSelect;
export type CreateTransaction = typeof transaction.$inferInsert;

export const transactionRepository = {
	createTransactions: async function (data: {
		amount: number;
		currency: string;
		buyerId: number;
		domainsIds: number[];
		domainAndSellerIds: { [key: number]: number[] };
	}): Promise<Result<boolean>> {
		const existingTransaction = await db.query.transaction.findFirst({
			where: and(
				inArray(transaction.domainId, data.domainsIds),
				eq(transaction.buyerId, data.buyerId),
				inArray(
					transaction.sellerId,
					Object.keys(data.domainAndSellerIds).map((key) => parseInt(key))
				)
			)
		});

		if (existingTransaction) {
			return {
				errors: [
					{
						message: "There is already a pending transaction for this domain.",
						field: "transaction",
						type: "create"
					}
				]
			};
		}

		try {
			for (const [sellerId, domainIds] of Object.entries(
				data.domainAndSellerIds
			)) {
				for (const dId of domainIds) {
					await db.insert(transaction).values({
						status: TRANSACTION_STATUS.PENDING,
						amount: data.amount,
						currency: data.currency,
						buyerId: data.buyerId,
						sellerId: parseInt(sellerId),
						domainId: dId,
						createdAt: new Date()
					});
				}
			}
			return { data: true } as Result<boolean>;
		} catch (err) {
			console.error(err);
			return {
				errors: [
					{
						message: "Failed to create transaction, please try again later.",
						field: "transaction",
						type: "create"
					}
				]
			};
		}
	}
};
