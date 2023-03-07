<script>
    import Nav from "./nav.svelte";
    import HeroBox from "./heroBox.svelte";
	import HeroTitle from "./heroTitle.svelte";
</script>

<header class="top-section hidden-print">
    <Nav />

    <HeroTitle>
        <slot name="title" />
    </HeroTitle>

    <HeroBox>
        <slot name="box" />
    </HeroBox>
</header>

<style>
    header{
        background-image: url(/img/man.jpg);
    }

</style>
