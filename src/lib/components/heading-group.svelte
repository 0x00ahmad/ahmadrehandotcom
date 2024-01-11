<script lang="ts">
	import clsx from "clsx";
	import Heading from "./heading.svelte";

	export let image: string | any | undefined;
	export let text: string;
</script>

<div class="flex flex-col justify-between items-center gap-1 w-min">
	<Heading
		{text}
		weight="medium"
		size="h1"
		overrides={clsx("break-keep whitespace-nowrap")}
		fontStyle={"serif"}
	/>
	<img src={image} alt="" class="w-min" />
</div>
