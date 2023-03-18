<script lang="ts">	
	import Header from './headerSv.svelte';
	import ModulesSv from './modulesSv.svelte';
	import QuotesSv from './quotesSv.svelte';
	import PricesSv from './pricesSv.svelte';
	import ReferencesSv from './referencesSv.svelte';
	import { setContext } from 'svelte';
	import Footer from './footerSv.svelte';
	
	setContext('lang', 'sv');

</script>

<svelte:head>
	<title>Kaddio - framtidens journalsystem</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Header />
<ModulesSv />
<QuotesSv />
<PricesSv />
<ReferencesSv />
<Footer />
