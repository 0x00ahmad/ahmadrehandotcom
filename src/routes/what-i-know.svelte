<script lang="ts">
	import HeadingGroup from "$lib/components/heading-group.svelte";
	import scribble3 from "$lib/assets/scribbles/hu-3.png";
	import Heading from "$lib/components/heading.svelte";

	const skills = {
		"Programming languages": [
			"Python",
			"TS/JS",
			"Go",
			"Rust",
			"Kotlin",
			"Swift (~ learning)",
			"C/C++",
		],
		"Web / Mobile / Desktop": [
			"SvelteKit",
			"NextJS",
			"Elysia",
			"FastAPI",
			"Fiber",
			"React Native",
			"Android Native",
			"Tauri",
		],
		DevOps: ["Docker", "Kubernetes", "AWS", "CI/CD"],
		Others: ["Git", "Linux", "UXD ~ Figma"],
	} as const;
</script>

<section
	class="flex flex-col gap-8 items-center text-primary-800"
	id="what-i-know"
>
	<HeadingGroup text="What do I know?" image={scribble3} />
	{#each Object.entries(skills) as [skill, values]}
		<div class="flex flex-col gap-2 w-full">
			<Heading text={skill} size={"h4"} />
			<div class="flex gap-2 items-center">
				{#each values as value}
					<div
						class="px-2 py-1 border-primary-300 border rounded-md drop-shadow-lg"
					>
						{value}
					</div>
				{/each}
			</div>
		</div>
	{/each}
</section>
