<script lang="ts">
    import DashboardNavbar from "$lib/components/dashboard-navbar.svelte";
    import Footer from "$lib/components/footer.svelte";

    import type { PageData } from "./u/$types";

    export let data: PageData;
</script>

<DashboardNavbar user={data.user} />

<slot />

<Footer />
