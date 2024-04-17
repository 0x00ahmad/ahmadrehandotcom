<script lang="ts">
    import visionSVG from "$lib/assets/graphics/vision.svg";
    import ParagraphText from "$lib/components/paragraph-text.svelte";
    import Title from "$lib/components/title.svelte";
</script>

<div
    class="flex grid-cols-4 flex-col justify-center gap-32 p-8 lg:grid lg:gap-12 lg:p-20"
>
    <div class="col-span-2 flex flex-col gap-8">
        <span
            class="relative text-3xl font-semibold tracking-wider sm:text-4xl md:text-5xl lg:text-6xl"
        >
            Providing a simple and elegant way to kickstart your
            <span class="relative line-through decoration-shamrock-500">
                idea.
                <img
                    src={visionSVG}
                    alt="Vision"
                    class="absolute bottom-[-3.5em] right-0 h-40 w-40 sm:right-[-0.5em] md:bottom-[-3em] lg:h-60 lg:w-60"
                />
            </span>
        </span>
    </div>
    <div class="col-span-2 w-full flex-col gap-8 lg:flex">
        <Title text={"Our Story"} size={"h1"} />
        <ParagraphText>
            We are a small team of professionals who are seeking to provide a
            simple and elegant service to help anyone move forward with their
            ideas or business.
        </ParagraphText>

        <ParagraphText>
            We believe that the process or obtaining domain names should be as
            fast and simple as possible, hence our commitment to create a platform
            that will allow our customers to do just that.
        </ParagraphText>
    </div>
</div>
