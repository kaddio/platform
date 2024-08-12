<script lang="ts">	
	import { setContext } from 'svelte';
	import FaqSection from '$components/faqSection.svelte';
	import Qa from '$components/qa.svelte';
	import SimpleCentered from '$components/simpleCentered.svelte';
	import SimpleCenteredPiece from '$components/simpleCenteredPiece.svelte';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';
    import ContactDanielEn from '../contactDanielEn.svelte';

	setContext('lang', 'en');

</script>

<svelte:head>
	<title>Curious about Kaddio?</title>
	<meta name="description" content="Are you curious about Kaddio?" />
</svelte:head>

<Nav />

<ContactDanielEn />

<Footer />