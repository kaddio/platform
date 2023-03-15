<script lang="ts">
	import HeaderWhite from '../../components/header-white.svelte';
	import ModulesSv from '../modulesSv.svelte';
	import Footer from '../footerSv.svelte';
	import Nav from '../navSv.svelte';
</script>

<HeaderWhite>
	<Nav color="black" />
</HeaderWhite>

<slot />

<section class="container-fluid text-center">
    <h3 class="more-features">Fler funktioner i Kaddio</h3>
</section>

<hr>

<section id="features">
	<ModulesSv></ModulesSv>
</section>

<Footer />
