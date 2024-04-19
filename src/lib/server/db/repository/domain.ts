import { db } from "..";
import { domain } from "../schema";
import type { Result } from "$lib/types";
import { and, eq, like, not } from "drizzle-orm";
import { DOMAIN_STATUS } from "$lib/utils/constants";

export type Domain = typeof domain.$inferSelect & { categories: string[] };
export type Domains = Domain[];
export type CreateDomain = typeof domain.$inferInsert & { categories: string[] };

export const domainRepository = {
    searchDomainNames: async function(query: string) {
        try {
            const matches = await db.query.domain.findMany({
                where: and(
                    like(domain.name, `%${query}%`),
                    eq(domain.status, DOMAIN_STATUS.ACTIVE),
                ),
                orderBy: (results, { asc }) => [asc(results.name)],
            });
            return { data: matches } as any as Result<Domains>;
        } catch (err) {
            return {
                errors: [{
                    message: "Failed to search domain names, please try again later.",
                    field: "domain",
                    type: "search",
                }],
            } as Result<Domains>;
        }
    },

    getUsersDomains: async function(userId: number) {
        return await db.query.domain.findMany({
            where: and(
                eq(domain.sellerId, userId),
                not(eq(domain.status, DOMAIN_STATUS.DELETED)),
            ),
            orderBy: (results, { desc }) => [desc(results.createdAt)],
        });
    },

    getDomainById: async function(id: number) {
        return await db.query.domain.findFirst({
            where: and(
                eq(domain.id, id),
                not(eq(domain.status, DOMAIN_STATUS.DELETED)),
            ),
        });
    },

    createDomain: async function(data: CreateDomain) {
        try {
            await db.insert(domain).values({
                ...data,
                categories: data.categories.join(","),
            });
            return { data: true } as Result<boolean>;
        } catch (err) {
            return {
                errors: [{
                    message: "Failed to create domain, please try again later.",
                    field: "domain",
                    type: "create",
                }],
            } as Result<boolean>;
        }
    },

    saveChanges: async function(
        id: number,
        sellerId: number,
        listPrice: number,
        acceptedPrice: number,
        expiresAt: Date,
        status: string,
    ) {
        try {
            await db.update(domain).set({
                listPrice,
                acceptedPrice,
                expiresAt,
                status,
            }).where(
                and(eq(domain.id, id), eq(domain.sellerId, sellerId))
            );
            return { data: true } as Result<boolean>;
        } catch (err) {
            return {
                errors: [{
                    message: "Failed to save changes, please try again later.",
                    field: "domain",
                    type: "save",
                }],
            } as Result<boolean>;
        }
    },

    softDeleteDomain: async function(id: number, sellerId: number) {
        try {
            await db.update(domain).set({
                status: DOMAIN_STATUS.DELETED,
                deletedAt: new Date(),
            }).where(
                and(eq(domain.id, id), eq(domain.sellerId, sellerId))
            );
            return { data: true } as Result<boolean>;
        } catch (err) {
            return {
                errors: [{
                    message: "Failed to delete domain, please try again later.",
                    field: "domain",
                    type: "delete",
                }],
            } as Result<boolean>;
        }
    }
}
