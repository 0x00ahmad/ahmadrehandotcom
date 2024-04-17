<script lang="ts">
    import IconGoogle from "~icons/formkit/google";
    import IconFacebook from "~icons/ic/baseline-facebook";
    import MdiLinkedin from "~icons/mdi/linkedin";
    import journeySVG from "$lib/assets/graphics/journey.svg";
    import Logo from "$lib/components/logo.svelte";
    import Title from "$lib/components/title.svelte";
    import { Button } from "$lib/components/ui/button";
    import { cn } from "$lib/utils";
</script>

<div
    class="flex w-screen grid-cols-5 flex-col justify-center gap-40 p-8 lg:grid lg:h-screen lg:place-items-center lg:gap-12 lg:p-20"
>
    <div class="col-span-3 flex flex-col gap-12">
        <a href="/" class={cn("cursor-pointer")}>
            <Logo />
        </a>

        <span
            class="relative text-3xl font-semibold tracking-wider sm:text-4xl md:text-5xl lg:text-6xl"
        >
            The first step in
            <br /> building an amazing
            <span class="relative line-through decoration-shamrock-500">
                Startup.
                <img
                    src={journeySVG}
                    alt="Journey"
                    class="absolute bottom-[-8rem] right-0 h-40 w-40 sm:right-8 md:bottom-[-3em] lg:h-60 lg:w-60"
                />
            </span>
        </span>
    </div>
    <div class="col-span-2 grid w-full place-items-center lg:flex">
        <div
            class="flex w-full max-w-xl flex-col gap-16 rounded-xl border-2 border-slate-100 bg-white p-12 shadow dark:border-slate-500 dark:bg-shamrock-950 dark:bg-opacity-20 dark:shadow dark:shadow-shamrock-600"
        >
            <Title text={"Sign in"} size={"h1"} />
            <div class="flex w-full flex-col items-center justify-center gap-4">
                <Button class="w-full" href={"/auth/signin/google"}>
                    <svelte:component this={IconGoogle} class="mr-2 h-4 w-4" />
                    Google
                </Button>
                <Button class="w-full bg-blue-500" href={"/auth/signin/facebook"}>
                    <svelte:component this={IconFacebook} class="mr-2 h-4 w-4" />
                    Facebook
                </Button>
                <Button class="w-full bg-sky-500" href={"/auth/signin/linkedin"}>
                    <svelte:component this={MdiLinkedin} class="mr-2 h-4 w-4" />
                    LinkedIn
                </Button>
            </div>
        </div>
    </div>
</div>
