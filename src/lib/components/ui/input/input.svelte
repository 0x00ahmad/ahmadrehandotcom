<script lang="ts">
    import { cn } from "$lib/utils.js";
    import type { HTMLInputAttributes } from "svelte/elements";

    import { inputStyle } from "./";
    import type { InputEvents } from "./index.js";

    type $$Props = HTMLInputAttributes;
    type $$Events = InputEvents;

    let className: $$Props["class"] = undefined;
    export let value: $$Props["value"] = undefined;
    export { className as class };

    // Workaround for https://github.com/sveltejs/svelte/issues/9305
    // Fixed in Svelte 5, but not backported to 4.x.
    export let readonly: $$Props["readonly"] = undefined;
</script>

<input
    class={cn(inputStyle, className)}
    bind:value
    {readonly}
    on:blur
    on:change
    on:click
    on:focus
    on:focusin
    on:focusout
    on:keydown
    on:keypress
    on:keyup
    on:mouseover
    on:mouseenter
    on:mouseleave
    on:paste
    on:input
    on:wheel
    {...$$restProps}
/>
