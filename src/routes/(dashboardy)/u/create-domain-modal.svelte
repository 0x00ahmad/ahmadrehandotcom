<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Dialog from "$lib/components/ui/dialog";
    import { inputStyle } from "$lib/components/ui/input";
    import Input from "$lib/components/ui/input/input.svelte";
    import { Control, Field, FieldErrors } from "formsnap";
    import { toast } from "svelte-sonner";
    import { superForm, type SuperValidated } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";

    import { createDomainSchema, type CreateDomain } from "./schema";

    export let data: SuperValidated<CreateDomain> | undefined = undefined;

    const form = superForm(data!, {
        validators: zodClient(createDomainSchema),
    });
    const { form: formData, enhance } = form;

    let submitting = false;
    const formInterceptor: any = async () => {
        if (submitting) {
            return;
        }
        submitting = true;
        return async ({ update, result }: any) => {
            submitting = false;
            if (result.type === "failure") {
                toast.error(
                    "An error occured while adding a domain. Please try again later.",
                );
            }
            const isSuccess = result.type === "success";
            await update({ reset: isSuccess });
            if (isSuccess) {
                toast.success("Domain added successfully.");
            }
        };
    };
</script>

<Dialog.Root>
    <Dialog.Trigger>
        <Button>Add a Domain</Button>
    </Dialog.Trigger>
    <Dialog.Content>
        <Dialog.Header>
            <Dialog.Title class="mb-4">Add a domain</Dialog.Title>
            <Dialog.Description>
                <form
                    action="/u/?/addDomain"
                    class="flex flex-col gap-2"
                    method="post"
                    use:enhance={formInterceptor}
                >
                    <Field {form} name="name">
                        <Control let:attrs>
                            <Input
                                {...attrs}
                                type={"text"}
                                placeholder={"Name"}
                                required
                                maxlength={128}
                                bind:value={$formData.name}
                            />
                        </Control>
                        <FieldErrors />
                    </Field>

                    <Field {form} name="listPrice">
                        <Control let:attrs>
                            <input
                                {...attrs}
                                type="number"
                                class={inputStyle}
                                placeholder={"List Price"}
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
                            <input
                                {...attrs}
                                placeholder={"Accepted Price"}
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
                        Add Domain
                    </Button>
                </form>
            </Dialog.Description>
        </Dialog.Header>
    </Dialog.Content>
</Dialog.Root>
