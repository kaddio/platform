<script lang="ts">	
	import { setContext } from 'svelte';
	import Footer from '../footerSv.svelte';
	import HeaderWhite from '../../components/header-white.svelte';
	
	setContext('lang', 'sv');

</script>

<svelte:head>
	<title>Kaddio - framtidens journalsystem</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<HeaderWhite color="black"></HeaderWhite>

<h1 class="jumbotron">Kontakta oss</h1>

<Footer />

<style>
	h1{
		text-align: center;
	}
</style>
