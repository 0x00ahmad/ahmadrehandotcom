import { db } from "..";
import { transaction } from "../schema";
import type { Result } from "$lib/types";
import { and, eq, inArray } from "drizzle-orm";
import { TRANSACTION_STATUS } from "$lib/utils/constants";

export type Transaction = typeof transaction.$inferSelect;
export type CreateTransaction = typeof transaction.$inferInsert;

export const transactionRepository = {
    createTransactions: async function(data: {
        amount: number;
        currency: string;
        buyerId: number;
        sellerId: number;
        domainIds: number[];
    }) {
        const existingTransaction = await db.query.transaction.findFirst({
            where: and(
                inArray(transaction.domainId, data.domainIds),
                eq(transaction.buyerId, data.buyerId),
                eq(transaction.sellerId, data.sellerId)
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
            } as Result<boolean>;
        }

        try {
            await Promise.all(
                data.domainIds.map((domainId) =>
                    db.insert(transaction).values({
                        status: TRANSACTION_STATUS.PENDING,
                        amount: data.amount,
                        currency: data.currency,
                        buyerId: data.buyerId,
                        sellerId: data.sellerId,
                        domainId,
                        createdAt: new Date()
                    })
                )
            );
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
            } as Result<boolean>;
        }
    }
};
