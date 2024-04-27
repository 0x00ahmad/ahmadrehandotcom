<script lang="ts">
	import * as AlertDialog from "$lib/components/ui/alert-dialog";
	import Button from "../ui/button/button.svelte";

	export let onConfirm: () => void;
	export let triggerText = "Delete";
	export let title = "Are you sure?";
	export let description =
		"Are you sure you want to perform this action? This action cannot be undone.";
</script>

<AlertDialog.Root>
	<AlertDialog.Trigger>
		<Button class="w-full">
			{triggerText}
		</Button>
	</AlertDialog.Trigger>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>{title}</AlertDialog.Title>
			<AlertDialog.Description>
				{description}
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
			<AlertDialog.Action on:click={onConfirm}>Confirm</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
