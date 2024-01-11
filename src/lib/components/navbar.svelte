<script lang="ts">
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
</script>

<nav
	class="fixed top-0 w-screen grid place-items-center p-3 bg-primary-100 bg-opacity-80 backdrop-blur-md border-b border-primary-600"
>
	<div class={clsx("flex justify-between w-full", MAX_PAGE_WIDTH)}>
		<a href="/" class="text-6xl text-primary-700 cursor-pointer"
			>Ahmad Rehan</a
		>
		<div class="flex gap-8 items-center text-primary-800">
			{#each links as link}
				<a
					class={clsx(
						"text-md lg:text-lg xl:text-xl px-2 py-1",
						COMMON_BUTTON_INNER_SHADOW_STYLE,
					)}
					href={link.link}>{link.name}</a
				>
			{/each}
		</div>
	</div>
</nav>
