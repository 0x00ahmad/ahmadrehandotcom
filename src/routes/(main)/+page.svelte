<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import { cn } from "$lib/utils";
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

<!-- <div class="flex w-full flex-col gap-8 bg-white/90 p-8 drop-shadow-md"> -->
<!-- 	<Title text={"Have any thoughts?"} /> -->
<!-- 	<ParagraphText>Don't hesitate to send me a message if you</ParagraphText> -->
<!-- 	<ContactForm {data} /> -->
<!-- </div> -->

<div
	class="relative grid min-h-[100vh] w-full place-items-center gap-8 lg:min-h-[64vh]"
>
	<div class="flex w-full flex-col gap-4">
		<div
			class="flex w-full flex-col-reverse items-center justify-between gap-8 md:flex-row"
		>
			<span
				class={cn(
					"relative inline-block h-full max-w-2xl bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-2xl font-semibold tracking-wider text-transparent md:h-44 md:text-3xl lg:text-4xl"
				)}
			>
				Have any thoughts? <br />
				Don't hesitate to drop me a message about them.
			</span>

			<div class="col-span-1 flex w-full flex-col gap-4">
				<img
					src="/images/pfp.jpg"
					alt="Ahmad Rehan"
					class="h-40 w-40 rounded-full border-4 border-indigo-800 drop-shadow-md md:h-48 md:w-48 lg:h-64 lg:w-64"
				/>
			</div>
		</div>
		<div>
			<Button href={NAV_LINKS.contact}>Let's talk</Button>
		</div>
	</div>
</div>
