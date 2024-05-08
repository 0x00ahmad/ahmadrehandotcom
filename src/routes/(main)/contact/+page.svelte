<script lang="ts">
    import ParagraphText from "$lib/components/paragraph-text.svelte";
    import Title from "$lib/components/title.svelte";
    import { Button } from "$lib/components/ui/button";
    import Input from "$lib/components/ui/input/input.svelte";
    import Textarea from "$lib/components/ui/textarea/textarea.svelte";
    import { Control, Field, FieldErrors } from "formsnap";
    import { toast } from "svelte-sonner";
    import { superForm } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";

    import type { PageData } from "./$types.js";
    import { formSchema } from "./schema";

    export let data: PageData;

    let submitting = false;
    const form = superForm(data.form, {
        validators: zodClient(formSchema),
        onSubmit: (_) => {
            submitting = true;
        },
        onResult: (res) => {
            submitting = false;
            if (res.result.status !== 200) {
                toast.error(
                    "Could not send your message. Please try again later.",
                );
            }
            toast.success("Your message has been sent!");
        },
    });
    const { form: formData, enhance } = form;
</script>

<div
    class="flex h-full grid-cols-4 flex-col justify-center gap-40 p-8 lg:grid lg:place-items-center lg:gap-12 lg:p-20"
>
    <div class="col-span-2 flex flex-col gap-12">
        <span
            class="relative text-3xl font-semibold tracking-wider sm:text-4xl md:text-5xl lg:text-6xl"
        >
            Helping you with the most important step in your
        </span>
    </div>
    <div class="col-span-2 grid w-full place-items-center lg:flex">
        <div
            class="flex w-full max-w-xl flex-col gap-6 rounded-xl border-2 border-slate-100 bg-white p-6 shadow dark:border-slate-500 dark:bg-slate-950 dark:shadow dark:shadow-indigo-600 md:p-8 xl:p-12"
        >
            <Title text={"Let's Talk"} size={"h1"} />
            <ParagraphText>
                If you have any questions, don't hesitate to reach out to us!
            </ParagraphText>
            <form
                class="flex w-full flex-col gap-2"
                method="post"
                action={"/contact/?/contact"}
                use:enhance
            >
                <div class="flex flex-col gap-2 md:flex-row">
                    <Field {form} name="firstName">
                        <Control let:attrs>
                            <Input
                                {...attrs}
                                type={"text"}
                                placeholder={"First Name"}
                                required
                                maxlength={32}
                                bind:value={$formData.firstName}
                            />
                        </Control>
                        <FieldErrors />
                    </Field>

                    <Field {form} name="lastName">
                        <Control let:attrs>
                            <Input
                                {...attrs}
                                type={"text"}
                                placeholder={"Last Name"}
                                required
                                maxlength={32}
                                bind:value={$formData.lastName}
                            />
                        </Control>
                        <FieldErrors />
                    </Field>
                </div>

                <Field {form} name="email">
                    <Control let:attrs>
                        <Input
                            {...attrs}
                            required
                            type={"email"}
                            placeholder={"Email"}
                            maxlength={128}
                            bind:value={$formData.email}
                        />
                    </Control>
                    <FieldErrors />
                </Field>

                <Field {form} name="phone">
                    <Control let:attrs>
                        <Input
                            {...attrs}
                            type={"tel"}
                            required
                            placeholder={"Phone"}
                            maxlength={20}
                            bind:value={$formData.phone}
                        />
                    </Control>
                    <FieldErrors />
                </Field>

                <Field {form} name="subject">
                    <Control let:attrs>
                        <Input
                            {...attrs}
                            type={"text"}
                            placeholder={"Subject"}
                            required
                            maxlength={32}
                            bind:value={$formData.subject}
                        />
                    </Control>
                    <FieldErrors />
                </Field>

                <Field {form} name="message">
                    <Control let:attrs>
                        <Textarea
                            {...attrs}
                            placeholder={"Message"}
                            maxlength={256}
                            required
                            bind:value={$formData.message}
                        />
                    </Control>
                    <FieldErrors />
                </Field>

                <Button disabled={submitting} class="w-full" type="submit">
                    Send Message
                </Button>
            </form>
        </div>
    </div>
</div>
