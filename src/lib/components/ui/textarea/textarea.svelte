<script lang="ts">
    import { cn } from "$lib/utils.js";
    import type { HTMLTextareaAttributes } from "svelte/elements";

    type $$Props = HTMLTextareaAttributes;

    let className: $$Props["class"] = undefined;
    export let value: $$Props["value"] = undefined;
    export { className as class };

    // Workaround for https://github.com/sveltejs/svelte/issues/9305
    // Fixed in Svelte 5, but not backported to 4.x.
    export let readonly: $$Props["readonly"] = undefined;
</script>

<textarea
    class={cn(
        "flex w-full min-h-24 rounded-md border border-input bg-background p-2 px-3 py-2 text-sm ring-indigo-500 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
    )}
    bind:value
    {readonly}
    on:blur
    on:change
    on:click
    on:focus
    on:keydown
    on:keypress
    on:keyup
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:paste
    on:input
    {...$$restProps}
/>
