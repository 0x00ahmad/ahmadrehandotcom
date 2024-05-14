<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import { cn } from "$lib/utils";

	import blob1 from "$lib/assets/graphics/blob1.svg";
	import blob2 from "$lib/assets/graphics/blob2.svg";
	import blob3 from "$lib/assets/graphics/blob3.svg";
	import { NAV_LINKS } from "$lib/utils/constants";
</script>

<div
	class="relative grid min-h-[100vh] w-full place-items-center gap-8 pt-12 lg:min-h-[64vh]"
>
	<img
		src={blob1}
		alt=""
		class="absolute right-0 top-8 z-[-2] max-w-2xl blur-2xl"
	/>
	<img
		src={blob2}
		alt=""
		class="absolute right-4 top-8 z-[-1] max-w-sm blur-xl"
	/>

	<img
		src={blob3}
		alt=""
		class="absolute right-4 top-80 z-10 max-w-sm blur-2xl"
	/>

	<div class="flex w-full flex-col gap-4">
		<div
			class="flex w-full flex-col-reverse items-center justify-between gap-8 md:flex-row"
		>
			<span
				class={cn(
					"relative inline-block h-full max-w-2xl bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-2xl font-semibold tracking-wider text-transparent md:h-44 md:text-3xl lg:text-4xl"
				)}
			>
				Hi, I'm Ahmad: <br />
				An engineer and a designer focused on building visually pleasing solutions.
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
