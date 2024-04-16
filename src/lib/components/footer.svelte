<script lang="ts">
    import IconInstagramLogo from "~icons/basil/instagram-outline";
    import IconLinkedInLogo from "~icons/basil/linkedin-outline";
    import IconFacebookLogo from "~icons/ic/baseline-facebook";
    import IconEmail from "~icons/mdi/email";
    import IconPhone from "~icons/mdi/phone";
    import IconTwitterLogo from "~icons/mdi/twitter";
    import TopRightGraphic from "$lib/assets/footer-graphic-tr.svg";
    import { NAV_LINKS } from "$lib/utils/constants";
    import clsx from "clsx";

    import Line from "./line.svelte";
    import Title from "./title.svelte";

    const now = new Date();
    const currentYear = now.getFullYear();

    const socialLinks = [
        {
            icon: IconLinkedInLogo,
            link: "#",
        },
        {
            icon: IconFacebookLogo,
            link: "#",
        },
        {
            icon: IconInstagramLogo,
            link: "#",
        },
        {
            icon: IconTwitterLogo,
            link: "#",
        },
    ];
</script>

<section
    class="bg-primary-950 relative flex w-full flex-col items-center gap-4 p-4 pt-64 text-white lg:p-8 lg:pt-40"
    id="footer"
>
    <div class="absolute top-[-64px] w-full px-8">
        <div
            class="bg-primary-600 relative flex w-full flex-col justify-between gap-8 rounded-xl p-6 text-white lg:flex-row lg:p-10"
        >
            <div class="flex flex-col gap-4">
                <p>Need help?</p>
                <Title
                    text={"Talk to our experts"}
                    size={"h2"}
                    color={"white"}
                    weight={"semibold"}
                />
            </div>
            <div class="flex flex-col justify-center gap-2 tracking-wide">
                <div
                    class="flex flex-col items-start gap-2 md:flex-row lg:items-center"
                >
                    <IconEmail class={"h-4 w-4"} />
                    <p>sales@elektrolead.com</p>
                </div>

                <div
                    class="flex flex-col items-start gap-2 md:flex-row lg:items-center"
                >
                    <IconPhone class={"h-4 w-4"} />
                    <p>xxx-xxx-xxxx</p>
                </div>
            </div>
            <div class="absolute right-0 top-0">
                <img src={TopRightGraphic} alt="" />
            </div>
        </div>
    </div>

    <div
        class="flex w-full flex-col items-center justify-center gap-4 md:flex-row lg:gap-20"
    >
        {#each NAV_LINKS as link}
            <div
                class="w-full border-b border-white py-2 md:w-max md:border-transparent"
            >
                <a href={link.link}>{link.name}</a>
            </div>
        {/each}
    </div>

    <div class="flex w-full flex-col items-end justify-center gap-2">
        <Line cls={"hidden border-primary-800 md:block"} />

        <div class="flex w-full flex-col items-center justify-between gap-4">
            <div class="flex items-center gap-2">
                {#each socialLinks as socialLink}
                    <a
                        href={socialLink.link}
                        class={clsx("focus:b-primary-200 p-2")}
                    >
                        <svelte:component this={socialLink.icon} />
                    </a>
                {/each}
            </div>

            <a href="/policies">
                <small class="text-center font-sans tracking-wide text-slate-300">
                    Terms of Service | Privacy Policy
                </small>
            </a>

            <small class="text-center font-sans tracking-wide text-slate-400">
                &#169; {currentYear} Elektrolead (Pvt.) Ltd. All rights reserved.
            </small>
        </div>
    </div>
</section>
