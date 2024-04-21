<script lang="ts">
    import IconBringToFront from "~icons/lucide/bring-to-front";
    import IconView from "~icons/lucide/view";
    import Title from "$lib/components/title.svelte";
    import * as Breadcrumb from "$lib/components/ui/breadcrumb";
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Card from "$lib/components/ui/card";
    import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";
    import { inputStyle } from "$lib/components/ui/input";
    import { DOMAIN_STATUS } from "$lib/utils/constants";
    import { Control, Field, FieldErrors, Label } from "formsnap";
    import { onMount } from "svelte";
    import { toast } from "svelte-sonner";
    import { superForm } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";

    import type { PageData } from "./$types";
    import DeleteDomainDialog from "./delete-domain-dialog.svelte";
    import { domainInfoSchema } from "./schema";

    export let data: PageData;

    let submitting = false;

    const form = superForm(data.form!, {
        validators: zodClient(domainInfoSchema),
        dataType: "json",
        resetForm: false,
        onSubmit: (event) => {
            const data = $formData;
            if (data.listPrice < data.acceptedPrice) {
                toast.error("Accepted price cannot be greater than list price.");
                event.cancel();
                return;
            }
            if (data.expiresAt < new Date().toISOString().split("T")[0]) {
                toast.error("Expiry date cannot be in the past.");
                event.cancel();
                return;
            }
            if (
                ![DOMAIN_STATUS.ACTIVE, DOMAIN_STATUS.INACTIVE].includes(
                    data.status,
                )
            ) {
                toast.error("Invalid domain status.");
                event.cancel();
                return;
            }
            submitting = true;

            event.jsonData({
                ...data,
                status: data.status,
            });
        },
        onResult: (res) => {
            submitting = false;
            if (res.result.status !== 200) {
                toast.error(
                    "An error occured while adding a domain. Please try again later.",
                );
                return;
            }
            toast.success("Changes saved successfully.");
        },
    });
    const { form: formData, enhance } = form;
    onMount(() => {
        if (data.domain === undefined) {
            return;
        }
        for (const key of Object.keys($formData)) {
            // @ts-ignore
            $formData[key] = data.domain[key];
        }
        $formData.expiresAt = new Date(data.domain.expiresAt)
            .toISOString()
            .split("T")[0];
    });
    let iconStyling = "h-6 w-6 text-shamrock-500 dark:text-shamrock-400";
</script>

<Breadcrumb.Root>
    <Breadcrumb.List>
        <Breadcrumb.Item>
            <Breadcrumb.Link href="/u">Dashboard</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>Domains</Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
            <Breadcrumb.Page>{data.domain?.name}</Breadcrumb.Page>
        </Breadcrumb.Item>
    </Breadcrumb.List>
</Breadcrumb.Root>

<div class="grid place-items-center">
    <div class="flex w-full max-w-4xl flex-col gap-12">
        <Title
            capitalize={false}
            text={`${data.domain?.name ?? "Domain"} Info`}
        />
        <div class="flex flex-col gap-8 md:flex-row">
            <Card.Root class="w-full">
                <Card.Header>
                    <div class="flex w-full items-center justify-between gap-4">
                        <Card.Title>Views</Card.Title>
                        <svelte:component this={IconView} class={iconStyling} />
                    </div>
                </Card.Header>
                <Card.Content>
                    <p>{data.domain?.views ?? "- -"}</p>
                </Card.Content>
            </Card.Root>

            <Card.Root class="w-full">
                <Card.Header>
                    <div class="flex w-full items-center justify-between gap-4">
                        <Card.Title>Status</Card.Title>
                        <svelte:component
                            this={IconBringToFront}
                            class={iconStyling}
                        />
                    </div>
                </Card.Header>
                <Card.Content>
                    <p class="capitalize">{data.domain?.status ?? "- -"}</p>
                </Card.Content>
            </Card.Root>
        </div>
        <form class="flex flex-col gap-2" method="post" use:enhance>
            <div class="flex flex-col gap-4 md:flex-row">
                <Field {form} name="listPrice">
                    <Control let:attrs>
                        <div class="flex w-full flex-col gap-2">
                            <Label>List Price</Label>
                            <input
                                {...attrs}
                                type="number"
                                class={inputStyle}
                                required
                                min={0}
                                max={10000}
                                bind:value={$formData.listPrice}
                            />
                        </div>
                    </Control>
                    <FieldErrors />
                </Field>

                <Field {form} name="acceptedPrice">
                    <Control let:attrs>
                        <div class="flex w-full flex-col gap-2">
                            <Label>Accepted Price</Label>
                            <input
                                {...attrs}
                                required
                                type="number"
                                min={5}
                                max={10000}
                                bind:value={$formData.acceptedPrice}
                                class={inputStyle}
                            />
                        </div>
                    </Control>
                    <FieldErrors />
                </Field>
            </div>

            <Field {form} name="expiresAt">
                <Control let:attrs>
                    <Label>Expires At</Label>
                    <input
                        {...attrs}
                        type="date"
                        bind:value={$formData.expiresAt}
                        class={inputStyle}
                        required
                    />
                </Control>
                <FieldErrors />
            </Field>

            {#if [DOMAIN_STATUS.ACTIVE, DOMAIN_STATUS.INACTIVE].includes(data.domain?.status ?? "")}
                <div class="flex items-center gap-2">
                    <Field {form} name="status">
                        <Control let:attrs>
                            <Checkbox
                                {...attrs}
                                name="status"
                                checked={$formData.status ===
                                    DOMAIN_STATUS.ACTIVE}
                                on:click={(e) => {
                                    const prevState =
                                        e.detail.currentTarget.getAttribute(
                                            "data-state",
                                        );
                                    if (prevState === "checked") {
                                        $formData.status = DOMAIN_STATUS.INACTIVE;
                                    } else {
                                        $formData.status = DOMAIN_STATUS.ACTIVE;
                                    }
                                }}
                                required
                            />
                        </Control>
                        <FieldErrors />
                    </Field>
                    <p>Activate domain on the marketplace</p>
                </div>
            {/if}

            <div class="flex w-full">
                <Button
                    disabled={submitting}
                    class="w-full md:w-max"
                    type="submit"
                >
                    {#if submitting}
                        Processing...
                    {:else}
                        Save Changes
                    {/if}
                </Button>
            </div>
        </form>

        <div class="flex w-full justify-end">
            <DeleteDomainDialog
                domainName={data.domain?.name ?? ""}
                domainId={data.domainId}
            />
        </div>
    </div>
</div>
