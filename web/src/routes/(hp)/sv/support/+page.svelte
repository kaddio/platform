<script lang="ts">	
	import { getContext, setContext } from 'svelte';
	import FaqSection from '$components/faqSection.svelte';
	import Qa from '$components/qa.svelte';
	import SimpleCentered from '$components/simpleCentered.svelte';
	import SimpleCenteredPiece from '$components/simpleCenteredPiece.svelte';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';
	const lang = getContext('lang');
  import { page } from '$app/stores';

	setContext('lang', 'sv');

</script>

<svelte:head>
	<title>Kaddio - Support</title>
	<meta name="description" content="Kontakta Kaddio support" />
</svelte:head>

<Nav />

<SimpleCentered>
	<span slot="title">Support</span>
	<span slot="sub">Vi finns här för att hjälpa till</span>

	<SimpleCenteredPiece icon="hands-holding-heart">
		<span slot="title">Hjälpcenter</span>
		<span slot="body">
			I Kaddios Hjälpcenter hittar du guider och svar på vanliga frågor.
		</span>
		<span slot="link">
			<a href="https://help.kaddio.com/help" target="_blank" rel="noreferrer" class="text-sm font-semibold leading-6 text-oldpink">help.kaddio.com <span aria-hidden="true">&rarr;</span></a>
		</span>
	</SimpleCenteredPiece>	

	<SimpleCenteredPiece icon="envelope">
		<span slot="title">Mailsupport</span>
		<span slot="body">
			Är du kund och har tekniska frågor om Kaddio? Under vardagar 9-15 gör vi vårt bästa för att svara dig inom några timmar.
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
			Undrar du vad som kom ut i senaste uppdateringen? Vi uppdaterar löpande vår changelog.
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
			{#await $page.data.streamed.status}
				...
				{:then value}
				{#if value}
					<span title="All systems operational">Alla våra system är tillgängliga och uppe <i class="fa fa-solid fa-signal-bars text-green-500"></i></span>
				{:else}
					För tillfället har vi driftsproblem <a href="https://kaddio.betteruptime.com" target="_blank" rel="noreferrer" class="text-sm font-semibold leading-6 text-oldpink">Läs mer <span aria-hidden="true">&rarr;</span></a>
				{/if}
			{/await}

			<br /><br />
			På vår status-sida hittar du även info om schemalagda uppdatering etc.

		</span>
		<span slot="link">
			<a href="https://kaddio.betteruptime.com" target="_blank" rel="noreferrer" class="text-sm font-semibold leading-6 text-oldpink">kaddio.betteruptime.com <span aria-hidden="true">&rarr;</span></a>
		</span>
	</SimpleCenteredPiece>		

	<SimpleCenteredPiece icon="sparkles">
		<span slot="title">Bli kund</span>
		<span slot="body">
			Du blir kund genom att <a href="/sv/create" class="font-semibold text-oldpink">Skapa konto</a>. Funderar du på om Kaddio kan passa dig? Kontakta vår säljavdelning så hjälper vi dig.
		</span>
		<span slot="link">
			<a href="/sv/sales" class="text-sm font-semibold leading-6 text-oldpink">Kontakta sälj <span aria-hidden="true">&rarr;</span></a>
		</span>
	</SimpleCenteredPiece>
	
</SimpleCentered>

<Footer />