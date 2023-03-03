<script lang="ts">
	import HeaderWhite from '../../components/header-white.svelte';
    import Footer from '../../components/footer.svelte';
	import ModulesSv from '../modulesSv.svelte';
	// import './styles.css';
	// import './justify.css';
	// import "../css/_sass/main.scss"
</script>

<HeaderWhite></HeaderWhite>
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


<Footer></Footer>

<style>

</style>
