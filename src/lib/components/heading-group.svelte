<script lang="ts">
	import Heading from "./heading.svelte";

	export let image: string | any | undefined;
	export let text: string;
</script>

<div class="flex flex-col justify-between items-center gap-1 w-min">
	<Heading
		{text}
		weight="medium"
		size="h1"
		overrides={"break-keep whitespace-nowrap"}
	/>
	<img src={image} alt="" class="w-max" />
</div>
