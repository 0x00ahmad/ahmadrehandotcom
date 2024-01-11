<script lang="ts">
	import IconArrowRight from "~icons/fluent/arrow-next-12-regular";
	import Heading from "$lib/components/heading.svelte";
	import clsx from "clsx";

	const base = "/images/work";
	const work = [
		`${base}/1-left.png`,
		`${base}/1-right.png`,
		`${base}/2-left.png`,
	];

	const commonsStyles = clsx(
		"w-full h-full flex flex-col justify-center items-center",
	);
</script>

<section id="work" class="grid w-full grid-cols-7 gap-4">
	<div class="w-full h-max bg-green-500 col-span-3">
		<img src={work[0]} alt="work" class="w-full rounded-md" />
	</div>

	<div class="w-full h-full bg-red-500 col-span-4">
		<img src={work[1]} alt="work" class="h-full bg-fixed" />
	</div>

	<div class="w-full h-full bg-yellow-500 col-span-5">
		<img src={work[2]} alt="work" />
	</div>

	<div
		class="w-full h-full bg-primary-200 rounded-lg p-2 flex-col flex justify-between col-span-2"
	>
		<div class="flex flex-col gap-1">
			<Heading text={"Modules"} weight={"medium"} size={"h3"} />
			<p></p>
		</div>
		<div class="flex gap-1 items-center">
			<span class="text-2xl">Explore</span>
			<IconArrowRight class={"w-4 h-4"} />
		</div>
	</div>
</section>
