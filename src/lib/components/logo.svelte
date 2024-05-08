<script lang="ts">
	import { cn } from "$lib/utils";
	import { HEADING_DEFAULT_GRADIENT } from "$lib/utils/constants";

	export let size: "sm" | "md" = "md";

	const sizes = {
		sm: "text-lg md:text-xl",
		md: "text-xl md:text-2xl"
	};
</script>

<h1 class={cn(sizes[size], HEADING_DEFAULT_GRADIENT, "font-semibold")}>
	Ahmad Rehan
</h1>
