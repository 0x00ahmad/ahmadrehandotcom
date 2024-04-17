<script lang="ts">
    import journeySVG from "$lib/assets/graphics/journey.svg";
    import ParagraphText from "$lib/components/paragraph-text.svelte";
    import Title from "$lib/components/title.svelte";
    import { Button } from "$lib/components/ui/button";
    import Input from "$lib/components/ui/input/input.svelte";
    import { toast } from "svelte-sonner";

    function tmpPrompt() {
        toast("Please use Google Sign In for now.");
    }
</script>

<div
    class="flex grid-cols-4 flex-col justify-center gap-40 p-8 lg:grid lg:h-screen lg:place-items-center lg:gap-12 lg:p-20"
>
    <div class="col-span-2 flex flex-col gap-12">
        <span
            class="relative text-3xl font-semibold tracking-wider sm:text-4xl md:text-5xl lg:text-6xl"
        >
            Helping you at the most
            <br /> important step in your
            <span class="relative line-through decoration-shamrock-500">
                business.
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
            class="flex w-full max-w-xl flex-col gap-6 rounded-xl border-2 border-slate-100 bg-white p-6 shadow dark:border-slate-500 dark:bg-slate-950 dark:shadow dark:shadow-shamrock-600 md:p-8 xl:p-12"
        >
            <Title text={"Let's Talk"} size={"h1"} />
            <ParagraphText>
                If you have any questions, don't hesitate to reach out to us!
            </ParagraphText>
            <div class="flex w-full flex-col items-center justify-center gap-4">
                <Input type={"text"} placeholder={"Name"} class="w-full" />
                <Input type={"email"} placeholder={"Email"} class="w-full" />
                <Input type={"tel"} placeholder={"Phone"} class="w-full" />
                <Input type={"text"} placeholder={"Subject"} class="w-full" />
                <Input type={"textarea"} placeholder={"Message"} class="w-full" />
                <Button class="w-full" on:click={tmpPrompt}>Send Message</Button>
            </div>
        </div>
    </div>
</div>
