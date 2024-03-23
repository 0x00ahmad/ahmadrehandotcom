<script>
	import "../app.css";

	import Navbar from "$lib/components/navbar.svelte";
	import Footer from "$lib/components/footer.svelte";
	import clsx from "clsx";
	import { MAX_PAGE_WIDTH } from "$lib/utils/constants";
</script>

<svelte:head>
	<title>Ahmad Rehan</title>
	<meta name="description" content="Well hello there 👋" />
</svelte:head>

<Navbar />

<div id="top" class="h-32 w-screen bg-opacity-0"></div>

<main class="w-screen grid place-items-center">
	<div
		class={clsx(MAX_PAGE_WIDTH, "flex w-full flex-col gap-32 px-4 lg:px-8")}
	>
		<slot />
		<!-- <Footer /> -->
	</div>
</main>
