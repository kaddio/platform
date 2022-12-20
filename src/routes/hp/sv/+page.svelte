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
	
	

	

	const strings = [
		"",
		"För dig som stjälper andra"
	]

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

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
