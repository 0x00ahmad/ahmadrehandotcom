<script>
	import tlGraphic from "$lib/assets/graphics/tl-home.svg";
	import trGraphic from "$lib/assets/graphics/tr-home.svg";
	import HeroSection from "./hero-section.svelte";
</script>

<img src={tlGraphic} alt="" class="absolute top-0 left-0 w-64 z-[-1]" />
<img src={trGraphic} alt="" class="absolute top-0 right-0 w-96 z-[-1]" />

<div class="w-full my-8"></div>

<HeroSection />

<div id="work" class="w-full grid place-items-center"></div>
<div id="about" class="w-full grid place-items-center"></div>
