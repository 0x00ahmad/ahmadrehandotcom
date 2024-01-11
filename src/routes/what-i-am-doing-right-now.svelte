<script lang="ts">
	import HeadingGroup from "$lib/components/heading-group.svelte";
	import scribble2 from "$lib/assets/scribbles/hu-2.png";
	import Heading from "$lib/components/heading.svelte";
</script>

<section
	class="flex flex-col gap-8 items-center text-primary-800"
	id="what-i-am-currently-doing"
>
	<HeadingGroup text="What am I currently doing?" image={scribble2} />
	<div class="flex gap-4 md:gap-8 lg:gap-16 flex-col md:flex-row">
		<div class="flex flex-col gap-4 w-full">
			<Heading text="Education" size={"h3"} fontStyle={"serif"} />
			<ul class="list-disc flex flex-col gap-4 font-sans p-4">
				<li class="text-xl">
					Studying at LUT university, going through my BSc degree,
					major in Electrical Engineering. I plan to learn more about
					hardware and how I can combine it with software.
				</li>
				<li class="text-xl">
					I am also going through an online degree about Data Science
					& AI, by IIT Guwahati, via the Coursera platform. I expect
					myself to learn more about how to work with data and learn
					AI from the ground up.
				</li>
			</ul>
		</div>

		<div class="flex flex-col gap-4 w-full">
			<Heading text="Work" size={"h3"} fontStyle={"serif"} />
			<ul class="list-disc flex flex-col gap-4 font-sans p-4">
				<li class="text-xl">
					Currently focusing on finalizing the planning phase for a
					few personal projects and start working on them. Keep in
					touch to stay updated!
				</li>
				<li class="text-xl">
					Looking to collaborate or work with other people who are
					more professional than me in the field for personal
					development and helping others in the journey.
				</li>
			</ul>
		</div>
	</div>
</section>
