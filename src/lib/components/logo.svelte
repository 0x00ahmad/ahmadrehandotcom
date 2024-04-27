<script lang="ts">
	import { cn } from "$lib/utils";
	import logoLight from "$lib/assets/logo-light.png";
	import logoDark from "$lib/assets/logo-dark.png";
	import { mode } from "mode-watcher";

	export let size: "sm" | "md" | "lg" = "md";

	const sizes = {
		// sm: "text-2xl md:text-3xl lg:text-4xl",
		// md: "text-3xl md:text-4xl lg:text-5xl",
		// lg: "text-4xl md:text-5xl lg:text-6xl"
		sm: "h-8",
		md: "h-7 md:h-8 lg:h-10",
		lg: "h-8 md:h-10 lg:h-12"
	};
</script>

{#if $mode === "dark"}
	<img src={logoLight} alt="DNBazar" class={cn(sizes[size])} />
{:else}
	<img src={logoDark} alt="DNBazar" class={cn(sizes[size])} />
{/if}
