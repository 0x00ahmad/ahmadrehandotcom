<script lang="ts">
	import clsx from "clsx";

	type TitleSize = "h1" | "h2" | "h3" | "h4";
	type TitleFontWeight = "bold" | "semibold" | "normal" | "medium";

	const colors = {
		white: "text-indigo-50",
		black:
			"inline-block bg-gradient-to-r from-gray-500 to-slate-900 bg-clip-text font-semibold text-transparent",
		primary: "text-indigo-600"
	};

	const weights = {
		bold: "font-bold",
		semibold: "font-semibold",
		medium: "font-medium",
		normal: "font-normal"
	} as const;

	export let text: string = "";
	export let size: TitleSize = "h2";
	export let weight: TitleFontWeight = "semibold";
	export let capitalize: boolean = true;
	export let color: keyof typeof colors = "black";
	export let noMaxWidth: boolean = false;
</script>

{#if size == "h1"}
	<h1
		class={clsx(
			"text-4xl lg:text-5xl",
			!noMaxWidth ?? "w-max",
			weights[weight ?? "bold"],
			capitalize && "capitalize",
			colors[color]
		)}
	>
		{text}
	</h1>
{:else if size == "h2"}
	<h2
		class={clsx(
			"text-3xl lg:text-4xl",
			!noMaxWidth ?? "w-max",
			weights[weight ?? "bold"],
			capitalize && "capitalize",
			colors[color]
		)}
	>
		{text}
	</h2>
{:else if size == "h3"}
	<h3
		class={clsx(
			"text-2xl lg:text-3xl",
			!noMaxWidth ?? "w-max",
			weights[weight ?? "bold"],
			capitalize && "capitalize",
			colors[color]
		)}
	>
		{text}
	</h3>
{:else if size == "h4"}
	<h4
		class={clsx(
			"text-xl lg:text-2xl",
			!noMaxWidth ?? "w-max",
			weights[weight ?? "bold"],
			capitalize && "capitalize",
			colors[color]
		)}
	>
		{text}
	</h4>
{/if}
