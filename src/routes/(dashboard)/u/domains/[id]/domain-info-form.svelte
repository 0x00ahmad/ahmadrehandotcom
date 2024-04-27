<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";
	import { inputStyle } from "$lib/components/ui/input";
	import { DOMAIN_STATUS } from "$lib/utils/constants";
	import { Control, Field, FieldErrors, Label } from "formsnap";
	import { onMount } from "svelte";
	import { toast } from "svelte-sonner";
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";

	import { domainInfoSchema } from "./schema";
	import LabelledInput from "$lib/components/labelled-input.svelte";

	export let data: any;

	let submitting = false;

	const form = superForm(data.form!, {
		validators: zodClient(domainInfoSchema),
		dataType: "json",
		resetForm: false,
		onSubmit: (event) => {
			const data = $formData;
			// if (data.listPrice < data.acceptedPrice) {
			// 	toast.error("Accepted price cannot be greater than list price.");
			// 	event.cancel();
			// 	return;
			// }
			if (data.expiresAt < new Date().toISOString().split("T")[0]) {
				toast.error("Expiry date cannot be in the past.");
				event.cancel();
				return;
			}
			submitting = true;

			event.jsonData({ ...data, status: data.status });
		},
		onResult: (res) => {
			submitting = false;
			if (res.result.status !== 200) {
				toast.error(
					// @ts-ignore
					res.result?.data.errors?.[0]?.message ??
						"An error occured saving info. Please try again later."
				);
				return;
			}
			toast.success("Changes saved successfully.");
		}
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
</script>

<form class="flex flex-col gap-4 w-full" method="post" use:enhance>
	<div class="flex w-full flex-col gap-2">
		<Field {form} name={"listPrice"}>
			<Control let:attrs>
				<Label>List Price</Label>
				<input
					{...attrs}
					class={inputStyle}
					type="number"
					min={5}
					max={10000}
					bind:value={$formData.listPrice}
					required
				/>
			</Control>
			<FieldErrors />
		</Field>
	</div>

	<div class="flex flex-col gap-4 md:flex-row">
		<div class="flex w-full flex-col gap-2">
			<Field {form} name="expiresAt">
				<Control let:attrs>
					<LabelledInput label={"Expires At"}>
						<input
							{...attrs}
							type="date"
							bind:value={$formData.expiresAt}
							class={inputStyle}
							required
						/>
					</LabelledInput>
				</Control>
				<FieldErrors />
			</Field>
		</div>
		<div class="flex w-full flex-col gap-2">
			<Field {form} name="transferCode">
				<Control let:attrs>
					<LabelledInput label={"Transfer Code"}>
						<input
							{...attrs}
							minlength="5"
							required
							bind:value={$formData.transferCode}
							class={inputStyle}
						/>
					</LabelledInput>
				</Control>
				<FieldErrors />
			</Field>
		</div>
	</div>

	{#if [DOMAIN_STATUS.ACTIVE, DOMAIN_STATUS.INACTIVE].includes(data.domain?.status ?? "")}
		<div class="flex items-center gap-2">
			<Field {form} name="status">
				<Control let:attrs>
					<Checkbox
						{...attrs}
						name="status"
						checked={$formData.status === DOMAIN_STATUS.ACTIVE}
						on:click={(e) => {
							const prevState = e.detail.currentTarget.getAttribute("data-state");
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
		<Button disabled={submitting} class="w-full md:w-max" type="submit">
			{#if submitting}
				Processing...
			{:else}
				Save Changes
			{/if}
		</Button>
	</div>
</form>
