<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import { pageLinks } from "./";
	import { fly, fade } from "svelte/transition";
	import { quintOut } from "svelte/easing";
	import { onMount } from "svelte";

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

{#if ready}
	<div
		transition:fly={{
			delay: 250,
			duration: 1000,
			y: 100,
			opacity: 0.0,
			easing: quintOut,
		}}
		class="w-full p-0.5 bg-gradient-to-b from-vviolet-900 rounded-lg"
	>
		<div
			class="w-full grid place-items-center py-32 bg-gradient-to-b from-brussian-950 rounded-lg gap-8 px-4 lg:px-8"
		>
			<span
				class="px-4 py-1 rounded-full bg-emerald-400 bg-opacity-20 text-emerald-300 border border-emerald-400 flex items-center justify-center gap-2 text-xs md:text-sm"
			>
				Available for work
				<div
					class="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"
				></div>
			</span>

			<div class="flex flex-col gap-2 w-full justify-center items-center">
				<h1
					class="text-center bg-gradient-to-r from-white to-brussian-800 bg-clip-text text-transparent text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:h-28"
				>
					Curious Engineer,<br /> Designing human centric solutions
				</h1>

				<span
					class="text-vviolet-300 text-xs sm:text-sm md:text-md lg:text-lg text-center max-w-[60%]"
				>
					Going through a journey of perpetual <span class="text-amber-100">exploration</span
					>, mastering the art of <span class="text-sky-100">learning</span>, navigating through
					<span class="text-rose-100">failures </span> and resiliantly solving to <span class="text-emerald-100">success</span>.
				</span>
			</div>

			<div
				class="flex gap-2 w-full items-center flex-col md:flex-row justify-center"
			>
				<a href={pageLinks.work}>
					<Button class="w-full">Checkout my work</Button>
				</a>
				<a href={pageLinks.about}>
					<Button class="w-full" variant={"tertiary"}
						>More about me</Button
					>
				</a>
			</div>
		</div>
	</div>
{/if}
