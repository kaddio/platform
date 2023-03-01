

<script lang="ts">
	import Header from '../../components/header.svelte';
    import Footer from '../../components/footer.svelte';
	// import './styles.css';
	// import './justify.css';
	// import "../css/_sass/main.scss"

    export let title: string;
</script>

<Header></Header>
<div class="app">
	<main>
		<slot />
	</main>
</div>
<Footer></Footer>

<style>

</style>
