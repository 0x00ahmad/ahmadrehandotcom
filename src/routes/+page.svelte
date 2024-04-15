<script>
    import Button from "$lib/components/ui/button/button.svelte";
    import { Input } from "$lib/components/ui/input";
</script>

<main class="grid w-screen place-items-center">
    <h1>Every <span>Business</span> Starts with a Domain.</h1>
    <div class="flex w-full gap-8">
        <Input placeholder="Search for a domain" />
        <Button>Search</Button>
    </div>
</main>
