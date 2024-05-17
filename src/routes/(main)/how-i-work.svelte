<script lang="ts">
	import Title from "$lib/components/title.svelte";

	import IconShapes from "~icons/lucide/shapes";
	import IconQuillPenLine from "~icons/mingcute/quill-pen-line";
	import IconAtomLine from "~icons/clarity/atom-line";
	import IconScanEye from "~icons/lucide/scan-eye";
	import IconFullscreen from "~icons/lucide/fullscreen";
	import IconSplit from "~icons/lucide/split";
	import blobGroup from "$lib/assets/graphics/blob-group-1.svg";

	const yes = [
		{
			icon: IconAtomLine,
			title: "first principle approach",
			text: "To Approach things from it's core principles and build up from there is the most effective way to solve a problem"
		},
		{
			icon: IconQuillPenLine,
			title: "never stop learning",
			text: "There are always things that you don't know. Which is why there always has to be the hunger to gain more knowledge to grow"
		},
		{
			icon: IconFullscreen,
			title: "holistic approach",
			text: "Understanding the problem is the first step to solving it. Which is why the first step is always to understand the problem well."
		},
		{
			icon: IconShapes,
			title: "funneling to simplicity",
			text: "Start in the cycle of trial and error to find the right solution, then completely focus on simplifying it to a concise and elegant solution."
		},
		{
			icon: IconScanEye,
			title: "end-to-end oversight",
			text: "Knowing everything inside and out is the best way to ensure maximum success ratio for a project. From idea to production, I like to be on top of everything."
		},
		{
			icon: IconSplit,
			title: "expect the unexpected",
			text: "Always be prepared for the unexpected. To account for change and failures is the best way to ensure that the project is a success."
		}
	];
</script>

<Title size={"h3"} text={"How I work"} />

<div class="relative flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
	{#each yes as yis}
		<div
			class="flex w-full flex-col gap-6 break-words rounded-lg border-4 border-indigo-500 bg-white/60 p-4 drop-shadow backdrop-blur-sm"
		>
			<svelte:component
				this={yis.icon}
				class="h-12 w-12 text-indigo-600 md:h-16 md:w-16 lg:h-20 lg:w-20"
			/>
			<p class="text-xl font-semibold capitalize md:text-2xl lg:h-[2em]">
				{yis.title}
			</p>
			<p class="lg:h-[8em]">{yis.text}</p>
		</div>
	{/each}
</div>
