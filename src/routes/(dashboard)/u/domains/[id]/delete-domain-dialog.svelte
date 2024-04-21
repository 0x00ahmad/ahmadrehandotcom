<script lang="ts">
    import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import Input from "$lib/components/ui/input/input.svelte";

    export let domainId: number;
    export let domainName: string;

    let typedName = "";
    let deleting = false;
</script>

<Dialog.Root>
    <Dialog.Trigger class={buttonVariants({ variant: "destructive" })}>
        Delete Domain
    </Dialog.Trigger>
    <Dialog.Content class="sm:max-w-[425px]">
        <Dialog.Header>
            <Dialog.Title>Are you sure?</Dialog.Title>
            <Dialog.Description>
                Deleting a domain is irreversible. This action cannot be undone.
            </Dialog.Description>
        </Dialog.Header>

        <Input type="text" bind:value={typedName} />
        <small>Type the '{domainName}' in the input above to delete</small>

        <Dialog.Footer>
            <Dialog.Close>
                <Button type={"submit"} variant={"secondary"}>Cancel</Button>
            </Dialog.Close>
            <form action={`/u/domains/${domainId}/delete`} method="post">
                <Button
                    disabled={typedName !== domainName || deleting}
                    variant={"destructive"}
                    type="submit"
                >
                    {#if deleting}
                        Deleting...
                    {:else}
                        Confirm & Delete
                    {/if}
                </Button>
            </form>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>
