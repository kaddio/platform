<script>
    import Nav from "./nav.svelte";
    import Hero from "./hero.svelte";
</script>

<header class="top-section hidden-print">
    <Nav></Nav>

    <Hero>
        <slot></slot>
    </Hero>
</header>

<style>
    header{
        background-image: url(/img/man.jpg);
    }

</style>
