<script lang="ts">
    import "../../app.pcss";

    import { onNavigate } from "$app/navigation";
    import Footer from "$lib/components/footer.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import { cn } from "$lib/utils";
    import { MAX_PAGE_WIDTH } from "$lib/utils/constants";
    import { onMount } from "svelte";

    import type { PageData } from "./$types";

    export let data: PageData;

    let isLandingPage = false;

    onMount(() => {
        isLandingPage = window.location.pathname === "/";
    });

    onNavigate((e) => {
        isLandingPage = e.to ? e.to.url.pathname === "/" : false;
    });
</script>

<Navbar user={data.user} />

<div id="top" class="h-32 bg-opacity-0"></div>

<main
    class={cn(
        "h-[80vh]",
        isLandingPage ? "grid place-items-center" : "flex justify-center",
    )}
>
    <div class={cn("flex w-full flex-col gap-12", MAX_PAGE_WIDTH)}>
        <slot />
    </div>
</main>

<Footer />
