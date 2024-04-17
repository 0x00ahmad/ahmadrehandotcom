import { domainRepository } from '$lib/server/db/repository/domain';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (yes) => {
    const query = yes.url.searchParams.get("q") as string;
    const res = await domainRepository.searchDomainNames(query);
    if (res.errors) return { domains: [], errors: res.errors };
    return { domains: res.data, query };
};
