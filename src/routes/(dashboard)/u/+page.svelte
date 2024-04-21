<script lang="ts">
    import DomainSearchInput from "$lib/components/domain-search-input.svelte";
    import Title from "$lib/components/title.svelte";
    import Button from "$lib/components/ui/button/button.svelte";

    import type { PageData } from "./$types";
    import DomainsTable from "./domains-table/index.svelte";
    import StatsCards from "./stats-cards.svelte";

    export let data: PageData;
</script>

<Title text={"Dashboard"} size={"h1"} />

<DomainSearchInput defaultPlaceholder="Start searcing for the right domain" />

<StatsCards data={data.stats} />

<div class="flex flex-row items-center justify-between gap-4 md:gap-8">
    <Title text={"Domains"} size={"h3"} />
    <Button href={"/u/new-domain"}>New Domain</Button>
</div>

<DomainsTable data={data.domains} />
