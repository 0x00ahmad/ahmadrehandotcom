<script lang="ts">
	import clsx from 'clsx';
	import { MAX_PAGE_WIDTH } from '$lib/utils/constants';

	const links = [
		{ name: 'Work', link: '/#work' },
		{ name: 'About', link: '/#about' },
		{ name: 'Education', link: '/#education' },
		{ name: 'Contact', link: '/#work' }
	];
</script>

<nav class="w-screen grid place-items-center p-2 lg:p-4">
	<div class={clsx('flex justify-between w-full', MAX_PAGE_WIDTH)}>
		<h1 class="font-bold text-4xl">Ahmad Rehan</h1>
		<div class="flex gap-8 items-center">
			{#each links as link}
				<a class="text-lg lg:text-xl xl:text-2xl" href={link.link}>{link.name}</a>
			{/each}
		</div>
	</div>
</nav>
