<script lang="ts">	
	import { setContext } from 'svelte';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';
    import { _ } from '$lib/stores';
    import ThankYou from '$components/thankYou.svelte';

	setContext('lang', 'sv');
	
</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

<Nav />

<ThankYou>
	<span slot="title">Tack!</span>
	<span slot="p">Kontot är skapat, kolla din mail för att logga in</span>
</ThankYou>

<Footer />
