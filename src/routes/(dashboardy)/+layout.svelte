<script lang="ts">
    import DashboardNavbar from "$lib/components/dashboard-navbar.svelte";
    import Footer from "$lib/components/footer.svelte";
    import { cn } from "$lib/utils";
    import { MAX_PAGE_WIDTH } from "$lib/utils/constants";

    import type { PageData } from "./u/$types";

    export let data: PageData;
</script>

<DashboardNavbar user={data.user} />

<div id="top" class="h-36 bg-opacity-0"></div>

<main class="grid w-full place-items-center">
    <div class={cn("flex w-full flex-col gap-12", MAX_PAGE_WIDTH)}>
        <slot />
    </div>
</main>

<Footer />
