<script>
	import Navbar from "$lib/components/navbar.svelte";
	import AboutMe from "./about-me.svelte";
	import WhatIAmDoingRightNow from "./what-i-am-doing-right-now.svelte";
	import WhatIKnow from "./what-i-know.svelte";
	import Footer from "./footer.svelte";
	import clsx from "clsx";
	import { MAX_PAGE_WIDTH } from "$lib/utils/constants";
	import ProjectsGrid from "./projects-grid.svelte";
</script>

<Navbar />

<div id="top" class="h-32 w-screen bg-opacity-0"></div>

<main class="w-screen grid place-items-center">
	<div
		class={clsx(MAX_PAGE_WIDTH, "flex w-full flex-col gap-32 px-4 lg:px-8")}
	>
		<ProjectsGrid />
		<AboutMe />
		<WhatIAmDoingRightNow />
		<WhatIKnow />
		<Footer />
	</div>
</main>
