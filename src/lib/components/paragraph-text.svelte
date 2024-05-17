<script lang="ts">
	import { cn } from "$lib/utils";

	const colors = { default: "text-indigo-950" };

	export let color: keyof typeof colors = "default";
	export let cls: string = "";
</script>

<p class={cn(colors[color], cls.length > 1 ? cls : "text-md")}>
	<slot />
</p>
