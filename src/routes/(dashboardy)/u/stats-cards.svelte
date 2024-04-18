<script lang="ts">
    import IconAtSign from "~icons/lucide/at-sign";
    import * as Card from "$lib/components/ui/card";
    import { DEFAULT_CURRENCY } from "$lib/utils/constants";

    export let data: Record<string, Record<string, string | number>>;
</script>

<div class="flex w-full flex-col gap-4 md:gap-6 lg:flex-row lg:gap-8">
    <Card.Root class="w-full">
        <Card.Header>
            <div class="flex w-full items-center justify-between gap-4">
                <Card.Title>Domains</Card.Title>
                <svelte:component
                    this={IconAtSign}
                    class="h-4 w-4 text-shamrock-700"
                />
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
                <svelte:component
                    this={IconAtSign}
                    class="h-4 w-4 text-shamrock-700"
                />
            </div>
        </Card.Header>
        <Card.Content>
            <p>{DEFAULT_CURRENCY.symbol} {data.sales.value} this month</p>
        </Card.Content>
    </Card.Root>

    <Card.Root class="w-full">
        <Card.Header>
            <div class="flex w-full items-center justify-between gap-4">
                <Card.Title>Domains</Card.Title>
                <svelte:component
                    this={IconAtSign}
                    class="h-4 w-4 text-shamrock-700"
                />
            </div>
        </Card.Header>
        <Card.Content>
            <p>{data.domains.value}</p>
        </Card.Content>
    </Card.Root>
</div>
