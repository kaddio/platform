<script lang="ts">
	import HeaderHero from '../../components/header-hero.svelte';
    import Footer from '../../components/footer.svelte';
	// import './styles.css';
	// import './justify.css';
	// import "../css/_sass/main.scss"
</script>

<HeaderHero></HeaderHero>
<div class="app">
	<main>
		<slot />
	</main>
</div>
<Footer></Footer>

<style>

</style>
