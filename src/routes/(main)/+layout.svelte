<script lang="ts">
	import "../../app.pcss";

	import Footer from "$lib/components/footer.svelte";
	import Navbar from "$lib/components/navbar.svelte";
	import { cn } from "$lib/utils";
	import { MAX_PAGE_WIDTH } from "$lib/utils/constants";
</script>

<Navbar />


<main class={cn("flex flex-col items-center px-6")}>
	<div class={cn("flex w-full flex-col gap-12", MAX_PAGE_WIDTH)}>
		<slot />
	</div>
	<Footer />
</main>
