<script lang="ts">
	import DomainSearchInput from "$lib/components/domain-search-input.svelte";
	import { onMount } from "svelte";
	import { Cart } from "$lib/client/cart";
	import cartGif from "$lib/assets/graphics/cart.gif";
	import opportunities from "$lib/assets/graphics/opportunities.png";

	let cart: Cart;

	onMount(() => {
		cart = new Cart();
	});
</script>

{#if cart && cart.items.length > 0}
	<div class="yis"></div>
{:else}
	<div class="grid min-h-96 place-items-center gap-24">
		<div class="relative flex flex-col items-center gap-8">
			<img src={cartGif} alt="Cart" class="h-24 w-24" />
			<span
				class="relative text-3xl font-semibold tracking-wider sm:text-4xl md:text-5xl lg:text-6xl"
			>
				Your cart is
				<span class="line-through decoration-shamrock-500 decoration-4">
					empty.
				</span>
			</span>

			<img
				src={opportunities}
				alt="Opportunities"
				class="absolute -bottom-12 right-3 h-10 sm:-bottom-16 sm:right-6 sm:h-12 md:-bottom-20 md:right-8 md:h-16 lg:-bottom-24 lg:right-12 lg:h-20"
			/>
		</div>
		<DomainSearchInput />
	</div>
{/if}
