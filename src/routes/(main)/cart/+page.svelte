<script lang="ts">
	import DomainSearchInput from "$lib/components/domain-search-input.svelte";
	import IconTrash from "~icons/lucide/trash-2";
	import * as Card from "$lib/components/ui/card";
	import { cart, clearCart, removeFromCart } from "$lib/client/cart";
	import cartGif from "$lib/assets/graphics/cart.gif";
	import opportunities from "$lib/assets/graphics/opportunities.png";
	import Title from "$lib/components/title.svelte";
	import {
		DEFAULT_CURRENCY,
		NAV_LINKS,
		TRANSITION_COLORS
	} from "$lib/utils/constants";
	import Button from "$lib/components/ui/button/button.svelte";
	import type { PageData } from "./$types";
	import { cn } from "$lib/utils";
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { proceedTransactionSchema } from "./schema";
	import { toast } from "svelte-sonner";
	import { generateId } from "lucia";
	import { goto } from "$app/navigation";

	export let data: PageData;

	$: total = $cart.reduce((acc, item) => acc + item.price, 0);

	let submitting = false;

	const form = superForm(data.form!, {
		dataType: "json",
		validators: zodClient(proceedTransactionSchema),
		resetForm: false,
		onSubmit: (event) => {
			submitting = true;
			console.log($cart.map((item) => item.id));
			event.jsonData({
				id: generateId(32),
				domainIds: $cart.map((item) => item.id)
			});
		},
		onResult: (res) => {
			submitting = false;
			if (res.result.status !== 200) {
				toast.error("Couple not complete transaction. Please try again later.");
			}
			toast.success("Transaction completed successfully.");
			clearCart();
			goto(NAV_LINKS.dashboard.home);
		}
	});
	const { form: formData, enhance } = form;
</script>

{#if $cart.length > 0}
	<Title text="Your Cart" size="h1" />
	<div class="flex w-full flex-col gap-12 lg:grid lg:grid-cols-5">
		<div class="col-span-3 flex w-full flex-col gap-3">
			{#each $cart as cartItem}
				<div
					class={cn(
						"flex items-center justify-between gap-8 rounded-md border-2 border-shamrock-400 bg-shamrock-50 bg-opacity-15 p-4 hover:border-shamrock-500 hover:bg-opacity-70 hover:shadow-shamrock-600 dark:border-shamrock-700 dark:bg-shamrock-950 dark:bg-opacity-15 dark:hover:border-shamrock-600 dark:hover:bg-opacity-40",
						TRANSITION_COLORS
					)}
				>
					<div class="flex flex-col gap-2">
						<Title
							text={cartItem.name}
							size="h4"
							capitalize={false}
							weight="medium"
						/>
					</div>

					<div class="flex items-center gap-4">
						<Title
							text={`${DEFAULT_CURRENCY.symbol} ${cartItem.price}`}
							size="h4"
							capitalize={false}
							weight="semibold"
						/>
						<Button
							size={"iconSm"}
							variant={"ghost"}
							on:click={() => {
								removeFromCart(cartItem.id);
							}}
						>
							<svelte:component this={IconTrash} class="h-6 w-6" />
						</Button>
					</div>
				</div>
			{/each}
		</div>

		<Card.Root class="col-span-2 w-full">
			<Card.Header>
				<Card.Title class={"text-xl"}>Order Summary</Card.Title>
			</Card.Header>
			<Card.Content class="flex flex-col gap-6">
				<div class="flex w-full items-center justify-between gap-4 lg:gap-8">
					<span>Final Price</span>
					<span>{DEFAULT_CURRENCY.symbol} {total}</span>
				</div>

				<!-- TODO: integrate the holding of a payment here, before doing this complete transaction thing -->
				{#if !!data.user}
					<form
						method="post"
						action="/cart/?/completeTransaction"
						class="w-full"
						use:enhance
					>
						<Button class="w-full" type="submit">Proceed with transaction</Button>
					</form>
					<small>
						By proceeding with the transaction, you agree to our
						<a href="/legal" class="text-shamrock-700">Terms & Conditions </a>
					</small>
				{:else}
					<Button href={NAV_LINKS.signin}>Sign in to continue</Button>
				{/if}
			</Card.Content>
		</Card.Root>
	</div>
	<DomainSearchInput defaultPlaceholder={"Search for more domains"} />
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
