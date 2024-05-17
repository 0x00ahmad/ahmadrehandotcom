<script lang="ts">
	import ParagraphText from "$lib/components/paragraph-text.svelte";
	import Title from "$lib/components/title.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import { NAV_LINKS } from "$lib/utils/constants";
	import HeroSection from "./hero-section.svelte";
	import HowIWork from "./how-i-work.svelte";
	import Skills from "./skills.svelte";
	import Work from "./work.svelte";
</script>

<HeroSection />

<Work />

<Skills />

<HowIWork />

<div class="flex w-full flex-col gap-4 mt-24">
	<div
		class="flex w-full flex-col-reverse items-center justify-between gap-8 md:grid md:grid-cols-3 md:gap-8 lg:gap-16"
	>
		<div class="col-span-2 flex w-full flex-col gap-4 break-words">
			<Title color={"primary"} text={"Let's work together"} size={"h2"} />

			<ParagraphText cls={"text-lg lg:text-xl"}>
				Tell me something about yourself, or your project, or your idea. I'm
				always interested to hear about new opportunities and challenges.
			</ParagraphText>
			<div>
				<Button href={NAV_LINKS.contact}>Let's talk</Button>
			</div>
		</div>

		<div class="col-span-1 flex w-full flex-col gap-4 justify-center items-center">
			<img
				src="/images/pfp.jpg"
				alt="Ahmad Rehan"
				class="h-36 w-36 rounded-full border-4 border-indigo-800 drop-shadow-md md:h-44 md:w-44 lg:h-52 lg:w-52"
			/>
		</div>
	</div>
</div>
