<script lang="ts">
	import IconCaretSort from "~icons/carbon/caret-sort";
	import IconCheck from "~icons/lucide/check";

	import { tick } from "svelte";
	import * as Command from "$lib/components/ui/command/index.js";
	import * as Popover from "$lib/components/ui/popover/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import { cn } from "$lib/utils.js";
	import type { Option } from "$lib/types";

	export let otherAttrs: Record<string, any | undefined> = {};
	export let options: Option[] = [];
	export let onSelect = (option: Option) => {};

	export let defaultVal: string = "";

	let open = false;
	let chosen = options[0];
	$: value = chosen.value;

	$: {
		if (defaultVal.length > 0) {
			chosen =
				options.find((f) => f.value.toLowerCase().includes(defaultVal)) ??
				options[0];
			value = chosen.value;
		}
	}

	$: selectedValue =
		options.find((f) => {
			return f.id === chosen.id;
		})?.label ?? "Select an option";

	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}
</script>

<Popover.Root bind:open let:ids>
	<Popover.Trigger asChild let:builder>
		<Button
			{...otherAttrs}
			builders={[builder]}
			variant="outline"
			bind:value
			role="combobox"
			aria-expanded={open}
			class="w-full justify-between"
		>
			{selectedValue}
			<svelte:component
				this={IconCaretSort}
				class="ml-2 h-4 w-4 shrink-0 opacity-50"
			/>
		</Button>
	</Popover.Trigger>
	<Popover.Content class="w-full max-w-96 p-0">
		<Command.Root>
			<Command.Input placeholder="Search..." class="h-9" />
			<Command.Empty>No results found.</Command.Empty>
			<Command.Group class={"max-h-72 overflow-y-auto"}>
				{#each options as option}
					<Command.Item
						value={option.value}
						onSelect={(_) => {
							chosen = option;
							closeAndFocusTrigger(ids.trigger);
							onSelect(option);
						}}
					>
						<svelte:component
							this={IconCheck}
							class={cn(
								"mr-2 h-4 w-4",
								chosen.value !== option.value && "text-transparent"
							)}
						/>
						{option.label}
					</Command.Item>
				{/each}
			</Command.Group>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
