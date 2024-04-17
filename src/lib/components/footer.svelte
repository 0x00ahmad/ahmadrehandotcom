<script lang="ts">
    import IconInstagramLogo from "~icons/basil/instagram-outline";
    import IconLinkedInLogo from "~icons/basil/linkedin-outline";
    import IconXTwitter from "~icons/fa6-brands/x-twitter";
    import IconFacebookLogo from "~icons/ic/baseline-facebook";
    import { cn } from "$lib/utils";
    import { MAX_PAGE_WIDTH } from "$lib/utils/constants";

    import DarkModeToggle from "./dark-mode-toggle.svelte";
    import Logo from "./logo.svelte";

    const now = new Date();
    const currentYear = now.getFullYear();

    const socialLinks = [
        { icon: IconInstagramLogo, link: "#" },
        { icon: IconXTwitter, link: "#" },
        { icon: IconFacebookLogo, link: "#" },
        { icon: IconLinkedInLogo, link: "#" },
    ];
</script>

<div class={cn("grid w-full place-items-center gap-12")}>
    <footer class={cn("m-4 w-full rounded-lg", MAX_PAGE_WIDTH)}>
        <div class="max-w-screen mx-auto w-full p-4 md:py-8">
            <div
                class="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"
            >
                <div class="flex items-center gap-8">
                    <a
                        href="https://dnbazar.com/"
                        class="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
                    >
                        <Logo size={"sm"} />
                    </a>
                    <DarkModeToggle />
                </div>

                <ul
                    class="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0"
                >
                    <li>
                        <a href="/search?q=" class="me-4 hover:underline md:me-6"
                            >Catalog</a
                        >
                    </li>
                    <li>
                        <a href="/about" class="me-4 hover:underline md:me-6"
                            >About Us</a
                        >
                    </li>
                    <li>
                        <a href="/legal" class="me-4 hover:underline md:me-6"
                            >Legal</a
                        >
                    </li>
                    <li>
                        <a href="/contact" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr
                class="my-4 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-6"
            />
            <div
                class="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            >
                <span
                    class="block text-sm text-gray-500 dark:text-gray-400 sm:text-center"
                >
                    &#169; {currentYear}
                    <a href="https://dnbazar.com/" class="hover:underline">
                        DNBazar
                    </a> All Rights Reserved.
                </span>

                <div class="flex items-center gap-4">
                    {#each socialLinks as socialLink}
                        <a
                            href={socialLink.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                        >
                            <svelte:component
                                this={socialLink.icon}
                                class="h-6 w-6"
                            />
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </footer>
</div>
