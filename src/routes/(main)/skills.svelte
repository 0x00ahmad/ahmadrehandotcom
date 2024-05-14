<script lang="ts">
	import Title from "$lib/components/title.svelte";

	const skills = [
		{ name: "programming", strength: 100 },
		{ name: "web", strength: 100 },
		{ name: "mobile", strength: 80 },
		{ name: "desktop", strength: 60 },
		{ name: "architecture design", strength: 80 },
		{ name: "infrastructure", strength: 100 },
		{ name: "linux", strength: 100 },
		{ name: "data engineering", strength: 100 },
		{ name: "data science", strength: 80 },
		{ name: "UX design", strength: 75 }
	];
</script>

<Title size={"h3"} text={"My Skillset"} />

<div class="grid w-full grid-cols-1 xs:grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
	{#each skills as skill}
		<div class="flex flex-col gap-2">
			<p class="md:text-md text-sm capitalize lg:text-lg">{skill.name}</p>
			<div
				class="relative w-full rounded-full border-2 border-transparent drop-shadow-md"
			>
				<div class="relative h-6 w-full rounded-full bg-white"></div>
				<div
					class={"absolute left-0 top-0 z-10 flex h-6 items-center rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 px-3 text-indigo-100"}
					style={`width: ${skill.strength}%`}
				>
					{skill.strength} %
				</div>
			</div>
		</div>
	{/each}
</div>
