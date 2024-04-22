<script lang="ts">
	import IconDashboard from "~icons/lucide/layout-dashboard";
	import IconSquareUser from "~icons/lucide/square-user";
	import IconWallet from "~icons/lucide/wallet";
	import IconClose from "~icons/material-symbols/close-rounded";
	import IconArrowUp from "~icons/ph/arrow-fat-line-up";
	import IconMenu from "~icons/ri/menu-line";
	import IconShoppingCart from "~icons/ri/shopping-cart-line";
	import cn from "clsx";
	import type { User } from "lucia";

	import Logo from "./logo.svelte";
	import Button from "./ui/button/button.svelte";
	import { cart } from "$lib/client/cart";

	export let user: User | null = null;

	let showMobileMenu = false;

	let windowY = 0;
	let pageHeight = 0;

	const links = [
		{ name: "Dashboard", href: "/u", icon: IconDashboard },
		{ name: "Finances", href: "/u/finances", icon: IconWallet },
		{ name: "Profile", href: "/u/profile", icon: IconSquareUser },
		{ name: "View Shopping Cart", href: "/checkout", icon: IconShoppingCart }
	];
</script>

<svelte:window bind:scrollY={windowY} bind:outerHeight={pageHeight} />

<nav
	class={cn(
		"fixed z-[999] flex w-full items-center justify-between rounded-md border-b-2 bg-shamrock-50 bg-opacity-15 p-6 backdrop-blur-md dark:bg-shamrock-950 dark:bg-opacity-5 md:px-12"
	)}
>
	<div class="flex items-center gap-4">
		<a href="/" class={cn("cursor-pointer")}>
			<div class="flex items-center justify-between gap-4">
				<Logo />
			</div>
		</a>
		{#each links as link}
			{#if link.href !== "/checkout"}
				<a href={link.href} class="hidden md:block">{link.name}</a>
			{/if}
		{/each}
	</div>

	<Button
		class="md:hidden"
		on:click={() => (showMobileMenu = !showMobileMenu)}
		variant={"outline"}
		size={"iconSm"}
	>
		<svelte:component this={IconMenu} class="h-6 w-6 cursor-pointer" />
	</Button>

	<div class="hidden items-center gap-4 md:flex">
		<a href="/checkout" class="relative">
			<span
				class="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-shamrock-500 p-1 text-xs text-white"
			>
				{$cart.length}
			</span>
			<Button size={"iconSm"} variant={"ghost"}>
				<svelte:component this={IconShoppingCart} class="h-6 w-6" />
			</Button>
		</a>
		{#if user}
			<Button href={"/auth/signout"}>Sign Out</Button>
		{:else}
			<Button
				on:click={() => {
					window.location.href = "/auth/signin";
				}}
			>
				Sign In
			</Button>
		{/if}
	</div>
</nav>

<div
	class={cn(
		"fixed left-0 top-0 z-[1000] h-screen w-screen bg-white bg-opacity-80 backdrop-blur-xl dark:bg-slate-950 dark:bg-opacity-80 md:hidden",
		{
			hidden: !showMobileMenu
		}
	)}
>
	<div class="flex w-full flex-col gap-8 p-8">
		<div class="flex w-full items-center justify-between gap-2">
			<Logo />
			<Button
				on:click={() => (showMobileMenu = false)}
				variant={"outline"}
				size={"iconSm"}
			>
				<svelte:component this={IconClose} class="h-6 w-6" />
			</Button>
		</div>

		{#each links as link}
			<Button
				variant={"ghost"}
				href={link.href}
				class="flex w-full justify-start gap-2 text-start"
				on:click={() => (showMobileMenu = false)}
			>
				<svelte:component this={link.icon} class="h-6 w-6" />
				{link.name}
			</Button>
		{/each}

		{#if user}
			<Button href={"/auth/signout"}>Sign Out</Button>
		{:else}
			<Button
				on:click={() => {
					window.location.href = "/auth/signin";
				}}
			>
				Sign In
			</Button>
		{/if}
	</div>
</div>

<!-- the back to top button-->

{#if windowY > pageHeight}
	<a
		href="#top"
		class="fixed bottom-4 right-4 z-[1000] cursor-pointer rounded-full border-2 border-shamrock-500 bg-shamrock-800 bg-opacity-40 p-4 transition-colors duration-150 active:bg-opacity-30"
		on:click={() => window.scrollTo({ top: 0, behavior: "smooth" })}
	>
		<svelte:component this={IconArrowUp} class="h-8 w-8 text-shamrock-900" />
	</a>
{/if}
