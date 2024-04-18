import { db } from "..";
import { domain } from "../schema";
import type { Result } from "$lib/types";
import { eq, like } from "drizzle-orm";

export type Domain = typeof domain.$inferSelect & { categories: string[] };
export type Domains = Domain[];
export type CreateDomain = typeof domain.$inferInsert & { categories: string[] };

export const domainRepository = {
    searchDomainNames: async function(query: string) {
        try {
            const matches = await db.query.domain.findMany({
                where: like(domain.name, `%${query}%`),
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
            where: eq(domain.sellerId, userId),
            orderBy: (results, { desc }) => [desc(results.createdAt)],
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
    }
}
