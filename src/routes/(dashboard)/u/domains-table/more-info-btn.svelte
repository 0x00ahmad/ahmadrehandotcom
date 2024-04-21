<script>
    import IconSlidersHorizontal from "~icons/lucide/sliders-horizontal";
    import Button from "$lib/components/ui/button/button.svelte";

    export let domainId;
</script>

<Button size={"iconSm"} variant={"outline"} href={`/u/domains/${domainId}`}>
    <svelte:component this={IconSlidersHorizontal} />
</Button>
