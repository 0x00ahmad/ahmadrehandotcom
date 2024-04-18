<script lang="ts">
    import DomainSearchInput from "$lib/components/domain-search-input.svelte";
    import Title from "$lib/components/title.svelte";

    import type { PageData } from "./$types";
    import StatsCards from "./stats-cards.svelte";

    export let data: PageData;
</script>

<Title text={"Dashboard"} size={"h1"} />

<DomainSearchInput defaultPlaceholder="Start searcing for the right domain" />

<StatsCards data={data.stats} />
