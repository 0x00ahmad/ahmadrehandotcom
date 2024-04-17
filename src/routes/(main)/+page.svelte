<script lang="ts">
    import successSvg from "$lib/assets/graphics/success.svg";
    import DomainSearchInput from "$lib/components/domain-search-input.svelte";
</script>

<span
    class="relative text-4xl font-semibold tracking-wider sm:text-5xl md:text-6xl lg:text-7xl"
>
    Every
    <span class="relative line-through decoration-shamrock-500">
        <img
            src={successSvg}
            alt="Success"
            class="absolute right-[-2em] top-[-0.4em] min-w-32 xs:right-[-2.5em] xs:top-[-2em] lg:right-[-3.5em]"
        />
        Business
    </span>
    <br /> Starts with a
    <span class="text-shamrock-700 dark:text-shamrock-300">Domain.</span>
</span>

<DomainSearchInput />
