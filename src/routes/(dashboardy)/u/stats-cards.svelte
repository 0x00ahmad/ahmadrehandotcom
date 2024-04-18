<script lang="ts">
    import IconAtSign from "~icons/lucide/at-sign";
    import IconView from "~icons/lucide/view";
    import IconWallet from "~icons/lucide/wallet";
    import * as Card from "$lib/components/ui/card";
    import { DEFAULT_CURRENCY } from "$lib/utils/constants";

    export let data: Record<string, Record<string, string | number>>;

    let iconStyling = "h-6 w-6 text-shamrock-500 dark:text-shamrock-400";
</script>

<div class="flex w-full flex-col gap-4 md:gap-6 lg:flex-row lg:gap-8">
    <Card.Root class="w-full">
        <Card.Header>
            <div class="flex w-full items-center justify-between gap-4">
                <Card.Title>Domains</Card.Title>
                <svelte:component this={IconAtSign} class={iconStyling} />
            </div>
        </Card.Header>
        <Card.Content>
            <p>{data.domains.value}</p>
        </Card.Content>
    </Card.Root>

    <Card.Root class="w-full">
        <Card.Header>
            <div class="flex w-full items-center justify-between gap-4">
                <Card.Title>Earnings</Card.Title>
                <svelte:component this={IconWallet} class={iconStyling} />
            </div>
        </Card.Header>
        <Card.Content>
            <p>{DEFAULT_CURRENCY.symbol} {data.sales.value}</p>
        </Card.Content>
    </Card.Root>

    <Card.Root class="w-full">
        <Card.Header>
            <div class="flex w-full items-center justify-between gap-4">
                <Card.Title>Views</Card.Title>
                <svelte:component this={IconView} class={iconStyling} />
            </div>
        </Card.Header>
        <Card.Content>
            <p>{data.domainViews.value}</p>
        </Card.Content>
    </Card.Root>
</div>
