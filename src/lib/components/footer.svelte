<script lang="ts">
    import IconInstagramLogo from "~icons/basil/instagram-outline";
    import IconLinkedInLogo from "~icons/basil/linkedin-outline";
    import IconFacebookLogo from "~icons/ic/baseline-facebook";
    import IconEmail from "~icons/mdi/email";
    import IconPhone from "~icons/mdi/phone";
    import IconTwitterLogo from "~icons/mdi/twitter";
    import { NAV_LINKS } from "$lib/utils/constants";
    import clsx from "clsx";

    import Line from "./line.svelte";
    import Logo from "./logo.svelte";
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

<footer class="m-4 rounded-lg bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a
                href="https://dnbazar.com/"
                class="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
            >
                <Logo size={"sm"} />
            </a>
            <ul
                class="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0"
            >
                <li>
                    <a href="#" class="me-4 hover:underline md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="me-4 hover:underline md:me-6">Policies</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr
            class="my-4 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-6"
        />
        <span
            class="block text-sm text-gray-500 dark:text-gray-400 sm:text-center"
        >
            &#169; {currentYear}
            <a href="https://dnbazar.com/" class="hover:underline"> DNBazar </a> All
            Rights Reserved.</span
        >
    </div>
</footer>
