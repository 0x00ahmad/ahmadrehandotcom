<script lang="ts">
	import Footer from "$lib/components/footer.svelte";
	import Navbar from "$lib/components/navbar.svelte";
	import { cn } from "$lib/utils";
	import { MAX_PAGE_WIDTH } from "$lib/utils/constants";

	import type { PageData } from "./u/$types";

	export let data: PageData;
</script>

<Navbar user={data.user} />

<div id="top" class="h-36 bg-opacity-0"></div>

<main class="grid w-full place-items-center">
	<div class={cn("flex w-full flex-col gap-12", MAX_PAGE_WIDTH)}>
		<slot />
	</div>
</main>

<div id="bottom" class="h-20 bg-opacity-0"></div>

<Footer />
