<script lang="ts">	
	import { setContext } from 'svelte';
	import FaqSection from '$components/faqSection.svelte';
	import Qa from '$components/qa.svelte';
	import SimpleCentered from '$components/simpleCentered.svelte';
	import SimpleCenteredPiece from '$components/simpleCenteredPiece.svelte';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';
    import { _ } from '$lib/stores';
	
	setContext('lang', 'en');

</script>

<svelte:head>
	<title>Kaddio - Support</title>
	<meta name="description" content="Contact Kaddio Support" />
</svelte:head>

<Nav />

<SimpleCentered>
	<span slot="title">Support</span>
	<span slot="sub">We're here to help</span>

	<SimpleCenteredPiece icon="hands-holding-heart">
		<span slot="title">Help center</span>
		<span slot="body">
			In our Help center you can find anwers to all frequently asked questions and also in-depth guides.
		</span>
		<span slot="link">
			<a href="https://help.kaddio.com/help" class="text-sm font-semibold leading-6 text-oldpink">help.kaddio.com <span aria-hidden="true">&rarr;</span></a>
		</span>
	</SimpleCenteredPiece>	

	<SimpleCenteredPiece icon="envelope">
		<span slot="title">Email</span>
		<span slot="body">
			You can also drop us an email for questions and support. Weekdays 09.00 - 15.00 we do our very best to help you, usually within a few hours.
		</span>
		<span slot="link">
			<a href="mailto:support@kaddio.com" class="text-sm font-semibold leading-6 text-oldpink">support@kaddio.com <span aria-hidden="true">&rarr;</span></a>
		</span>
	</SimpleCenteredPiece>		

	<SimpleCenteredPiece icon="rss">
		<span slot="title">
			Changelog
		</span>
		<span slot="body">
			Ever wonder what came out in the latest release or just want to stay updated? Check our changelog.
		</span>
		<span slot="link">
			<a href="https://changelog.kaddio.com" class="text-sm font-semibold leading-6 text-oldpink">changelog.kaddio.com <span aria-hidden="true">&rarr;</span></a>
		</span>
	</SimpleCenteredPiece>


	<SimpleCenteredPiece icon="signal">
		<span slot="title">
			Status
		</span>
		<span slot="body">
			What is the status on our services? Check statuspage for health.
		</span>
		<span slot="link">
			<a href="https://kaddio.statuspage.io" target="_blank" rel="noreferrer" class="text-sm font-semibold leading-6 text-oldpink">kaddio.statuspage.io <span aria-hidden="true">&rarr;</span></a>
		</span>
	</SimpleCenteredPiece>		

	<SimpleCenteredPiece icon="sparkles">
		<span slot="title">Get started</span>
		<span slot="body">
			<a href="/en/create" class="font-semibold text-oldpink">Create an account</a> to get started. Need guidance after that, schedule a time with us.
		</span>
		<span slot="link">
			<a href="/en/sales" class="text-sm font-semibold leading-6 text-oldpink">{ $_('Kontakta sälj')} <span aria-hidden="true">&rarr;</span></a>
		</span>
	</SimpleCenteredPiece>


</SimpleCentered>

<Footer />