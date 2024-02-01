<script lang="ts">
	const CERTIFICATIONS = {
		completed: [
			{
				name: "Algorithms",
				organization: "Stanford",
				link: "https://coursera.org/share/b12c83ccd110cf95bc593b8ac3c2ea79",
			},
			{
				name: "Full Stack Web Dev.",
				organization: "IBM",
				link: "https://coursera.org/share/ff06101f184d959e66aea76f03c59472",
			},
			{
				name: "Data Engineering",
				organization: "IBM",
				link: "https://coursera.org/share/532c8021e3180b59804d74f5381f04da",
			},
			{
				name: "DevOps & Software Engineering",
				organization: "IBM",
				link: "https://coursera.org/share/8ec73896e2d042ae15c79ce8f1553b52",
			},
			{
				name: "Cybersecurity Specialization",
				organization: "Google",
				link: "https://coursera.org/share/2d0da18ce49e33b89b16e0a41cf8d6bd",
			},
			{
				name: "IT Support Specialization",
				organization: "Google",
				link: "https://coursera.org/share/1c20fe10806cf6d194cb4935a0708c19",
			},
			{
				name: "Project Management",
				organization: "Google",
				link: "https://coursera.org/share/ae88baa3f3c57eb0e0e231f12bf4b5aa",
			},
		],
	};
</script>

<section class="flex flex-wrap gap-4 lg:gap-8 w-full">
	{#each CERTIFICATIONS.completed as certification}
		<div class="p-2 rounded-lg relative">
			<span>{certification.name}</span>
		</div>
	{/each}
</section>
