<script lang="ts">
	import { cn } from "$lib/utils";
	import logo from "$lib/assets/logo.png";

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

<img src={logo} alt="DNBazar" class={cn(sizes[size])} />
