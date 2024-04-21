import type { domain } from "$lib/server/db/schema";

export type Domain = typeof domain.$inferSelect & { categories: string[] };
export type Domains = Domain[];
