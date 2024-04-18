import { domainRepository } from "$lib/server/db/repository/domain";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
    const user = locals.user
    const stats = {
        domains: {
            value: 0,
        },
        sales: {
            value: 0,
            lastMonth: 0,
        },
        domainViews: {
            value: 0,
            monthlyAverage: 0,
        },
    }
    if (!user) return { stats, domains: [] }
    const domains = await domainRepository.getUsersDomains(user.id);
    return {
        stats,
        domains,
    };
};
