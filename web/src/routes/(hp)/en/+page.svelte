<script lang="ts">	
	import { setContext } from 'svelte';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';
	import SecuritySectionEn from '$components/securitySectionEn.svelte';
	import ModulesEn from '$components/modulesEn.svelte';
	import PricesEn from '$components/pricesEn.svelte';
    import Hero from '$lib/components/hero.svelte';
    import QuotesEn from '$components/quotesEn.svelte';
	import StatsSectionEn from '$components/statsSectionEn.svelte';
	import ContactDanielEn from '$components/contactDanielEn.svelte';

	setContext('lang', 'en');
</script>

<svelte:head>
	<title>Kaddio - all-in-one platform for health professionals</title>
	<meta name="description" content="Kaddio is an all-in-one platform for health professionals" />
</svelte:head>

<div class="bg-white">
  <Nav darkHeader={true} />

  <Hero manAlt="Bakgrundsbild för Kaddio, en person som sitter med en kaffekopp i handen" demoLink="https://demo.kaddio.com/login-demo">
    <span slot="title">Kaddio is all you need</span>
    <span slot="subtitle">Web based all-in-one platform for health professionals.</span>

  </Hero>

</div>



<ModulesEn />
<!-- <CrmSv /> -->
<QuotesEn />
<PricesEn />
<SecuritySectionEn />
<StatsSectionEn />
<ContactDanielEn />
<Footer />
