<script lang="ts">
    import ModulesSv from '$components/modulesSv.svelte';
    import QuotesSv from '$components/quotesSv.svelte';
    import PricesSv from '$components/pricesSv.svelte';
    import ReferencesSv from '$components/referencesSv.svelte';
    import { setContext } from 'svelte';
    import Footer from '$components/footer.svelte';
    import SecuritySectionSv from '$components/securitySectionSv.svelte';
    import Nav from '$components/nav.svelte';
    import ContactDanielSv from '$components/contactDanielSv.svelte';
    import Hero from '$lib/components/hero.svelte';

    setContext('lang', 'sv');
</script>

<svelte:head>
    <title>Journalsystem, onlinebokning, kommunikation, fakturering</title>
</svelte:head>

<div class="bg-white">
  <Nav darkHeader={true} />

  <Hero manAlt="Bakgrundsbild för Kaddio, en person som sitter med en kaffekopp i handen" demoLink="https://demo.kaddio.com/login-demo">
    <span slot="title">Kaddio är allt du behöver</span>
    <span slot="subtitle">Onlinebokning, journalsystem, chat, video och fakturering i samma system.</span>

  </Hero>

</div>

<ModulesSv />
<!-- <CrmSv /> -->
<QuotesSv />
<PricesSv />
<SecuritySectionSv />

<ReferencesSv />
<ContactDanielSv />
<Footer />
