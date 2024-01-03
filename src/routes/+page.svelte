<script>
	import Dock from '$lib/components/dock.svelte';
	import TopAppBar from '$lib/components/top-app-bar.svelte';
	import backgroundImage1 from '$lib/assets/background-images/planet-view-over-clouds.png';
</script>

<TopAppBar />

<img src={backgroundImage1} class="absolute inset-0 w-full h-full object-cover z-[-1]" alt="" />

<main class="w-screen h-screen">
	<div class="h-10"></div>
	<!-- TODO: layout the grid to have moveable icons -->
	<section class="grid"></section>
</main>

<Dock />
