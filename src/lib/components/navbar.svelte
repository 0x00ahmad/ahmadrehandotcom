<script lang="ts">
	import IconMenu from "~icons/material-symbols-light/menu";
	import IconArrowUp from "~icons/ph/arrow-fat-line-up";
	import clsx from "clsx";
	import logo from "$lib/assets/logo.png";
	import { DESKTOP_MAX_PAGE_WIDTH } from "$lib/utils/constants";
	import Button from "./ui/button/button.svelte";

	const links = [
		{ name: "Home", link: "/" },
		{ name: "Work", link: "/#work" },
		{ name: "About", link: "/#about" },
	];

	let showMobileMenu = false;

	let windowY = 0;
	let pageHeight = 0;
</script>

<svelte:window bind:scrollY={windowY} bind:outerHeight={pageHeight} />

<div class="fixed top-5 w-screen grid place-items-center">
	<nav
		class={clsx(
			"flex justify-between w-full p-4 md:px-12 bg-brussian-50 bg-opacity-15 backdrop-blur-lg z-[1000] rounded-full shadow-lg",
			"border-t-2 border-t-white border-opacity-25",
			DESKTOP_MAX_PAGE_WIDTH,
		)}
	>
		<a href="/" class={clsx("cursor-pointer")}>
			<div class="flex items-center justify-between gap-4">
				<img src={logo} alt="" class="w-16" />
				<p
					class="bg-gradient-to-r from-brussian-100 to-brussian-400 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl"
				>
					Ahmad Rehan
				</p>
			</div>
		</a>

		<button
			class="flex flex-col p-1 rounded-md border-2 border-brussian-700 md:hidden text-brussian-100"
			on:click={() => (showMobileMenu = !showMobileMenu)}
		>
			<svelte:component this={IconMenu} class="w-6 h-6 cursor-pointer" />
		</button>

		<div class="hidden gap-8 items-center md:flex">
			{#each links as link}
				<a
					on:click={() => (showMobileMenu = false)}
					class={clsx(
						"text-lg xl:text-xl px-2 py-1 text-brussian-100",
					)}
					href={link.link}>{link.name}</a
				>
			{/each}
			<Button>Contact Me</Button>
		</div>
	</nav>
</div>

<div
	class={clsx(
		"fixed top-0 left-0 w-screen h-screen bg-brussian-100 bg-opacity-90 backdrop-blur-md z-[999]",
		{ hidden: !showMobileMenu },
	)}
>
	<div class="flex flex-col gap-8 items-center p-4 w-full">
		{#each links as link}
			<a
				class={clsx(
					"font-sans text-xl p-2 border-b-2 border-brussian-500 w-full",
				)}
				on:click={() => (showMobileMenu = false)}
				href={link.link}>{link.name}</a
			>
		{/each}
	</div>
</div>

<!-- the back to top button-->

{#if windowY > pageHeight}
	<a
		href="#top"
		class="fixed bottom-4 right-4 p-4 z-[1000] rounded-full bg-brussian-800 shadow-lg active:bg-brussian-600 border-2 border-brussian-300 cursor-pointer transition-colors duration-150"
		on:click={() => window.scrollTo({ top: 0, behavior: "smooth" })}
	>
		<svelte:component this={IconArrowUp} class="w-8 h-8" />
	</a>
{/if}
