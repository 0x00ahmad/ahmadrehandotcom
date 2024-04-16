import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({ parent }) => {
    const parentLocals = await parent()
    return { ...parentLocals };
}

