<script lang="ts">
    import { Label } from "formsnap";

    export let label: string;
</script>

<div class="flex w-full flex-col gap-2">
    <Label>{label}</Label>
    <slot />
</div>
