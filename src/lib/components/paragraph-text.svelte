<script lang="ts">
    import { cn } from "$lib/utils";

    const colors = { default: "text-shamrock-950 dark:text-shamrock-50" };

    export let color: keyof typeof colors = "default";
</script>

<p class={cn(colors[color], "text-md")}>
    <slot />
</p>
