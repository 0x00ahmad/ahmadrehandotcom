<script lang="ts">
	import IconCartAdd from "~icons/material-symbols/add-shopping-cart";
	import IconCartCheck from "~icons/mdi/cart-check";
	import IconCartMinus from "~icons/mdi/cart-minus";
	import DomainSearchInput from "$lib/components/domain-search-input.svelte";
	import Title from "$lib/components/title.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import { cn } from "$lib/utils";
	import { DEFAULT_CURRENCY, TRANSITION_COLORS } from "$lib/utils/constants";

	import type { PageData } from "./$types";
	import { addToCart, cart, removeFromCart } from "$lib/client/cart";
	import { goto } from "$app/navigation";

	export let data: PageData;
</script>

<DomainSearchInput defaultValue={data.query} />

<span>Found {data.domains.length} Results</span>

{#if data.domains.length > 0}
	<div class="flex flex-col gap-2">
		{#each data.domains as domain}
			<div
				class={cn(
					"flex cursor-pointer items-center justify-between gap-8 rounded-md border-2 border-shamrock-400 bg-shamrock-50 bg-opacity-15 p-4 hover:border-shamrock-500 hover:bg-opacity-70 hover:shadow-shamrock-600 dark:border-shamrock-700 dark:bg-shamrock-950 dark:bg-opacity-15 dark:hover:border-shamrock-600 dark:hover:bg-opacity-40",
					TRANSITION_COLORS
				)}
			>
				<div class="flex flex-col gap-2">
					<Title
						text={domain.name}
						size={"h4"}
						capitalize={false}
						weight={"medium"}
					/>
				</div>
				<div class="flex items-center gap-4">
					<Title
						text={`${DEFAULT_CURRENCY.symbol} ${domain.listPrice}`}
						size={"h4"}
						capitalize={false}
						weight={"semibold"}
					/>
					{#if cart}
						{#if !!$cart.find((item) => item.name === domain.name)}
							<div class="flex items-center gap-2">
								<Button
									size={"icon"}
									variant={"destructive"}
									on:click={() => {
										removeFromCart(domain.id);
									}}
								>
									<svelte:component this={IconCartMinus} class="h-6 w-6" />
								</Button>
								<Button
									size={"icon"}
									variant={"secondary"}
									on:click={() => {
										goto("/checkout");
									}}
								>
									<svelte:component this={IconCartCheck} class="h-6 w-6" />
								</Button>
							</div>
						{:else}
							<Button
								size={"icon"}
								on:click={() => {
									addToCart({
										id: domain.id,
										name: domain.name,
										price: domain.listPrice
									});
								}}
							>
								<svelte:component this={IconCartAdd} class="h-6 w-6" />
							</Button>
						{/if}
					{/if}
				</div>
			</div>
		{/each}
	</div>
{:else}
	<div class="grid place-items-center py-32">
		<Title
			text={"No matching results found."}
			size={"h3"}
			capitalize={false}
			weight={"normal"}
		/>
		<p>
			Try searching for another name, or click here to browse
			<a class="text-shamrock-500" href="/search?q=">all domain names</a>
		</p>
	</div>
{/if}
