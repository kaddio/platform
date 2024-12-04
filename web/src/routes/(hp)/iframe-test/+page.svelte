<script lang="ts">	
	import { setContext } from 'svelte';
	import SimpleCentered from '$components/simpleCentered.svelte';
	import SimpleCenteredPiece from '$components/simpleCenteredPiece.svelte';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';

	setContext('lang', 'en');

</script>

<svelte:head>
    <meta name="robots" content="noindex" />
</svelte:head>

<Nav />

<SimpleCentered>
	<span slot="title">Test of iframe</span>
	<span slot="sub">...</span>

	<iframe src="http://localhost:3000/iframe/booking" style="border: 0" width="100%" height="100%" frameborder="0" scrolling="yes"></iframe>
</SimpleCentered>

<Footer />