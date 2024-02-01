<script lang="ts">
    import HeadingGroup from "$lib/components/heading-group.svelte";
    import scribble1 from "$lib/assets/scribbles/hu-1.png";
</script>

<section class="flex flex-col gap-8 items-center" id="about-me">
    <HeadingGroup text="Who am I?" image={scribble1} />
    <p class="text-lg lg:text-xl xl:text-2xl tracking-wide text-primary-700">
        I am a 19 year Student, with a skill in Software, in pursuit of Hardware
        engineering. I discovered my interest in programming after building my
        own PC. Initially, I was very reluctant to do anything but play video
        games, but overtime my interest to do something more grew. As a result,
        I completely transitioned from playing games to learning programming.
        Initially I faced a lot of challenges, but with determination, I learned
        how to program and decided to explore web development as the first field
        in order to apply the skill I learnt, then explore other fields such as
        mobile, desktop, and low level programming as I grow further.
    </p>
</section>
