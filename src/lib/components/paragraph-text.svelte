<script lang="ts">
    import { cn } from "$lib/utils";

    const colors = { default: "text-indigo-950" };

    export let color: keyof typeof colors = "default";
</script>

<p class={cn(colors[color], "text-md")}>
    <slot />
</p>
