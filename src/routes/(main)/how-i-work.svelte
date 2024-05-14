<script lang="ts">
	import Title from "$lib/components/title.svelte";

	const yes = [
		{
			title: "Something amazing",
			text: "this is just some placeholder text for the card until I find something meaningful to write here"
		},
		{
			title: "Something amazing",
			text: "this is just some placeholder text for the card until I find something meaningful to write here"
		},
		{
			title: "Something amazing",
			text: "this is just some placeholder text for the card until I find something meaningful to write here"
		}
	];
</script>

<Title size={"h3"} text={"How I work"} />

<div class="flex flex-col gap-8 lg:grid lg:grid-cols-3">
	{#each yes as yis}
		<div
			class="wrap flex w-full flex-col gap-4 rounded-lg bg-white/90 p-4 drop-shadow backdrop-blur-lg"
		>
			<Title size={"h4"} text={yis.title} />
			<p>{yis.text}</p>
		</div>
	{/each}
</div>
