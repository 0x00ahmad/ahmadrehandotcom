<script lang="ts">
	import { Control, Field, FieldErrors, Label } from "formsnap";
	import Input from "./ui/input/input.svelte";
	import type { HTMLInputAttributes } from "svelte/elements";
	import type { SuperForm } from "sveltekit-superforms";

	export let formObj: SuperForm<any, any>;
	export let formName: string;
	export let label: string;

	type $$Props = {
		useDefaultInput?: boolean;
		formObj: any;
		formName: string;
		label: string;
	} & HTMLInputAttributes;
	export let value: $$Props["value"] = undefined;
</script>

<div class="flex w-full flex-col gap-2">
	<Field form={formObj} name={formName}>
		<Control let:attrs>
			<Label>{label}</Label>
			<Input {...attrs} bind:value {...$$restProps} />
		</Control>
		<FieldErrors />
	</Field>
</div>
