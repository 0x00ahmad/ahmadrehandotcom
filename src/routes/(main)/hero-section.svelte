<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import { cn } from "$lib/utils";

	import blob1 from "$lib/assets/graphics/blob1.svg";
	import blob2 from "$lib/assets/graphics/blob2.svg";
	import blob3 from "$lib/assets/graphics/blob3.svg";
	import blob4 from "$lib/assets/graphics/blob4.svg";
</script>

<div
	class="relative flex min-h-[60vh] w-full flex-col-reverse gap-8 pt-12 lg:grid lg:grid-cols-3 lg:items-center lg:justify-between lg:pt-32"
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
		class="absolute right-4 top-80 z-[-1] max-w-sm blur-2xl"
	/>

	<div class="col-span-2 flex flex-col gap-4">
		<span
			class={cn(
				"relative inline-block h-full max-w-2xl bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-2xl font-semibold tracking-wider text-transparent md:h-44 md:text-3xl lg:text-4xl"
			)}
		>
			Hi, I'm Ahmad: <br />
			An engineer and a designer focused on building visually pleasing solutions.
		</span>
		<div>
			<Button href="/contact">Let's talk</Button>
		</div>
	</div>
	<div class="col-span-1 flex flex-col gap-4">
		<img
			src="/images/pfp.jpg"
			alt="Ahmad Rehan"
			class="h-40 w-40 rounded-full border-4 border-indigo-800 drop-shadow-md dark:border-gray-200 md:h-48 md:w-48 lg:h-56 lg:w-56"
		/>
	</div>
</div>
