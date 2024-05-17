<script lang="ts">
	import IconLinkedInLogo from "~icons/basil/linkedin-outline";
	import IconXTwitter from "~icons/fa6-brands/x-twitter";
	import IconGithubLogo from "~icons/lucide/github";
	import { cn } from "$lib/utils";
	import { MAX_PAGE_WIDTH } from "$lib/utils/constants";

	import Logo from "./logo.svelte";

	const now = new Date();
	const currentYear = now.getFullYear();

	const socialLinks = [
		{ icon: IconLinkedInLogo, link: "https://www.linkedin.com/in/mahmadrehan" },
		{ icon: IconGithubLogo, link: "https://github.com/0x00ahmad" },
		{ icon: IconXTwitter, link: "https://x.com/0x00ahmad" }
	];
</script>

<div class={cn("grid w-full place-items-center py-12")}>
	<footer class={cn("w-full rounded-lg", MAX_PAGE_WIDTH)}>
		<div class="max-w-screen w-fullmd:py-8">
			<div
				class="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"
			>
				<a
					href="https://ahmadrehan.com/"
					class="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
				>
					<Logo size={"sm"} />
				</a>
			</div>
			<hr class="my-4 border-gray-200 sm:mx-auto lg:my-6" />
			<div
				class="flex w-full flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between"
			>
				<span class="block text-sm text-gray-500 sm:text-center">
					&#169; {currentYear}
					<a href="https://ahmadrehan.com/" class="hover:underline">
						Ahmad Rehan.
					</a>
					All Rights Reserved.
				</span>

				<div class="flex items-center gap-4">
					{#each socialLinks as socialLink}
						<a
							href={socialLink.link}
							target="_blank"
							rel="noopener noreferrer"
							class="text-gray-500 hover:text-gray-700"
						>
							<svelte:component this={socialLink.icon} class="h-6 w-6" />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</footer>
</div>
