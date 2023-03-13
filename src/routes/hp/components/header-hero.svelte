<script>
    import NavSv from "../sv/navSv.svelte";
    import HeroBox from "./heroBox.svelte";
	import HeroTitle from "./heroTitle.svelte";
</script>

<header class="hero-header top-section hidden-print">
    <div class="hero-header__content">
        <NavSv />

        <HeroTitle>
            <slot name="title" />
        </HeroTitle>

    </div>
</header>
<HeroBox>
    <slot name="box" />
</HeroBox>

<style>
    header{
        background-image: url(/img/man.jpg);
    }

</style>
