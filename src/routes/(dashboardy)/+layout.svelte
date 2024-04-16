<script lang="ts">
    import DashboardNavbar from "$lib/components/dashboard-navbar.svelte";

    import type { PageData } from "./u/$types";

    export let data: PageData;

    console.log(data.user, data.session);
</script>

<DashboardNavbar />

<slot />
