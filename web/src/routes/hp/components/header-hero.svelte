<script lang="ts">
    import NavSv from "../sv/navSv.svelte";
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

<style>
    header{
        background-image: url(/img/man.jpg);
    }

</style>
