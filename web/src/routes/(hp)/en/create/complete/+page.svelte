<script lang="ts">	
	import { setContext } from 'svelte';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';
    import { _ } from '$lib/stores';
    import ThankYou from '$components/thankYou.svelte';

	setContext('lang', 'en');
	
</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

<Nav />

<ThankYou>
	<span slot="title">Thank you!</span>
	<span slot="p">
		Your account is created, check your mail to log in.
	</span>
</ThankYou>

<Footer />
