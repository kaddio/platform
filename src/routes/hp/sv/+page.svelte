<script lang="ts">	
	import Header from './headerSv.svelte';
	import ModulesSv from './modulesSv.svelte';
	import QuotesSv from './quotesSv.svelte';
	import CreateAccount from '../components/createAccount.svelte';
	import PricesSv from './pricesSv.svelte';
	import ReferencesSv from './referencesSv.svelte';
	import { setContext } from 'svelte';
	import Footer from './footerSv.svelte';
	import GotoOrg from './gotoOrgSv.svelte';
	
	setContext('lang', 'sv');

</script>

<svelte:head>
	<title>Kaddio - framtidens journalsystem</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Header />
<section id="features">
	<ModulesSv />
</section>
<QuotesSv />
<PricesSv />
<CreateAccount />
<GotoOrg />
<ReferencesSv />
<Footer />


<h1 class="text-3xl font-bold underline">
	Hello world!
  </h1>
  

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
