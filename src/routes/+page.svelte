<script lang="ts">
    import IconSearch from "~icons/bx/search";
    import { goto } from "$app/navigation";
    import successSvg from "$lib/assets/graphics/success.svg";
    import Button from "$lib/components/ui/button/button.svelte";
    import { cn } from "$lib/utils";
    import {
        DESKTOP_MAX_PAGE_WIDTH,
        TRANSITION_COLORS,
    } from "$lib/utils/constants";

    function searchForDomain(event: any) {
        let query = event.target[0].value;
        console.log(query);
        goto(`/search?q=${query}`);
    }
</script>

<span
    class="relative text-5xl font-semibold tracking-wider md:text-6xl lg:text-7xl"
>
    Every
    <span class="relative line-through decoration-shamrock-500">
        <img
            src={successSvg}
            alt="Success"
            class="xs:top-[-2em] xs:right-[-2.5em] absolute right-[-2em] top-[-0.4em] min-w-32 lg:right-[-3.5em]"
        />
        Business
    </span>
    <br /> Starts with a
    <span class="text-shamrock-700">Domain.</span>
</span>
<form
    class="flex w-full gap-2"
    on:submit|preventDefault={searchForDomain}
    method="post"
>
    <input
        type="text"
        class={cn(
            "w-full rounded-md border-2 border-slate-200 p-4 text-xl outline-none hover:border-slate-300 focus:border-shamrock-500 focus:ring-2 focus:ring-shamrock-500 focus:ring-offset-2",
            TRANSITION_COLORS,
        )}
        placeholder="Type a name or keyword"
        minlength="2"
    />
    <Button size={"icon"} type="submit">
        <svelte:component this={IconSearch} />
    </Button>
</form>
