<script lang="ts">
    import IconMoonStars from "~icons/ph/moon-stars";
    import IconSun from "~icons/ph/sun";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { resetMode, setMode } from "mode-watcher";
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
        <Button builders={[builder]} variant="outline" size={"iconSm"}>
            <svelte:component this={IconSun} class="h-6 w-6 dark:hidden" />
            <svelte:component
                this={IconMoonStars}
                class="hidden h-6 w-6 dark:block"
            />
            <span class="sr-only">Toggle theme</span>
        </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content align="end">
        <DropdownMenu.Item on:click={() => setMode("light")}
            >Light</DropdownMenu.Item
        >
        <DropdownMenu.Item on:click={() => setMode("dark")}
            >Dark</DropdownMenu.Item
        >
        <DropdownMenu.Item on:click={() => resetMode()}>System</DropdownMenu.Item>
    </DropdownMenu.Content>
</DropdownMenu.Root>
