<script lang="ts">	
	import { setContext } from 'svelte';
	import FaqSection from '$components/faqSection.svelte';
	import Qa from '$components/qa.svelte';
	import SimpleCentered from '$components/simpleCentered.svelte';
	import SimpleCenteredPiece from '$components/simpleCenteredPiece.svelte';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';
    import ContactDanielSv from '../contactDanielSv.svelte';
    import { hrefLangAlternates } from '$lib/stores';

	setContext('lang', 'sv');

</script>

<svelte:head>
	{@html hrefLangAlternates('sales', 'sv')}

	<title>Nyfiken på Kaddio</title>
	<meta name="description" content="Är du nyfiken på Kaddio?" />
</svelte:head>

<Nav />

<ContactDanielSv />

<Footer />