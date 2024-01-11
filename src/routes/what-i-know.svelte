<script lang="ts">
	import HeadingGroup from "$lib/components/heading-group.svelte";
	import scribble3 from "$lib/assets/scribbles/hu-3.png";
	import Heading from "$lib/components/heading.svelte";

	import IconTypescript from "~icons/mdi/language-typescript";
	import MdiLanguageJavascript from "~icons/mdi/language-javascript";
	import MdiLanguagePython from "~icons/mdi/language-python";
	import SimpleIconsRust from "~icons/simple-icons/rust";
	import Fa6BrandsGolang from "~icons/fa6-brands/golang";
	import TablerBrandKotlin from "~icons/tabler/brand-kotlin";
	import MdiLanguageSwift from "~icons/mdi/language-swift";
	import MdiLanguageCpp from "~icons/mdi/language-cpp";
	import SimpleIconsSvelte from "~icons/simple-icons/svelte";
	import TablerBrandNextjs from "~icons/tabler/brand-nextjs";
	import MdiNodejs from "~icons/mdi/nodejs";
	import SimpleIconsFastapi from "~icons/simple-icons/fastapi";
	import MaterialSymbolsFiberSmartRecord from "~icons/material-symbols/fiber-smart-record";
	import CarbonLogoReact from "~icons/carbon/logo-react";
	import MaterialSymbolsAndroid from "~icons/material-symbols/android";
	import DeviconPlainTauri from "~icons/devicon-plain/tauri";
	import MdiDocker from "~icons/mdi/docker";
	import FileIconsKubernetes from "~icons/file-icons/kubernetes";
	import MdiAws from "~icons/mdi/aws";
	import MdiInfinity from "~icons/mdi/infinity";
	import MdiGit from "~icons/mdi/git";
	import CibArchLinux from "~icons/cib/arch-linux";
	import PhFigmaLogo from "~icons/ph/figma-logo";
	import BxlSketch from "~icons/bxl/sketch";

	const skills = {
		"Programming languages": [
			{ name: "Typescript", icon: IconTypescript },
			{ name: "Javascript", icon: MdiLanguageJavascript },
			{ name: "Python", icon: MdiLanguagePython },
			{ name: "Rust", icon: SimpleIconsRust },
			{ name: "Golang", icon: Fa6BrandsGolang },
			{ name: "Kotlin", icon: TablerBrandKotlin },
			{ name: "Swift", icon: MdiLanguageSwift },
			{ name: "C++", icon: MdiLanguageCpp },
		],
		"Web / Mobile / Desktop": [
			{ name: "Svelte", icon: SimpleIconsSvelte },
			{ name: "Nextjs", icon: TablerBrandNextjs },
			{ name: "Go Fiber", icon: MaterialSymbolsFiberSmartRecord },
			{ name: "Server", icon: MdiNodejs },
			{ name: "FastAPI", icon: SimpleIconsFastapi },
			{ name: "React Native", icon: CarbonLogoReact },
			{ name: "Android", icon: MaterialSymbolsAndroid },
			{ name: "Tauri", icon: DeviconPlainTauri },
		],
		DevOps: [
			{ name: "Docker", icon: MdiDocker },
			{ name: "Kubernetes", icon: FileIconsKubernetes },
			{ name: "AWS", icon: MdiAws },
			{ name: "CI/CD", icon: MdiInfinity },
		],
		Others: [
			{ name: "Git", icon: MdiGit },
			{ name: "Linux", icon: CibArchLinux },
			{ name: "Figma", icon: PhFigmaLogo },
			{ name: "Sketch", icon: BxlSketch },
		],
	} as const;
</script>

<section
	class="flex flex-col gap-8 items-center text-primary-800"
	id="what-i-know"
>
	<HeadingGroup text="What do I know?" image={scribble3} />

	{#each Object.entries(skills) as [skill, values]}
		<div class="flex flex-col gap-2 w-full">
			<Heading text={skill} size={"h4"} fontStyle={"sans"} />
			<div class="flex gap-2 items-center flex-wrap">
				{#each values as value}
					<div
						class="px-2 py-1 bg-primary-700 text-white rounded-md drop-shadow-lg flex items-center gap-2"
					>
						<p class="text-lg md:text-xl tracking-wider">
							{value.name}
						</p>
						<svelte:component this={value.icon} class="w-6 h-6" />
					</div>
				{/each}
			</div>
		</div>
	{/each}
</section>
