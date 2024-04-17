<script lang="ts">
    import { cn } from "$lib/utils";
    import { TRANSITION_COLORS } from "$lib/utils/constants";

    import PrivacyPolicy from "./privacy-policy.svelte";
    import RefundPolicy from "./refund-policy.svelte";
    import TermsAndConditions from "./terms-and-conditions.svelte";

    const notices = [
        {
            id: 1,
            title: "Privacy Policy",
            component: PrivacyPolicy,
        },
        {
            id: 2,
            title: "Terms and Conditions",
            component: TermsAndConditions,
        },
        {
            id: 3,
            title: "Refund Policy",
            component: RefundPolicy,
        },
    ];

    let chosenNotice = notices[0].id;
</script>

<div
    class="flex grid-cols-4 flex-col justify-center gap-8 p-8 lg:grid lg:gap-12"
>
    <div class="col-span-1 flex flex-col gap-2 rounded-lg p-4 border shadow border-shamrock-300">
        {#each notices as notice}
            <button
                on:click={() => {
                    chosenNotice = notice.id;
                }}
                class={cn(
                    "cursor-pointer rounded-sm p-2 text-start font-normal text-shamrock-900 hover:bg-shamrock-100 hover:text-shamrock-600",
                    chosenNotice === notice.id
                        ? "bg-shamrock-200 text-shamrock-700"
                        : "",
                    TRANSITION_COLORS,
                )}
            >
                {notice.title}
            </button>
        {/each}
    </div>
    <div class="col-span-3 flex flex-col gap-4">
        {#each notices as notice}
            {#if chosenNotice === notice.id}
                <svelte:component this={notice.component} />
            {/if}
        {/each}
    </div>
</div>
