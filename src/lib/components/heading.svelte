<script lang="ts">
	import clsx from "clsx";

	type HeadingSize = "h1" | "h2" | "h3" | "h4" | "are you good bro?";
	type HeadingFontWeight = "bold" | "semibold" | "normal" | "medium";

	export let text: string = "";
	export let size: HeadingSize = "h2";
	export let weight: HeadingFontWeight = "semibold";
	export let capitalize: boolean = true;
	export let color: "black" | "white" | "primary" = "primary";
	export let overrides: string = "";

	const colors = {
		white: "text-white",
		black: "text-black",
		primary: "text-primary-700",
	};

	const weights = {
		bold: "font-bold",
		semibold: "font-semibold",
		medium: "font-medium",
		normal: "font-normal",
	} as const;
</script>

{#if size == "h1"}
	<h1
		class={clsx(
			"text-5xl lg:text-6x",
			weights[weight ?? "bold"],
			capitalize && "capitalize",
			colors[color],
			overrides,
		)}
	>
		{text}
	</h1>
{:else if size == "h2"}
	<h2
		class={clsx(
			"text-4xl lg:text-5xl",
			weights[weight ?? "bold"],
			capitalize && "capitalize",
			colors[color],
			overrides,
		)}
	>
		{text}
	</h2>
{:else if size == "h3"}
	<h3
		class={clsx(
			"text-3xl lg:text-4xl",
			weights[weight ?? "bold"],
			capitalize && "capitalize",
			colors[color],
			overrides,
		)}
	>
		{text}
	</h3>
{:else if size == "h4"}
	<h4
		class={clsx(
			"text-2xl lg:text-3xl",
			weights[weight ?? "bold"],
			capitalize && "capitalize",
			colors[color],
			overrides,
		)}
	>
		{text}
	</h4>
{:else}
	<p>Are you good bro?</p>
{/if}
