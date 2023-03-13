<script lang="ts">	
	// import ModulesSv from './modulesSv.svelte';
	// import QuotesSv from './quotesSv.svelte';
	// import CreateAccountSv from './createAccountSv.svelte';
	// import PricesSv from './pricesSv.svelte';
	// import ReferencesSv from './referencesSv.svelte';
	import { setContext } from 'svelte';
	import Song from '../components/song.svelte';
	import Header from './headerEs.svelte';
	import Footer from './footerEs.svelte';
	
	setContext('lang', 'sv');

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
<PricesSv />
<ReferencesSv />
<CreateAccountSv /> -->
<Song />
<Footer />

<style>
</style>
