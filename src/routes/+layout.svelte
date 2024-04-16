<script>
    import "../app.pcss";

    import Footer from "$lib/components/footer.svelte";
    import Navbar from "$lib/components/navbar.svelte";
</script>

<Navbar />

<div id="top" class="h-24 bg-opacity-0"></div>

<slot />

<Footer />
