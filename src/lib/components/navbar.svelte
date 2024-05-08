<script lang="ts">
	import IconMenu from "~icons/ri/menu-line";
	import cn from "clsx";
	import * as Sheet from "$lib/components/ui/sheet";

	import Logo from "./logo.svelte";
	import Button from "./ui/button/button.svelte";
	import { NAV_LINKS, SITE_LINKS, TRANSITION_COLORS } from "$lib/utils/constants";
</script>

<nav
	class={cn(
		"fixed z-[999] flex w-full items-center justify-between rounded-md  bg-indigo-50 bg-opacity-15 p-6 backdrop-blur-md dark:bg-indigo-950 dark:bg-opacity-5 md:px-12"
	)}
>
	<a href="/" class={cn("cursor-pointer")}>
		<div class="flex items-center justify-between gap-4">
			<Logo />
		</div>
	</a>

	<div class="hidden items-center gap-8 lg:flex">
		{#each SITE_LINKS as link}
			<a href={link.href} class="hidden md:block">{link.name}</a>
		{/each}
		<Button
			on:click={() => {
				window.location.href = NAV_LINKS.contact;
			}}
		>
			Let's talk
		</Button>
	</div>

	<div class="lg:hidden">
		<Sheet.Root>
			<Sheet.Trigger let:builder asChild>
				<Button builders={[builder]} variant={"ghost"} size={"iconSm"}>
					<svelte:component this={IconMenu} class="h-6 w-6 cursor-pointer" />
				</Button>
			</Sheet.Trigger>
			<Sheet.Content side={"right"} class={"z-[1001]"}>
				<div class="mt-16 flex w-full flex-col gap-4">
					{#each SITE_LINKS as item}
						<a
							class={cn(
								"cursor-pointer rounded-md bg-white p-2 text-sm text-gray-700 hover:bg-gray-50 active:bg-gray-100",
								TRANSITION_COLORS
							)}
							href={item.href}
						>
							{item.name}
						</a>
					{/each}

					<Button
						on:click={() => {
							window.location.href = NAV_LINKS.contact;
						}}
					>
						Let's talk
					</Button>
				</div>
			</Sheet.Content>
		</Sheet.Root>
	</div>
</nav>
