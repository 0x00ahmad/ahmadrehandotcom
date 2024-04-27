import { db } from "..";
import { domain } from "../schema";
import type { Result } from "$lib/types";
import { and, eq, inArray, like, not } from "drizzle-orm";
import { DOMAIN_STATUS } from "$lib/utils/constants";

export type Domain = typeof domain.$inferSelect & { categories: string[] };
export type Domains = Domain[];
export type CreateDomain = typeof domain.$inferInsert & { categories: string[] };

export const domainRepository = {
	searchDomainNames: async function (query: string) {
		try {
			const matches = await db.query.domain.findMany({
				where: and(
					like(domain.name, `%${query}%`),
					eq(domain.status, DOMAIN_STATUS.ACTIVE)
				),
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

	getAllDomainsById: async function (domainsIds: number[]) {
		return await db.query.domain.findMany({
			where: inArray(domain.id, domainsIds)
		});
	},

	getUsersDomains: async function (userId: number) {
		return await db.query.domain.findMany({
			where: and(
				eq(domain.sellerId, userId),
				not(eq(domain.status, DOMAIN_STATUS.DELETED))
			),
			orderBy: (results, { desc }) => [desc(results.createdAt)]
		});
	},

	getDomainById: async function (id: number) {
		return await db.query.domain.findFirst({
			where: and(eq(domain.id, id), not(eq(domain.status, DOMAIN_STATUS.DELETED)))
		});
	},

	createDomain: async function (data: CreateDomain) {
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

	deactivateDomainIfTransferCodeInvalid: async function (
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

	saveChanges: async function (
		id: number,
		sellerId: number,
		listPrice: number,
		acceptedPrice: number,
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
				errors: [
					{
						message: "Domain not found, please try again later.",
						field: "domain",
						type: "save"
					}
				]
			};
		}
		try {
			await db
				.update(domain)
				.set({
					listPrice,
					acceptedPrice,
					expiresAt,
					transferCode,
					status
				})
				.where(and(eq(domain.id, id), eq(domain.sellerId, sellerId)));
			return { data: true };
		} catch (err) {
			return {
				errors: [
					{
						message: "Failed to save changes, please try again later.",
						field: "domain",
						type: "save"
					}
				]
			};
		}
	},

	softDeleteDomain: async function (id: number, sellerId: number) {
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
				errors: [
					{
						message: "Failed to delete domain, please try again later.",
						field: "domain",
						type: "delete"
					}
				]
			} as Result<boolean>;
		}
	},

	changeDomainStatus: async function (
		id: number,
		sellerId: number,
		status: string
	) {
		await db
			.update(domain)
			.set({ status })
			.where(and(eq(domain.id, id), eq(domain.sellerId, sellerId)));
	}
};
