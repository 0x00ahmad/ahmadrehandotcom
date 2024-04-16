<script lang="ts">
    import IconArrowUp from "~icons/ph/arrow-fat-line-up";
    import IconShoppingCart from "~icons/ri/shopping-cart-line";
    import { cn } from "$lib/utils";
    import { TRANSITION_COLORS } from "$lib/utils/constants";
    import type { User } from "lucia";

    import Logo from "./logo.svelte";
    import Button from "./ui/button/button.svelte";

    export let user: User | null = null;

    let showMobileMenu = false;

    let windowY = 0;
    let pageHeight = 0;
</script>

<svelte:window bind:scrollY={windowY} bind:outerHeight={pageHeight} />

<nav
    class={cn(
        "z-[1000] flex w-screen items-center justify-between rounded-md bg-shamrock-50 bg-opacity-10 p-4 md:p-6",
        "border-t-2 border-t-white border-opacity-25",
    )}
>
    <a href="/u" class={cn("cursor-pointer")}>
        <div class="flex items-center justify-between gap-4">
            <Logo />
        </div>
    </a>

    <div class="flex items-center gap-4">
        {#if user}
            <Button
                on:click={() => {
                    window.location.href = "/auth/signout";
                }}>Sign Out</Button
            >
        {:else}
            <Button
                on:click={() => {
                    window.location.href = "/auth/signin";
                }}>Sign In</Button
            >
        {/if}
        <span
            class={cn(
                "rounded-md bg-shamrock-50 p-2 text-shamrock-700 focus:bg-opacity-100",
                TRANSITION_COLORS,
            )}
        >
            <svelte:component
                this={IconShoppingCart}
                class="h-6 w-6 cursor-pointer"
            />
        </span>
    </div>
</nav>

<div
    class={cn(
        "fixed left-0 top-0 z-[999] h-screen w-screen bg-shamrock-50 bg-opacity-10 backdrop-blur-md",
        { hidden: !showMobileMenu },
    )}
>
    <div class="flex w-full flex-col items-center gap-8 p-4">
        <div>show sum ship here</div>
        <!-- {#each  as link} -->
        <!--     <a -->
        <!--         class={cn("w-full border-b-2 border-shamrock-500 p-2 text-xl")} -->
        <!--         on:click={() => (showMobileMenu = false)} -->
        <!--         href={link.link}>{link.name}</a -->
        <!--     > -->
        <!-- {/each} -->
    </div>
</div>

<!-- the back to top button-->

{#if windowY > pageHeight}
    <a
        href="#top"
        class="fixed bottom-4 right-4 z-[1000] cursor-pointer rounded-full border-2 border-shamrock-500 bg-shamrock-800 bg-opacity-40 p-4 transition-colors duration-150 active:bg-opacity-30"
        on:click={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
        <svelte:component this={IconArrowUp} class="h-8 w-8 text-shamrock-900" />
    </a>
{/if}
