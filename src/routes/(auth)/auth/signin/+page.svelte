<script lang="ts">
    import IconGoogle from "~icons/formkit/google";
    import IconFacebook from "~icons/ic/baseline-facebook";
    import MdiLinkedin from "~icons/mdi/linkedin";
    import journeySVG from "$lib/assets/graphics/journey.svg";
    import Logo from "$lib/components/logo.svelte";
    import Title from "$lib/components/title.svelte";
    import { Button } from "$lib/components/ui/button";
</script>

<div
    class="flex w-screen grid-cols-2 flex-col lg:grid lg:h-screen lg:place-items-center"
>
    <div class="flex flex-col gap-12">
        <Logo />
        <span
            class="relative text-5xl font-semibold tracking-wider md:text-6xl lg:text-7xl"
        >
            The first step to being
            <br /> an amazing
            <span class="relative line-through decoration-shamrock-500">
                <img
                    src={journeySVG}
                    alt="Journey"
                    class="absolute bottom-[-1.7em] right-20"
                />
                Startup.
            </span>
        </span>
    </div>
    <main
        class="flex w-max max-w-xl flex-col gap-4 rounded-lg border-2 border-shamrock-500 p-20 shadow"
    >
        <Title text={"Sign in"} size={"h1"} />
        <p class="text-shamrock-600">
            Choose from one of the providers to sign in
        </p>
        <div class="flex w-full flex-col items-center justify-center gap-4">
            <Button class="w-full" href={"/auth/signin/google"}>
                <svelte:component this={IconGoogle} class="mr-2 h-4 w-4" />
                Google
            </Button>
            <Button class="w-full bg-blue-500">
                <svelte:component this={IconFacebook} class="mr-2 h-4 w-4" />
                Facebook
            </Button>
            <Button class="w-full bg-sky-500">
                <svelte:component this={MdiLinkedin} class="mr-2 h-4 w-4" />
                LinkedIn
            </Button>
        </div>
    </main>
</div>
