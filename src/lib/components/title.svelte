<script lang="ts">
	import clsx from "clsx";

	type TitleSize = "h1" | "h2" | "h3" | "h4";
	type TitleFontWeight = "bold" | "semibold" | "normal" | "medium";

	const colors = {
		white: "text-vviolet-50",
		black: "text-brussian-950",
		primary: "text-vviolet-600",
	};

	const weights = {
		bold: "font-bold",
		semibold: "font-semibold",
		medium: "font-medium",
		normal: "font-normal",
	} as const;

	export let text: string = "";
	export let size: TitleSize = "h2";
	export let weight: TitleFontWeight = "semibold";
	export let capitalize: boolean = true;
	export let color: keyof typeof colors = "black";
</script>

{#if size == "h1"}
	<h1
		class={clsx(
			"font-sans text-3xl lg:text-4xl",
			weights[weight ?? "bold"],
			capitalize && "capitalize",
			colors[color],
		)}
	>
		{text}
	</h1>
{:else if size == "h2"}
	<h2
		class={clsx(
			"font-sans text-2xl lg:text-3xl",
			weights[weight ?? "bold"],
			capitalize && "capitalize",
			colors[color],
		)}
	>
		{text}
	</h2>
{:else if size == "h3"}
	<h3
		class={clsx(
			"font-sans text-xl lg:text-2xl",
			weights[weight ?? "bold"],
			capitalize && "capitalize",
			colors[color],
		)}
	>
		{text}
	</h3>
{:else if size == "h4"}
	<h4
		class={clsx(
			"font-sans text-lg lg:text-xl",
			weights[weight ?? "bold"],
			capitalize && "capitalize",
			colors[color],
		)}
	>
		{text}
	</h4>
{/if}
