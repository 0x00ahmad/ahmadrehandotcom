<script lang="ts">
    import DomainSearchInput from "$lib/components/domain-search-input.svelte";
    import Title from "$lib/components/title.svelte";

    import type { PageData } from "./$types";
    import CreateDomainModal from "./create-domain-modal.svelte";
    import DomainsTable from "./domains-table.svelte";
    import StatsCards from "./stats-cards.svelte";

    export let data: PageData;
</script>

<Title text={"Dashboard"} size={"h1"} />

<DomainSearchInput defaultPlaceholder="Start searcing for the right domain" />

<StatsCards data={data.stats} />

<div class="flex flex-col items-center justify-between gap-8 md:flex-row">
    <Title text={"Domains"} size={"h3"} />
    <CreateDomainModal bind:data={data.form} />
</div>

<DomainsTable data={data.domains} />
