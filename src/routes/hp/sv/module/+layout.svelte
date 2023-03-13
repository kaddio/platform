<script lang="ts">
	import HeaderWhite from '../../components/header-white.svelte';
	import ModulesSv from '../modulesSv.svelte';
	import FooterSv from '../footerSv.svelte';
</script>

<HeaderWhite color="black"></HeaderWhite>
<div class="app">
	<main>
		<slot />
	</main>
</div>

<section class="container-fluid text-center">
    <h3 class="more-features">Fler funktioner i Kaddio</h3>
</section>

<hr>

<section id="features">
	<ModulesSv></ModulesSv>
</section>


<FooterSv />
<style>

</style>
