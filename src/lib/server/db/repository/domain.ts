import { db } from "..";
import { domain } from "../schema";
import type { Result } from "$lib/types";
import { and, eq, inArray, like, not } from "drizzle-orm";
import { DOMAIN_STATUS } from "$lib/utils/constants";

export type Domain = typeof domain.$inferSelect & { categories: string[] };
export type Domains = Domain[];
export type CreateDomain = typeof domain.$inferInsert & { categories: string[] };

export const domainRepository = {
	searchDomainNames: async function(query: string, userId?: number) {
		try {
			let condition = and(
				like(domain.name, `%${query}%`),
				eq(domain.status, DOMAIN_STATUS.ACTIVE)
			);
			if (userId) {
				condition = and(
					like(domain.name, `%${query}%`),
					eq(domain.status, DOMAIN_STATUS.ACTIVE),
					not(eq(domain.sellerId, userId))
				);
			}
			const matches = await db.query.domain.findMany({
				where: condition,
				orderBy: (results, { asc }) => [asc(results.name)],
				columns: {
					id: true,
					name: true,
					listPrice: true,
					sellerId: true,
					expiresAt: true,
					lastModified: true
				}
			});
			return { data: matches } as any as Result<Domains>;
		} catch (err) {
			return {
				errors: [
					{
						message: "Failed to search domain names, please try again later.",
						field: "domain",
						type: "search"
					}
				]
			} as Result<Domains>;
		}
	},

	getAllDomainsById: async function(domainsIds: number[]) {
		return await db.query.domain.findMany({
			where: and(
				inArray(domain.id, domainsIds),
				not(eq(domain.status, DOMAIN_STATUS.DELETED))
			)
		});
	},

	getUsersDomains: async function(userId: number) {
		return (await db.query.domain.findMany({
			where: and(
				eq(domain.sellerId, userId),
				not(eq(domain.status, DOMAIN_STATUS.DELETED))
			),
			orderBy: (results, { desc }) => [desc(results.createdAt)]
		})) as Domains;
	},

	getDomainById: async function(id: number) {
		return await db.query.domain.findFirst({
			where: and(eq(domain.id, id), not(eq(domain.status, DOMAIN_STATUS.DELETED)))
		});
	},

	createDomain: async function(data: CreateDomain) {
		try {
			await db.insert(domain).values({
				...data,
				categories: data.categories.join(",")
			});
			return { data: true } as Result<boolean>;
		} catch (err) {
			return {
				errors: [
					{
						message: "Failed to create domain, please try again later.",
						field: "domain",
						type: "create"
					}
				]
			} as Result<boolean>;
		}
	},

	deactivateDomainIfTransferCodeInvalid: async function(
		id: number,
		sellerId: number,
		status: string,
		transferCode: string
	): Promise<Result<boolean>> {
		const domainInfo = await db.query.domain.findFirst({
			where: and(eq(domain.id, id), eq(domain.sellerId, sellerId))
		});
		if (!domainInfo) {
			return {
				errors: [
					{
						message: "Domain not found, please try again later.",
						field: "domain",
						type: "save"
					}
				]
			};
		}
		if (
			// either the status is active and the transfer code is empty
			(status === DOMAIN_STATUS.ACTIVE && transferCode.length < 1) ||
			// or the status is active and the transfer code is empty
			(domainInfo.status === DOMAIN_STATUS.ACTIVE &&
				domainInfo.transferCode &&
				domainInfo.transferCode.length < 1) ||
			(domainInfo.status === DOMAIN_STATUS.ACTIVE && !domainInfo.transferCode)
		) {
			if (domainInfo.status === DOMAIN_STATUS.ACTIVE) {
				await db
					.update(domain)
					.set({ status: DOMAIN_STATUS.INACTIVE, transferCode: "" })
					.where(and(eq(domain.id, id), eq(domain.sellerId, sellerId)));
			}
			return {
				errors: [
					{
						message:
							"Please provide a transfer code in order to make a domain active.",
						field: "transferCode",
						type: "save"
					}
				]
			};
		}

		return { data: true };
	},

	saveChanges: async function(
		id: number,
		sellerId: number,
		listPrice: number,
		expiresAt: Date,
		transferCode: string,
		status: string,
		domainInfo?: Domain
	): Promise<Result<boolean>> {
		if (!domainInfo) {
			domainInfo = (await db.query.domain.findFirst({
				where: and(eq(domain.id, id), eq(domain.sellerId, sellerId))
			})) as Domain;
		}
		if (!domainInfo) {
			return {
				errors: [{ message: "Domain not found, please try again later." }]
			};
		}
		if (
			![
				DOMAIN_STATUS.ACTIVE,
				DOMAIN_STATUS.INACTIVE,
				DOMAIN_STATUS.ON_HOLD
			].includes(domainInfo.status)
		) {
			return {
				errors: [{ message: "Cannot update domain info with current status" }]
			};
		}
		try {
			if (domainInfo.status === DOMAIN_STATUS.ON_HOLD) {
				await db
					.update(domain)
					.set({ transferCode })
					.where(and(eq(domain.id, id), eq(domain.sellerId, sellerId)));
				return {
					errors: [
						{ message: "Only saved domain transfer code in it's current status" }
					]
				};
			}
			await db
				.update(domain)
				.set({ listPrice, expiresAt, transferCode, status })
				.where(and(eq(domain.id, id), eq(domain.sellerId, sellerId)));
			return { data: true };
		} catch (err) {
			return {
				errors: [{ message: "Failed to save changes, please try again later." }]
			};
		}
	},

	softDeleteDomain: async function(id: number, sellerId: number) {
		try {
			await db
				.update(domain)
				.set({
					status: DOMAIN_STATUS.DELETED,
					deletedAt: new Date()
				})
				.where(and(eq(domain.id, id), eq(domain.sellerId, sellerId)));
			return { data: true } as Result<boolean>;
		} catch (err) {
			return {
				errors: [{ message: "Failed to delete domain, please try again later." }]
			} as Result<boolean>;
		}
	},

	changeDomainStatus: async function(
		id: number,
		sellerId: number,
		status: string
	) {
		try {
			await db
				.update(domain)
				.set({ status })
				.where(and(eq(domain.id, id), eq(domain.sellerId, sellerId)));
			return { data: true };
		} catch (err) {
			return {
				errors: [
					{
						message:
							(err as any).message ??
							"Failed to change domain status, please try again later."
					}
				]
			};
		}
	},

	moveDomainToPendingForTransferState: async function(
		buyerId: number,
		domains: Domain[]
	) {
		try {
			db.transaction(async (trx) => {
				for (const d of domains) {
					await trx
						.update(domain)
						.set({ status: DOMAIN_STATUS.ON_HOLD, sellerId: d.sellerId, buyerId })
						.where(and(eq(domain.id, d.id), eq(domain.sellerId, d.sellerId)));
					await trx.insert(domain).values({
						...d,
						id: undefined,
						status: DOMAIN_STATUS.TO_CONFIRM,
						sellerId: buyerId,
						views: 0,
						buyerId: undefined,
						createdAt: new Date(),
						deletedAt: undefined,
						lastModified: new Date()
					});
				}
			});
			return { data: true };
		} catch (err) {
			return {
				errors: [
					{
						message:
							(err as any).message ??
							"Failed to change domain status, please try again later.",
						field: "domain",
						type: "status"
					}
				]
			};
		}
	},

	confirmDomainTransferFromBuyer: async function(
		domainId: number,
		buyerId: number
	): Promise<Result<boolean>> {
		try {
			await db.transaction(async (trx) => {
				// this is the one the buyer owns
				const yes = await trx
					.update(domain)
					.set({ status: DOMAIN_STATUS.INACTIVE })
					.where(and(eq(domain.id, domainId), eq(domain.sellerId, buyerId)))
					.returning({ id: domain.id, name: domain.name });

				if (!yes || yes.length < 1) {
					return {
						errors: [
							{
								message:
									"Failed to save confirmation changes, please try again later.",
								field: "domain",
								type: "status"
							}
						]
					};
				}

				// the one the previous seller owned
				await trx
					.update(domain)
					.set({ status: DOMAIN_STATUS.SOLD })
					.where(
						and(
							eq(domain.buyerId, buyerId),
							eq(domain.name, yes[0].name),
							not(eq(domain.sellerId, buyerId))
						)
					);
			});
			return { data: true };
		} catch (err) {
			return {
				errors: [
					{
						message:
							(err as any).message ??
							"Failed to save confirmation changes, please try again later.",
						field: "domain",
						type: "status"
					}
				]
			};
		}
	}
};
