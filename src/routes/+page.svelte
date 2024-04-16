<script lang="ts">
    import IconSearch from "~icons/bx/search";
    import Button from "$lib/components/ui/button/button.svelte";
    import { cn } from "$lib/utils";
    import {
        DESKTOP_MAX_PAGE_WIDTH,
        TRANSITION_COLORS,
    } from "$lib/utils/constants";

    function searchForDomain(event: any) {
        console.log("searching for domain");
    }
</script>

<main class="grid w-screen place-items-center py-64">
    <div class={cn("flex w-full flex-col gap-12", DESKTOP_MAX_PAGE_WIDTH)}>
        <span
            class="relative text-5xl font-semibold tracking-wider md:text-6xl lg:text-7xl"
        >
            Every
            <span class="line-through decoration-shamrock-500">Business</span>
            <br /> Starts with a
            <span class="text-shamrock-700">Domain.</span>
        </span>
        <form
            class="flex w-full gap-2"
            on:submit|preventDefault={searchForDomain}
        >
            <input
                type="text"
                class={cn(
                    "w-full rounded-md border-2 border-slate-200 p-4 text-xl outline-none hover:border-slate-300 focus:border-shamrock-500 focus:ring-2 focus:ring-shamrock-500 focus:ring-offset-2",
                    TRANSITION_COLORS,
                )}
                placeholder="Search for a domain"
            />
            <Button size={"icon"}>
                <svelte:component this={IconSearch} />
            </Button>
        </form>
    </div>
</main>
