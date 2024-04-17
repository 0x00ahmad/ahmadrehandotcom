<script lang="ts">
    import DashboardNavbar from "$lib/components/dashboard-navbar.svelte";
    import Footer from "$lib/components/footer.svelte";

    import type { PageData } from "./u/$types";

    export let data: PageData;
</script>

<DashboardNavbar user={data.user} />

<div id="top" class="h-36 bg-opacity-0"></div>

<slot />

<Footer />
