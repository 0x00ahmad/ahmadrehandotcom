<script lang="ts">
	import Line from "$lib/components/line.svelte";
	import IconGithubLogo from "~icons/ph/github-logo";
	import IconLinkedInLogo from "~icons/basil/linkedin-outline";
	import IconInstagramLogo from "~icons/basil/instagram-outline";
	import { COMMON_BUTTON_INNER_SHADOW_STYLE } from "$lib/utils/constants";
	import clsx from "clsx";

	const now = new Date();
	const currentYear = now.getFullYear();

	const socialLinks = [
		{ icon: IconGithubLogo, link: "https://github.com/0x00ahmad" },
		{
			icon: IconLinkedInLogo,
			link: "https://www.linkedin.com/in/mahmadrehan",
		},
		{ icon: IconInstagramLogo, link: "https://github.com/0x00ahmad" },
	];
</script>

<section class="flex flex-col gap-4 items-center text-primary-800 py-4 w-full">
	<Line cls={"bg-primary-400"} />
	<div class="flex justify-between w-full items-center">
		<p class="text-md tracking-wide">&#169; {currentYear} 0x00ahmad</p>
		<div class="flex gap-2 items-center">
			{#each socialLinks as socialLink}
				<a
					href={socialLink.link}
					class={clsx("w-8 h-8", COMMON_BUTTON_INNER_SHADOW_STYLE)}
				>
					<svelte:component this={socialLink.icon} />
				</a>
			{/each}
		</div>
	</div>
</section>
