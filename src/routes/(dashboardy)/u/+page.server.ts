import { domainRepository } from "$lib/server/db/repository/domain";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
    const user = locals.user

    // TODO: cachify these in redis in the future
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

    let domains = await domainRepository.getUsersDomains(user.id);

    stats.domains.value = domains.length;

    return { stats, domains };
};

