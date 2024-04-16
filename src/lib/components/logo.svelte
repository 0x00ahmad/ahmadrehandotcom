<script lang="ts">
    import { cn } from "$lib/utils";

    export let size: "sm" | "md" | "lg" = "md";

    const sizes = {
        sm: "text-2xl md:text-3xl lg:text-4xl",
        md: "text-3xl md:text-4xl lg:text-5xl",
        lg: "text-4xl md:text-5xl lg:text-6xl",
    };
</script>

<p class={cn(sizes[size], "font-semibold")}>
    <span class="text-shamrock-500">D</span>NBazar
</p>
