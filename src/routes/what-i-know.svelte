<script lang="ts">
	import HeadingGroup from "$lib/components/heading-group.svelte";
	import scribble3 from "$lib/assets/scribbles/hu-3.png";
	import Heading from "$lib/components/heading.svelte";
	import { SKILLS } from "$lib/utils/skills";
</script>

<section
	class="flex flex-col gap-8 items-center text-primary-800"
	id="what-i-know"
>
	<HeadingGroup text="What do I know?" image={scribble3} />

	{#each Object.entries(SKILLS) as [skill, values]}
		<div class="flex flex-col gap-2 w-full">
			<Heading text={skill} size={"h4"} fontStyle={"sans"} />
			<div class="flex gap-2 items-center flex-wrap">
				{#each values as value}
					<div
						class="px-2 py-1 bg-primary-700 text-white rounded-md drop-shadow-lg flex items-center gap-2"
					>
						<p class="text-lg md:text-xl tracking-wider">
							{value.name}
						</p>
						<svelte:component this={value.icon} class="w-6 h-6" />
					</div>
				{/each}
			</div>
		</div>
	{/each}
</section>
