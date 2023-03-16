<script lang="ts">	
	// import ModulesSv from './modulesSv.svelte';
	// import QuotesSv from './quotesSv.svelte';
	import CreateAccount from '../components/createAccount.svelte';
	// import PricesSv from './pricesSv.svelte';
	import { setContext } from 'svelte';
	import Header from './headerEs.svelte';
	import Footer from './footerEs.svelte';
	
	setContext('lang', 'es');

</script>

<svelte:head>
	<title>Kaddio - framtidens journalsystem</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Header />
<!-- <section id="features">
	<ModulesSv />
</section>
<QuotesSv />
<PricesSv />  -->

<CreateAccount />
<Footer />

<style>
</style>
