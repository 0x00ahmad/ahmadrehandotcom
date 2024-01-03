<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import IconLogo from '~icons/lucide/webhook';

	let timeNow = new Date().toLocaleString();
	let clockInterval: NodeJS.Timeout;

	onMount(() => {
		clockInterval = setInterval(() => {
			timeNow = new Date().toLocaleString();
		}, 1000);
	});
	onDestroy(() => {
		clearInterval(clockInterval);
	});
</script>

<nav
	class="w-screen flex items-center justify-between h-10 px-2 bg-white backdrop-blur-lg bg-opacity-15 text-white font-medium z-50 fixed top-0"
>
	<div
		class="p-1 rounded-md bg-white bg-opacity-0 transition-colors duration-150 hover:bg-opacity-10 cursor-pointer"
	>
		<svelte:component this={IconLogo} class="w-5 h-5" />
	</div>
	<p>{timeNow}</p>
	<p>TODO</p>
</nav>
