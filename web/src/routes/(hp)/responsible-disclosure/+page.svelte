<script lang="ts">	
	import { setContext } from 'svelte';
	import SimpleCentered from '$components/simpleCentered.svelte';
	import SimpleCenteredPiece from '$components/simpleCenteredPiece.svelte';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';

	setContext('lang', 'en');

</script>

<svelte:head>
	<title>Kaddio - Responsible Disclosure</title>
	<meta name="description" content="responsible disclosure" />
</svelte:head>

<Nav />

<SimpleCentered>
	<span slot="title">Responsible Disclosure</span>
	<span slot="sub">If you submit a security or privacy vulnerability, the report may be eligible for a reward.</span>



	<SimpleCenteredPiece icon="hands-holding-heart">
		<span slot="title">Submit</span>
		<span slot="body">
			If you believe you have discovered a security vulnerability that affects Kaddio software or services, please report it directly to us.
		</span>
		<span slot="link">
			<a href="mailto:support@kaddio.com" class="text-sm font-semibold leading-6 text-oldpink">support@kaddio.com <span aria-hidden="true">&rarr;</span></a>
		</span>
	</SimpleCenteredPiece>	

</SimpleCentered>

<Footer />