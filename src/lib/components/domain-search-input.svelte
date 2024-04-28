<script lang="ts">
	import IconSearch from "~icons/bx/search";
	import { goto } from "$app/navigation";
	import Button from "$lib/components/ui/button/button.svelte";
	import { cn } from "$lib/utils";
	import { TRANSITION_COLORS } from "$lib/utils/constants";
	import { toast } from "svelte-sonner";

	export let defaultValue = "";
	export let defaultPlaceholder = "Type a name or keyword";

	let searching = false;

	function searchForDomain(event: any) {
		searching = true;
		let query = event.target[0].value.trim() as string;
		console.log(query);
		// pattern is to only allow a-z, A-Z, 0-9, dots and hyphen
		if (query.length < 1 || query.match(/[^a-zA-Z0-9.-]/g)) {
			toast("Please enter a valid domain name.");
			searching = false;
			return;
		}
		goto(`/search?q=${query}`);
		setTimeout(() => {
			searching = false;
		}, 1000);
	}
</script>

<form
	class="flex w-full items-center gap-2"
	on:submit|preventDefault={searchForDomain}
	method="post"
>
	<input
		type="text"
		class={cn(
			"w-full rounded-md border-2 border-slate-200 p-4 text-xl outline-none hover:border-slate-300 focus:border-shamrock-500 focus:ring-2 focus:ring-shamrock-500 focus:ring-offset-2 disabled:bg-slate-100",
			"dark:border-slate-700 dark:bg-slate-900 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:ring-shamrock-500 dark:focus:ring-offset-slate-900 dark:disabled:bg-slate-800",
			TRANSITION_COLORS
		)}
		disabled={searching}
		value={defaultValue}
		placeholder={defaultPlaceholder}
		minlength="1"
	/>
	<Button size={"iconLg"} type="submit">
		<svelte:component this={IconSearch} />
	</Button>
</form>
