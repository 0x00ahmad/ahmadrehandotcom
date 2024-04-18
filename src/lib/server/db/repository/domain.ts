import { db } from "..";
import { domain } from "../schema";
import type { Result } from "$lib/types";
import { eq, like } from "drizzle-orm";

export type Domain = typeof domain.$inferSelect & { categories: string[] };
export type Domains = Domain[];

export type CreateDomain = typeof domain.$inferInsert & { categories: string[] };

// const testDomains = {
//     data: [
//         {
//             id: 1,
//             name: "exmaple.com",
//             expiresAt: new Date(),
//             sellerId: 1,
//             createdAt: new Date(),
//             listPrice: 1300,
//             categories: ["business", "technology"],
//             acceptedPrice: 1200,
//         },
//         {
//             id: 2,
//             name: "exmaple22.com",
//             expiresAt: new Date(),
//             sellerId: 1,
//             createdAt: new Date(),
//             listPrice: 1000,
//             categories: ["business", "technology"],
//             acceptedPrice: 1000,
//         },
//     ],
// } as Result<Domains>;



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
    }
}
