<script lang="ts">	
	import { setContext } from 'svelte';
	import FaqSection from '../../components/faqSection.svelte';
	import Qa from '../../components/qa.svelte';
	import SimpleCentered from '../../components/simpleCentered.svelte';
	import SimpleCenteredPiece from '../../components/simpleCenteredPiece.svelte';
	import Footer from '../../components/footer.svelte';
	import Nav from '../../components/nav.svelte';
	
	setContext('lang', 'en');

</script>

<svelte:head>
	<title>Kaddio - Support</title>
	<meta name="description" content="Contact Kaddio Support" />
</svelte:head>

<Nav />

<SimpleCentered>
	<span slot="title">Contact us</span>
	<span slot="sub">We're here to help</span>

	<SimpleCenteredPiece icon="sparkles">
		<span slot="title">Get started</span>
		<span slot="body">
			You get started by <a href="/en/create" class="font-semibold text-oldpink">creating an account</a>. Need any guidance after that, schedule a time with us and we'll call you.
		</span>
		<span slot="link">
			<a href="https://support.kaddio.com/booking" class="text-sm font-semibold leading-6 text-oldpink">Schedule a 1-1 with Kaddio <span aria-hidden="true">&rarr;</span></a>
		</span>
	</SimpleCenteredPiece>

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
			Status <span class="inline-flex items-center rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800">Coming soon</span>
		</span>
		<span slot="body">
			What is the status of our underlaying services? Check our statuspage for availability.
		</span>
		<!-- <span slot="link">
			<a href="https://status.kaddio.com" class="text-sm font-semibold leading-6 text-oldpink">status.kaddio.com <span aria-hidden="true">&rarr;</span></a>
		</span> -->
	</SimpleCenteredPiece>		

</SimpleCentered>

<Footer />