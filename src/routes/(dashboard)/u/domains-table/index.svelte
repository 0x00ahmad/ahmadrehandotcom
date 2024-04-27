<script lang="ts">
	import IconCaretSort from "~icons/carbon/caret-sort";
	import IconChevronDown from "~icons/lucide/chevron-down";
	import { Button } from "$lib/components/ui/button/index.js";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import * as Table from "$lib/components/ui/table/index.js";
	import { cn } from "$lib/utils.js";
	import { DEFAULT_CURRENCY } from "$lib/utils/constants";
	import { snakeToSpacedPascal } from "$lib/utils/string.utils";
	import {
		createRender,
		createTable,
		Render,
		Subscribe
	} from "svelte-headless-table";
	import {
		addHiddenColumns,
		addPagination,
		addSelectedRows,
		addSortBy,
		addTableFilter
	} from "svelte-headless-table/plugins";
	import { readable } from "svelte/store";

	import type { Domain } from "../schema";
	import TableCheckbox from "./domains-table-checkbox.svelte";
	import MoreInfoBtn from "./more-info-btn.svelte";

	export let data: Domain[] = [];

	const hideableCols = ["status", "views", "listPrice", "expiresAt"];

	const table = createTable(readable(data), {
		sort: addSortBy({ disableMultiSort: true }),
		page: addPagination(),
		filter: addTableFilter({
			fn: ({ filterValue, value }) => value.includes(filterValue)
		}),
		select: addSelectedRows(),
		hide: addHiddenColumns()
	});

	const columns = table.createColumns([
		table.column({
			header: (_, { pluginStates }) => {
				const { allPageRowsSelected } = pluginStates.select;
				return createRender(TableCheckbox, {
					checked: allPageRowsSelected
				});
			},
			accessor: "id",
			cell: ({ row }, { pluginStates }) => {
				const { getRowState } = pluginStates.select;
				const { isSelected } = getRowState(row);

				return createRender(TableCheckbox, {
					checked: isSelected
				});
			},
			plugins: {
				sort: { disable: true },
				filter: { exclude: true }
			}
		}),

		table.column({
			header: "Domain",
			accessor: "name",
			cell: ({ value }) => value.toLowerCase(),
			plugins: {
				filter: { getFilterValue: (v) => v.toLowerCase() }
			}
		}),

		table.column({
			header: "Listed Price",
			accessor: "listPrice",
			cell: ({ value }) => {
				const formatted = new Intl.NumberFormat("en-US", {
					style: "currency",
					currency: DEFAULT_CURRENCY.name
				}).format(value);
				return formatted;
			},
			plugins: { filter: { exclude: true } }
		}),

		// table.column({
		//     header: "Accepted Price",
		//     accessor: "acceptedPrice",
		//     cell: ({ value }) => {
		//         const formatted = new Intl.NumberFormat("en-US", {
		//             style: "currency",
		//             currency: DEFAULT_CURRENCY.name,
		//         }).format(value);
		//         return formatted;
		//     },
		//     plugins: { filter: { exclude: true } },
		// }),

		table.column({
			header: "Views",
			accessor: "views",
			cell: ({ value }) => value,
			plugins: {
				filter: {
					getFilterValue(value) {
						return value;
					}
				}
			}
		}),

		table.column({
			header: "Status",
			accessor: "status",
			cell: ({ value }) => {
				return snakeToSpacedPascal(value);
			},
			plugins: { sort: { disable: true }, filter: { exclude: true } }
		}),

		table.column({
			header: "Expires At",
			accessor: "expiresAt",
			cell: ({ value }) => {
				const formatted = new Date(value).toDateString();
				return formatted;
			},
			plugins: { filter: { exclude: true } }
		}),

		table.column({
			accessor: ({ id }) => id,
			header: "",
			cell: ({ value }) => {
				return createRender(MoreInfoBtn, { domainId: value });
			}
		})
	]);

	const {
		headerRows,
		pageRows,
		tableAttrs,
		tableBodyAttrs,
		flatColumns,
		pluginStates,
		rows
	} = table.createViewModel(columns);

	const { sortKeys } = pluginStates.sort;

	const { hiddenColumnIds } = pluginStates.hide;
	const ids = flatColumns.map((c) => c.id);
	let hideForId = Object.fromEntries(ids.map((id) => [id, true]));

	$: $hiddenColumnIds = Object.entries(hideForId)
		.filter(([, hide]) => !hide)
		.map(([id]) => id);

	const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
	const { filterValue } = pluginStates.filter;

	const { selectedDataIds } = pluginStates.select;
</script>

<div class="w-full">
	<div class="mb-4 flex items-center gap-4">
		<Input
			class="max-w-sm"
			placeholder="Filter domains"
			type="text"
			bind:value={$filterValue}
		/>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button variant="outline" class="ml-auto" builders={[builder]}>
					Columns <IconChevronDown class="ml-2 h-4 w-4" />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				{#each flatColumns as col}
					{#if hideableCols.includes(col.id)}
						<DropdownMenu.CheckboxItem bind:checked={hideForId[col.id]}>
							{col.header}
						</DropdownMenu.CheckboxItem>
					{/if}
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
	<div class="rounded-md border">
		<Table.Root {...$tableAttrs}>
			<Table.Header>
				{#each $headerRows as headerRow}
					<Subscribe rowAttrs={headerRow.attrs()}>
						<Table.Row>
							{#each headerRow.cells as cell (cell.id)}
								<Subscribe
									attrs={cell.attrs()}
									let:attrs
									props={cell.props()}
									let:props
								>
									<Table.Head
										{...attrs}
										class={cn("[&:has([role=checkbox])]:pl-3")}
									>
										{#if cell.id
											.toLowerCase()
											.includes("price") || cell.id === "views"}
											<div class="text-right">
												<Render of={cell.render()} />
											</div>
										{:else if cell.id === "name"}
											<Button variant="ghost" on:click={props.sort.toggle}>
												<Render of={cell.render()} />
												<IconCaretSort
													class={cn(
														$sortKeys[0]?.id === cell.id && "text-foreground",
														"ml-2 h-4 w-4"
													)}
												/>
											</Button>
										{:else}
											<Render of={cell.render()} />
										{/if}
									</Table.Head>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Header>
			<Table.Body {...$tableBodyAttrs}>
				{#each $pageRows as row (row.id)}
					<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
						<Table.Row
							{...rowAttrs}
							data-state={$selectedDataIds[row.id] && "selected"}
						>
							{#each row.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs>
									<Table.Cell class="[&:has([role=checkbox])]:pl-3" {...attrs}>
										{#if cell.id
											.toLowerCase()
											.includes("price") || cell.id === "views"}
											<div class="text-right font-medium">
												<Render of={cell.render()} />
											</div>
										{:else}
											<Render of={cell.render()} />
										{/if}
									</Table.Cell>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<div class="flex items-center justify-end space-x-2 py-4">
		<div class="flex-1 text-sm text-muted-foreground">
			{Object.keys($selectedDataIds).length} of {$rows.length} row(s) selected.
		</div>
		<Button
			variant="outline"
			size="sm"
			on:click={() => ($pageIndex = $pageIndex - 1)}
			disabled={!$hasPreviousPage}>Previous</Button
		>
		<Button
			variant="outline"
			size="sm"
			disabled={!$hasNextPage}
			on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button
		>
	</div>
</div>
