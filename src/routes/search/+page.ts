import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    const domains = [] as string[];

    return {
        domains
    };
};
