<script lang="ts">	
	import { setContext } from 'svelte';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';
	import ModulesEs from '$components/modulesEs.svelte';
	import PricesEs from '$components/pricesEs.svelte';
	import SecuritySectionEs from '$components/securitySectionEs.svelte';
	import ReferencesEs from '$components/referencesEs.svelte';
    import Hero from '$lib/components/hero.svelte';

	setContext('lang', 'es');
</script>

<svelte:head>
	<title>Kaddio</title>
	<meta name="description" content="Kaddio - Sistema todo en uno basado en la web para usted que ayuda a otros" />
</svelte:head>


<div class="bg-white">
  <Nav darkHeader={true} />

  <Hero manAlt="Bakgrundsbild för Kaddio, en person som sitter med en kaffekopp i handen" demoLink="https://demo-es.kaddio.com/login-demo">
    <span slot="title">Kaddio es todo lo que necesitas</span>
    <span slot="subtitle">Un sistema integral basado en la web diseñado para ti, que ayudas a otros.</span>

  </Hero>

</div>


<ModulesEs />

<!-- <CrmSv /> -->
<!-- <QuotesSv /> -->
<PricesEs />
<SecuritySectionEs />

<ReferencesEs />
<Footer />
