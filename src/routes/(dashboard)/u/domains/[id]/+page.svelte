<script lang="ts">
	import IconBringToFront from "~icons/lucide/bring-to-front";
	import IconView from "~icons/lucide/view";
	import IconClipboard from "~icons/lucide/clipboard";
	import Title from "$lib/components/title.svelte";
	import * as Breadcrumb from "$lib/components/ui/breadcrumb";
	import * as Card from "$lib/components/ui/card";

	import type { PageData } from "./$types";
	import DeleteDomainDialog from "./delete-domain-dialog.svelte";
	import { snakeToSpacedPascal } from "$lib/utils/string.utils";
	import DomainInfoForm from "./domain-info-form.svelte";
	import { DOMAIN_STATUS, NAV_LINKS } from "$lib/utils/constants";
	import Input from "$lib/components/ui/input/input.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import { toast } from "svelte-sonner";
	import GenericConfirmationAlert from "$lib/components/molecules/generic-confirmation-alert.svelte";
	import { goto } from "$app/navigation";

	export let data: PageData;

	let iconStyling = "h-6 w-6 text-shamrock-500 dark:text-shamrock-400";

	function confirmDomainTransfer() {
		fetch(`/u/domains/${data.domainId}/confirm-transfer`, { method: "post" });
		toast.success("Domain transfer confirmed successfully, redirecting...");
		setTimeout(() => {
			goto(NAV_LINKS.dashboard.home);
		}, 2000);
	}
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="/u">Dashboard</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator />
		<Breadcrumb.Item>Domains</Breadcrumb.Item>
		<Breadcrumb.Separator />
		<Breadcrumb.Item>
			<Breadcrumb.Page>{data.domain?.name}</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>

<div class="grid place-items-center">
	<div class="flex w-full max-w-4xl flex-col gap-12">
		<Title capitalize={false} text={data.domain?.name ?? "Domain"} />
		<div class="flex flex-col gap-8 md:flex-row">
			{#if data.domain?.status !== DOMAIN_STATUS.TO_CONFIRM}
				<Card.Root class="w-full">
					<Card.Header>
						<div class="flex w-full items-center justify-between gap-4">
							<Card.Title>Views</Card.Title>
							<svelte:component this={IconView} class={iconStyling} />
						</div>
					</Card.Header>
					<Card.Content>
						<p>{data.domain?.views ?? "- -"}</p>
					</Card.Content>
				</Card.Root>
			{/if}

			<Card.Root class="w-full">
				<Card.Header>
					<div class="flex w-full items-center justify-between gap-4">
						<Card.Title>Status</Card.Title>
						<svelte:component this={IconBringToFront} class={iconStyling} />
					</div>
				</Card.Header>
				<Card.Content>
					<p class="capitalize">
						{snakeToSpacedPascal(data.domain?.status ?? "- -")}
					</p>
				</Card.Content>
			</Card.Root>
		</div>

		{#if data.domain}
			{#if data.domain.status === DOMAIN_STATUS.SOLD}
				<div class="flex w-full flex-col items-center justify-center gap-4">
					<Title text="Domain Sold" size={"h3"} />
					<p class="text-md lg:text-lg">
						This domain has been sold. You can no longer make any changes to it.
					</p>
				</div>
			{:else if data.domain.status === DOMAIN_STATUS.TO_CONFIRM}
				<Title text="Domain Confirmation" size={"h3"} />
				<div class="flex w-full items-end gap-2">
					<div class="flex w-full flex-col gap-2">
						<label for="transfercode">Transfer code</label>
						<Input
							name="transfercode"
							value={data.domain.transferCode ?? ""}
							type="text"
							class="w-full"
							disabled
						/>
					</div>
					<Button
						on:click={() => {
							navigator.clipboard.writeText(data.domain?.transferCode ?? "");
							toast.success("Transfer code copied to clipboard");
						}}
						class="flex items-center gap-2"
					>
						<svelte:component this={IconClipboard} class="h-4 w-4" />
						Copy to clipboard
					</Button>
				</div>

				<GenericConfirmationAlert
					onConfirm={confirmDomainTransfer}
					title="Confirm Domain Transfer"
					description="Are you sure that you want to confirm the transfer of ownership of this domain to you? This action is irreversible."
					triggerText="Confirm Ownership Transfer"
				/>
			{:else}
				<DomainInfoForm {data} />
				<div class="flex w-full justify-end">
					<DeleteDomainDialog
						domainName={data.domain?.name ?? ""}
						domainId={data.domainId}
					/>
				</div>
			{/if}
		{/if}
	</div>
</div>
