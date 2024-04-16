<script lang="ts">
    import IconGoogle from "~icons/formkit/google";
    import IconFacebook from "~icons/ic/baseline-facebook";
    import MdiLinkedin from "~icons/mdi/linkedin";
    import Title from "$lib/components/title.svelte";
    import { Button } from "$lib/components/ui/button";
</script>

<main class="flex w-80 flex-col justify-center">
    <Title />
    <p>Sign in to view your orders and make more!</p>
    <div>
        <div class="flex w-full flex-col items-center justify-center gap-4">
            <Button class="w-full bg-neutral-700">
                <svelte:component this={IconGoogle} class="mr-2 h-4 w-4" />
                Sign In With Google
            </Button>
            <Button class="w-full">
                <svelte:component this={IconFacebook} class="mr-2 h-4 w-4" />
                Sign In With Facebook
            </Button>
            <Button class="w-full">
                <svelte:component this={MdiLinkedin} class="mr-2 h-4 w-4" />
                Sign In With LinkedIn
            </Button>
        </div>
    </div>
</main>
