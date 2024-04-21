<script lang="ts">
    import Title from "$lib/components/title.svelte";
    import * as Breadcrumb from "$lib/components/ui/breadcrumb";
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Card from "$lib/components/ui/card/index.js";
    import { inputStyle } from "$lib/components/ui/input";
    import Input from "$lib/components/ui/input/input.svelte";
    import { Control, Field, FieldErrors, Label } from "formsnap";
    import { toast } from "svelte-sonner";
    import { superForm } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";

    import type { PageData } from "./$types";
    import { createDomainSchema } from "./schema";

    export let data: PageData;

    let submitting = false;

    const form = superForm(data.form!, {
        validators: zodClient(createDomainSchema),
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
            if (data.name.match(/[^a-zA-Z0-9.-]/)) {
                toast.error(
                    "Domain name can only contain alphanumeric characters, hyphens, and periods.",
                );
                event.cancel();
                return;
            }
            submitting = true;
        },
        onResult: (res) => {
            submitting = false;
            if (res.result.status !== 200) {
                toast.error(
                    "An error occured while adding a domain. Please try again later.",
                );
            }
            toast.success("Domain added successfully.");
        },
    });
    const { form: formData, enhance } = form;
</script>

<Breadcrumb.Root>
    <Breadcrumb.List>
        <Breadcrumb.Item>
            <Breadcrumb.Link href="/u">Dashboard</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
            <Breadcrumb.Page>New Domain</Breadcrumb.Page>
        </Breadcrumb.Item>
    </Breadcrumb.List>
</Breadcrumb.Root>

<div class="grid place-items-center">
    <Card.Root class="w-full max-w-xl">
        <Card.Header>
            <Title text={"Add new domain"} />
        </Card.Header>
        <Card.Content>
            <form
                action="/u/new-domain/?/addDomain"
                class="flex flex-col gap-2"
                method="post"
                use:enhance
            >
                <Field {form} name="name">
                    <Control let:attrs>
                        <Label>Domain Name</Label>
                        <Input
                            {...attrs}
                            type={"text"}
                            required
                            maxlength={128}
                            bind:value={$formData.name}
                        />
                    </Control>
                    <FieldErrors />
                </Field>

                <Field {form} name="listPrice">
                    <Control let:attrs>
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
                    </Control>
                    <FieldErrors />
                </Field>

                <Field {form} name="acceptedPrice">
                    <Control let:attrs>
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
                    </Control>
                    <FieldErrors />
                </Field>

                <Field {form} name="expiresAt">
                    <Control let:attrs>
                        <Label>Expiry Date</Label>
                        <input
                            {...attrs}
                            type="date"
                            placeholder={"Expires At"}
                            bind:value={$formData.expiresAt}
                            class={inputStyle}
                            required
                        />
                    </Control>
                    <FieldErrors />
                </Field>

                <Button disabled={submitting} class="w-full" type="submit">
                    {#if submitting}
                        Processing...
                    {:else}
                        Create
                    {/if}
                </Button>
            </form>
        </Card.Content>
    </Card.Root>
</div>
