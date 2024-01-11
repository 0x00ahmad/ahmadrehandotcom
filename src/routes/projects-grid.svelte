<script lang="ts">
	import IconFigmaLogo from "~icons/ph/figma-logo";
	import IconSketch from "~icons/bxl/sketch";
	import IconMobile from "~icons/material-symbols-light/smartphone";
	import IconAndroid from "~icons/ic/baseline-android";
	import IconApple from "~icons/ic/baseline-apple";
	import IconWeb from "~icons/ic/baseline-web";
	import IconDesktop from "~icons/ic/round-desktop-windows";

	const base = "/images/work";

	const TYPES = {
		mobile: "mobile",
		web: "web",
		design: "design",
		desktop: "desktop",
	};

	const TYPE_ICONS = {
		mobile: [IconMobile, IconAndroid, IconApple],
		web: [IconWeb],
		design: [IconFigmaLogo, IconSketch],
		desktop: [IconDesktop],
	};

	const workMap = [
		{
			image: `${base}/1-left.png`,
			title: "Mobile project",
			type: TYPES.mobile,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			links: {
				github: "https://github.com",
				url: "https://github.com",
			},
		},
		{
			image: `${base}/1-right.jpeg`,
			title: "Web project",
			type: TYPES.web,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			links: {
				github: "https://github.com",
				url: "https://github.com",
			},
		},
		{
			image: `${base}/2-left.png`,
			title: "Another web project",
			type: TYPES.design,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			links: {
				github: "https://github.com",
				url: "https://github.com",
			},
		},
		{
			image: `${base}/2-right.jpeg`,
			title: "Desktop",
			type: TYPES.mobile,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			links: {
				github: "https://github.com",
				url: "https://github.com",
			},
		},
	];

	function getIcons(type: any) {
		return TYPE_ICONS[type as keyof typeof TYPES];
	}
</script>

<section
	id="work"
	class="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
>
	{#each workMap as work}
		<div
			class="w-full aspect-square relative bg-no-repeat bg-center bg-cover rounded-lg dropshadow-md shadow-inner shadow-primary-500 border-2 border-primary-300 cursor-pointer duration-300"
			style={`background-image: url(${work.image})`}
		>
			<div class="absolute top-0 left-0 flex gap-2 p-2">
				{#each getIcons(work.type) as Icon}
					<div
						class="bg-primary-950 border border-primary-300 text-white rounded-full p-2"
					>
						<Icon class="w-4 h-4 lg:w-5 lg:h-5" />
					</div>
				{/each}
			</div>
			<div
				class="w-full absolute bottom-0 rounded-md p-4 text-primary-800 bg-primary-950 bg-opacity-75 backdrop-blur-md"
			>
				<div
					class="flex flex-col gap-2 text-white md:flex-row justify-between md:items-center"
				>
					<span class="text-2xl">{work.title}</span>
				</div>
			</div>
		</div>
	{/each}
</section>
