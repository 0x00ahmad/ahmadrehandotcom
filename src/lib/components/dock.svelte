<script lang="ts">
	import clsx from 'clsx';
	import IconLucideWebhook from '~icons/lucide/webhook';

	const apps = [
		{ icon: IconLucideWebhook, img: undefined, isOpen: false },
		{ icon: IconLucideWebhook, img: undefined, isOpen: true },
		{ icon: IconLucideWebhook, img: undefined, isOpen: false },
		{ icon: IconLucideWebhook, img: undefined, isOpen: true }
	];
</script>

<nav class="fixed bottom-4 w-screen grid place-items-center z-50">
	<section
		class="p-2 lg:p-4 h-20 rounded-xl bg-white backdrop-blur-lg bg-opacity-15 flex items-center gap-2 lg:gap-4"
	>
		{#each apps as app}
			<div class={clsx('relative', 'transition-all duration-300', 'hover:scale-110')}>
				{#if !!app.img}
					<!-- content here -->
				{:else}
					<div
						class="drop-shadow-sm bg-white rounded-md bg-opacity-15 text-white p-2 cursor-pointer"
					>
						<svelte:component this={app.icon} class="w-8 h-8 lg:w-10 lg:h-10" />
					</div>
				{/if}
				{#if app.isOpen}
					<div
						class="absolute bottom-[-16px] left-3 w-8 rounded-full h-1 bg-white bg-opacity-50"
					></div>
				{/if}
			</div>
		{/each}
	</section>
</nav>
