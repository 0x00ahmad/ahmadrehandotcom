<script lang="ts">
    import LabelledInput from "$lib/components/labelled-input.svelte";
    import Title from "$lib/components/title.svelte";
    import * as Breadcrumb from "$lib/components/ui/breadcrumb";
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Card from "$lib/components/ui/card/index.js";
    import Input from "$lib/components/ui/input/input.svelte";
    import { Control, Field, FieldErrors } from "formsnap";
    import { onMount } from "svelte";
    import { toast } from "svelte-sonner";
    import { superForm } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";

    import type { PageData } from "./$types";
    import { personalInfoSchema } from "./schema";

    export let data: PageData;

    let submitting = false;

    const form = superForm(data.form!, {
        validators: zodClient(personalInfoSchema),
        onSubmit: (event) => {
            const data = $formData;
            submitting = true;
        },
        onResult: (res) => {
            submitting = false;
            if (res.result.status !== 200) {
                toast.error(
                    "Could not update your personal information. Please try again later.",
                );
            }
            toast.success("Domain added successfully.");
        },
    });
    const { form: formData, enhance } = form;

    onMount(() => {});
</script>

<Breadcrumb.Root>
    <Breadcrumb.List>
        <Breadcrumb.Item>
            <Breadcrumb.Link href="/u">Dashboard</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
            <Breadcrumb.Page>Profile</Breadcrumb.Page>
        </Breadcrumb.Item>
    </Breadcrumb.List>
</Breadcrumb.Root>

<div class="grid place-items-center gap-8">
    <Card.Root class="w-full max-w-xl">
        <Card.Header>
            <Title text={"Profile Info"} />
        </Card.Header>
        <Card.Content>
            <form
                action="/u/new-domain/?/addDomain"
                class="flex flex-col gap-2"
                method="post"
                use:enhance
            >
                <div class="flex w-full flex-col gap-2 md:flex-row">
                    <Field {form} name="firstName">
                        <Control let:attrs>
                            <LabelledInput label="First Name">
                                <Input
                                    {...attrs}
                                    type={"text"}
                                    required
                                    maxlength={32}
                                    bind:value={$formData.firstName}
                                />
                            </LabelledInput>
                        </Control>
                        <FieldErrors />
                    </Field>

                    <Field {form} name="lastName">
                        <Control let:attrs>
                            <LabelledInput label="Last Name">
                                <Input
                                    {...attrs}
                                    type={"text"}
                                    required
                                    maxlength={32}
                                    bind:value={$formData.lastName}
                                />
                            </LabelledInput>
                        </Control>
                        <FieldErrors />
                    </Field>
                </div>

                <Field {form} name="email">
                    <Control let:attrs>
                        <LabelledInput label="Email">
                            <Input
                                {...attrs}
                                type={"email"}
                                required
                                maxlength={128}
                                bind:value={$formData.email}
                            />
                        </LabelledInput>
                    </Control>
                    <FieldErrors />
                </Field>

                <Field {form} name="address1">
                    <Control let:attrs>
                        <LabelledInput label="Address">
                            <Input
                                {...attrs}
                                required
                                maxlength={128}
                                bind:value={$formData.address1}
                            />
                        </LabelledInput>
                    </Control>
                    <FieldErrors />
                </Field>

                <Field {form} name="address2">
                    <Control let:attrs>
                        <LabelledInput label="Address 2">
                            <Input
                                {...attrs}
                                required
                                maxlength={128}
                                bind:value={$formData.address2}
                            />
                        </LabelledInput>
                    </Control>
                    <FieldErrors />
                </Field>

                <Field {form} name="country">
                    <Control let:attrs>
                        <LabelledInput label="Country">
                            <Input
                                {...attrs}
                                required
                                maxlength={64}
                                bind:value={$formData.country}
                            />
                        </LabelledInput>
                    </Control>
                    <FieldErrors />
                </Field>

                <div class="flex w-full flex-col gap-2 md:flex-row">
                    <Field {form} name="city">
                        <Control let:attrs>
                            <LabelledInput label="City">
                                <Input
                                    {...attrs}
                                    required
                                    maxlength={64}
                                    bind:value={$formData.city}
                                />
                            </LabelledInput>
                        </Control>
                        <FieldErrors />
                    </Field>
                    <Field {form} name="state">
                        <Control let:attrs>
                            <LabelledInput label="State">
                                <Input
                                    {...attrs}
                                    required
                                    maxlength={64}
                                    bind:value={$formData.state}
                                />
                            </LabelledInput>
                        </Control>
                        <FieldErrors />
                    </Field>
                </div>

                <Field {form} name="postalCode">
                    <Control let:attrs>
                        <LabelledInput label="Postal Code">
                            <Input
                                {...attrs}
                                required
                                maxlength={16}
                                bind:value={$formData.postalCode}
                            />
                        </LabelledInput>
                    </Control>
                    <FieldErrors />
                </Field>

                <Button disabled={submitting} class="w-full" type="submit">
                    {#if submitting}
                        Saving...
                    {:else}
                        Save Changes
                    {/if}
                </Button>
            </form>
        </Card.Content>
    </Card.Root>
</div>
