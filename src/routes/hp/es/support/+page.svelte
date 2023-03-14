<script lang="ts">	
	import { setContext } from 'svelte';
	import Footer from '../footerEs.svelte';
	import HeaderWhite from '../../components/header-white.svelte';
	import Nav from '../navEs.svelte';
	
	setContext('lang', 'sv');
</script>

<svelte:head>
	<title>Kaddio - framtidens journalsystem</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<HeaderWhite>
	<Nav color="black" />
</HeaderWhite>

<div class="jumbotron">
	<h1>Contactar</h1>
	<h3 class="punch">Vi finns här för att hjälpa till</h3>
</div>

<section>
	<article>
		<h2>Bli kund</h2>
	</article>
</section>

<Footer />

<style>
	h1, h3{
		text-align: center;
	}
</style>
