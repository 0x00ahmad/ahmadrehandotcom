<script lang="ts">
	import IconMenu from "~icons/material-symbols-light/menu";
	import IconArrowUp from "~icons/ph/arrow-fat-line-up";
	import clsx from "clsx";
	import {
		MAX_PAGE_WIDTH,
		COMMON_BUTTON_INNER_SHADOW_STYLE,
	} from "$lib/utils/constants";

	const links = [
		{ name: "Work", link: "/" },
		{ name: "About", link: "/#about-me" },
		{ name: "Learning", link: "/#what-i-am-currently-doing" },
		{ name: "Skills", link: "/#what-i-know" },
		{ name: "Contact", link: "/#footer" },
	];

	let showMobileMenu = false;

	let windowY = 0;
	let pageHeight = 0;
</script>

<svelte:window bind:scrollY={windowY} bind:outerHeight={pageHeight} />

<nav
	class="fixed top-0 w-screen grid place-items-center p-4 md:px-8 bg-primary-100 bg-opacity-80 backdrop-blur-md border-b border-primary-600 z-[1000]"
>
	<div class={clsx("flex justify-between w-full", MAX_PAGE_WIDTH)}>
		<a
			href="/"
			class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-700 cursor-pointer"
			>Ahmad Rehan</a
		>

		<button
			class="flex flex-col p-1 rounded-md border-2 border-primary-700 text-primary-700 md:hidden"
			on:click={() => (showMobileMenu = !showMobileMenu)}
		>
			<svelte:component this={IconMenu} class="w-6 h-6 cursor-pointer" />
		</button>

		<div class="hidden gap-8 items-center text-primary-800 md:flex">
			{#each links as link}
				<a
					on:click={() => (showMobileMenu = false)}
					class={clsx(
						"text-lg xl:text-xl px-2 py-1",
						COMMON_BUTTON_INNER_SHADOW_STYLE,
					)}
					href={link.link}>{link.name}</a
				>
			{/each}
		</div>
	</div>
</nav>

<div
	class={clsx(
		"fixed top-0 left-0 w-screen h-screen bg-primary-100 bg-opacity-80 backdrop-blur-md z-[999]",
		{ hidden: !showMobileMenu },
	)}
>
	<div class="flex flex-col gap-8 items-center text-primary-800 p-4 w-full">
		{#each links as link}
			<a
				class={clsx(
					"font-sans text-xl p-2 border-b-2 border-primary-500 w-full",
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
		class="fixed bottom-4 right-4 p-4 z-[1000] rounded-full text-primary-100 bg-primary-800 shadow-lg active:bg-primary-600 border-2 border-primary-300 cursor-pointer transition-colors duration-150"
		on:click={() => window.scrollTo({ top: 0, behavior: "smooth" })}
	>
		<svelte:component this={IconArrowUp} class="w-8 h-8" />
	</a>
{/if}
