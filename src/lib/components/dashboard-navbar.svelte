<script lang="ts">
    import IconClose from "~icons/material-symbols/close-rounded";
    import IconArrowUp from "~icons/ph/arrow-fat-line-up";
    import IconMenu from "~icons/ri/menu-line";
    import IconShoppingCart from "~icons/ri/shopping-cart-line";
    import cn from "clsx";
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
        "fixed z-[999] flex w-full items-center justify-between rounded-md border-b-2 bg-shamrock-50 bg-opacity-15 p-6 backdrop-blur-md dark:bg-shamrock-950 dark:bg-opacity-5 md:px-12",
    )}
>
    <div class="flex items-center gap-4">
        <a href="/" class={cn("cursor-pointer")}>
            <div class="flex items-center justify-between gap-4">
                <Logo />
            </div>
        </a>
        <a href="/u" class="">Dashboard</a>
        <a href="/u/finances" class="">Finances</a>
        <a href="/u/profile" class="">Profile</a>
    </div>

    <Button
        class="md:hidden"
        on:click={() => (showMobileMenu = !showMobileMenu)}
        variant={"outline"}
        size={"iconSm"}
    >
        <svelte:component this={IconMenu} class="h-6 w-6 cursor-pointer" />
    </Button>

    <div class="hidden items-center gap-4 md:flex">
        <a href="/checkout">
            <Button size={"iconSm"} variant={"ghost"}>
                <svelte:component this={IconShoppingCart} class="h-6 w-6" />
            </Button>
        </a>
        {#if user}
            <Button href={"/auth/signout"}>Sign Out</Button>
        {:else}
            <Button
                on:click={() => {
                    window.location.href = "/auth/signin";
                }}
            >
                Sign In
            </Button>
        {/if}
    </div>
</nav>

<div
    class={cn(
        "fixed left-0 top-0 z-[1000] h-screen w-screen bg-white bg-opacity-80 backdrop-blur-xl dark:bg-slate-950 dark:bg-opacity-80 md:hidden",
        {
            hidden: !showMobileMenu,
        },
    )}
>
    <div class="flex w-full flex-col gap-8 p-8">
        <div class="flex w-full items-center justify-between gap-2">
            <Logo />
            <Button
                on:click={() => (showMobileMenu = false)}
                variant={"outline"}
                size={"iconSm"}
            >
                <svelte:component this={IconClose} class="h-6 w-6" />
            </Button>
        </div>

        <Button
            variant={"ghost"}
            href={"/checkout"}
            class="flex items-center gap-2"
            on:click={() => (showMobileMenu = false)}
        >
            View Shopping Cart
            <svelte:component this={IconShoppingCart} class="h-6 w-6" />
        </Button>

        <Button
            on:click={() => {
                window.location.href = "/auth/signin";
            }}
        >
            Sign In
        </Button>
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
