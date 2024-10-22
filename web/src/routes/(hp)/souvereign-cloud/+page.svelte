<script lang="ts">	
	import { setContext } from 'svelte';
	import SimpleCentered from '$components/simpleCentered.svelte';
	import SimpleCenteredPiece from '$components/simpleCenteredPiece.svelte';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';

	setContext('lang', 'en');

</script>

<svelte:head>
	<title>Kaddio - Souvereign Cloud</title>
	<meta name="description" content="responsible disclosure" />
</svelte:head>

<Nav />

<SimpleCentered>
	<span slot="title">Souvereign Cloud</span>
	<span slot="sub">Kaddio helps you meet the sometimes conflicting requirements within data sovereignty, operational sovereignty and technological sovereignty.</span>

	<SimpleCenteredPiece icon="hands-holding-heart">
		<span slot="title">Regional clouds</span>
		<span slot="body">
			We have clouds in several countries each operating on infrastructure owned within that country. Data is controlled by the respective country's regulations and laws. We also offer a Global Cloud.
		</span>
		<span slot="link">
			<a href="mailto:support@kaddio.com" class="text-sm font-semibold leading-6 text-oldpink">Contact us to find out more <span aria-hidden="true">&rarr;</span></a>
		</span>
	</SimpleCenteredPiece>	

</SimpleCentered>

<Footer />