<script lang="ts">
	import Title from "$lib/components/title.svelte";
	import type { Work } from "$lib/types";
	import { cn } from "$lib/utils";
	import { TRANSITION_COLORS } from "$lib/utils/constants";

	const work = [
		{
			title: "DNBazar",
			description: "A platform for buying and selling premium domain names.",
			baseColor: "emerald",
			image: ""
		},
		{
			title: "Become Tax Payer",
			description:
				"A platform meant for simplifying legal matters for individuals and businesses.",
			baseColor: "azure",
			image: ""
		}
	] as Work[];
</script>

<Title size={"h3"} text={"Work"} />

<div
	class="flex flex-col gap-4 rounded-lg bg-gradient-to-r from-emerald-700 to-emerald-600 p-6 pb-0 text-white drop-shadow-lg md:p-8 md:pb-0 lg:grid lg:grid-cols-2"
	id="work"
>
	<div class="">
		<img
			src="/work/dnb-showcase.png"
			alt={"DNBazar Showcase"}
			class="rounded-t-md"
		/>
	</div>

	<div class="flex h-full flex-col justify-center gap-8 p-8">
		<div class="flex flex-col gap-2">
			<h2 class="traking-wider text-xl font-semibold md:text-2xl lg:text-3xl">
				DNBazar
			</h2>
			<p class="font-medium">
				A marketplace made for sale and purchase of premium domain names.
			</p>
		</div>
		<div>
			<a
				href={"https://dnbazar.com"}
				class={cn(
					"rounded-md bg-emerald-800/90 p-4 px-6 text-white hover:bg-emerald-900 focus:bg-emerald-900",
					TRANSITION_COLORS
				)}
			>
				View Project
			</a>
		</div>
	</div>
</div>

<div
	class="from-azure-600 to-azure-500 flex h-80 flex-col gap-4 rounded-lg bg-gradient-to-l p-6 pb-0 text-white drop-shadow-lg md:p-8 md:pb-0 lg:grid lg:grid-cols-2"
>
	<div class="flex h-full flex-col justify-center gap-8 p-8">
		<div class="flex flex-col gap-2">
			<h2 class="traking-wider text-xl font-semibold md:text-2xl lg:text-3xl">
				BecomeTaxPayer
			</h2>
			<p class="font-medium">
				A platform for simplifying legal matters for individuals and businesses.
			</p>
		</div>
		<div>
			<a
				href={"https://becometaxpayer.com"}
				class={cn(
					"bg-azure-700/90 hover:bg-azure-800 focus:bg-azure-800 rounded-md p-4 px-6 text-white",
					TRANSITION_COLORS
				)}
			>
				View Project
			</a>
		</div>
	</div>

	<img
		src="/work/btp-showcase.png"
		alt={"BecomeTaxPayer Showcase"}
		class="image-cover h-full rounded-t-md"
	/>
</div>
