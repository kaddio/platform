<script lang="ts">	
	import Price from '../components/price.svelte';
	import Header from '../components/header.svelte';
	import QuoteCarousel from '../components/quoteCarousel.svelte';
	import Quote from '../components/quote.svelte';
	import Footer from '../components/footer.svelte';
	import ModulesSv from './modulesSv.svelte';
	import QuotesSv from './quotesSv.svelte';
	import CreateAccountSv from './createAccountSv.svelte';
	import PricesSv from './pricesSv.svelte';
	import ReferencesSv from './referencesSv.svelte';
	import { setContext } from 'svelte';
	
	setContext('lang', 'sv');

</script>

<svelte:head>
	<title>Kaddio - framtidens journalsystem</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Header></Header>
<section id="features">
	<ModulesSv></ModulesSv>
</section>
<QuotesSv></QuotesSv>
<PricesSv></PricesSv>
<ReferencesSv></ReferencesSv>
<CreateAccountSv></CreateAccountSv>
<Footer></Footer>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
