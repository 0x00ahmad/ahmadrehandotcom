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
	import CountriesSelect from "$lib/components/molecules/countries-select.svelte";
	import { COUNTRIES_SELECT } from "$lib/client/data/countries";

	export let data: PageData;

	let submitting = false;

	const form = superForm(data.form!, {
		dataType: "json",
		validators: zodClient(personalInfoSchema),
		resetForm: false,
		onSubmit: (event) => {
			const data = $formData;
			submitting = true;
			event.jsonData(data);
		},
		onResult: (res) => {
			submitting = false;
			if (res.result.status !== 200) {
				toast.error(
					"Could not update your personal information. Please try again later."
				);
			}
			toast.success("Info saved successfully.");
		}
	});
	const { form: formData, enhance } = form;

	onMount(() => {
		$formData.firstName = data.personalInfo?.firstName ?? "";
		$formData.lastName = data.personalInfo?.lastName ?? "";
		$formData.email = data.personalInfo?.email ?? "";
		$formData.phoneNumber = data.personalInfo?.phoneNumber ?? "";
		$formData.address1 = data.personalInfo?.address1 ?? "";
		$formData.address2 = data.personalInfo?.address2 ?? "";
		$formData.country = data.personalInfo?.country ?? "";
		$formData.city = data.personalInfo?.city ?? "";
		$formData.state = data.personalInfo?.state ?? "";
		$formData.postalCode = data.personalInfo?.postalCode ?? "";
	});
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
				action="/u/profile/?/savePersonalInfo"
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

				<Field {form} name="phoneNumber">
					<Control let:attrs>
						<LabelledInput label="Phone Number">
							<Input
								{...attrs}
								type={"tel"}
								required
								maxlength={24}
								bind:value={$formData.phoneNumber}
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
							<CountriesSelect
								defaultVal={$formData.country}
								options={COUNTRIES_SELECT}
								otherAttrs={{
									...attrs,
									required: true,
									maxlength: 64
								}}
								onSelect={(option) => {
									$formData.country = option.value;
								}}
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
						Save changes
					{/if}
				</Button>
			</form>
		</Card.Content>
	</Card.Root>
</div>
