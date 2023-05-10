<script lang="ts">	
	import { setContext } from 'svelte';
	import FaqSection from '../../components/faqSection.svelte';
	import Qa from '../../components/qa.svelte';
	import SimpleCentered from '../../components/simpleCentered.svelte';
	import SimpleCenteredPiece from '../../components/simpleCenteredPiece.svelte';
	import FooterSv from '../footerSv.svelte';
	import HeaderSv from '../headerSv.svelte';
	import NavSv from '../navSv.svelte';
	
	setContext('lang', 'sv');

</script>

<svelte:head>
	<title>Kaddio - Support</title>
	<meta name="description" content="Kontakta Kaddio support" />
</svelte:head>

<NavSv />

<SimpleCentered>
	<span slot="title">Kontakta oss</span>
	<span slot="sub">Vi finns här för att hjälpa till</span>

	<SimpleCenteredPiece icon="sparkles">
		<span slot="title">Bli kund</span>
		<span slot="body">
			Du blir kund genom att <a href="/hp/sv/create" class="font-semibold text-oldpink">Skapa konto</a>. Behöver du hjälp kan du även boka in en tid så ringer vi upp dig.
		</span>
		<span slot="link">
			<a href="https://support.kaddio.com/booking" class="text-sm font-semibold leading-6 text-oldpink">Boka tid <span aria-hidden="true">&rarr;</span></a>
		</span>
	</SimpleCenteredPiece>

	<SimpleCenteredPiece icon="hands-holding-heart">
		<span slot="title">Hjälpcenter</span>
		<span slot="body">
			I Kaddios Hjälpcenter help.kaddio.com fyller vi kontinuerligt på med artiklar och svar på vanliga frågor.
		</span>
		<span slot="link">
			<a href="https://help.kaddio.com/help" class="text-sm font-semibold leading-6 text-oldpink">help.kaddio.com <span aria-hidden="true">&rarr;</span></a>
		</span>
	</SimpleCenteredPiece>	

	<SimpleCenteredPiece icon="envelope">
		<span slot="title">E-post</span>
		<span slot="body">
			Det går även bra att maila oss för frågor och support. Under vardagar 9-15 gör vi vårt bästa för att svara dig inom några timmar.
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
			Status <span class="inline-flex items-center rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800">Kommer snart</span>
		</span>
		<span slot="body">
			Undrar du hur det går för Kaddio just nu? Kolla vår status-sida för info kring drift och tillgänglighet.
		</span>
		<!-- <span slot="link">
			<a href="https://status.kaddio.com" class="text-sm font-semibold leading-6 text-oldpink">status.kaddio.com <span aria-hidden="true">&rarr;</span></a>
		</span> -->
	</SimpleCenteredPiece>		

</SimpleCentered>

<!--   
 <FaqSection>
	<span slot="title">Några vanliga frågor</span>
	
	<Qa>
		<span slot="q">Vilken typ av support ingår</span>
		<span slot="a">
			Jadu, den som det visste.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Vilken typ av support ingår</span>
		<span slot="a">
			Jadu, den som det visste.
		</span>
	</Qa>


 </FaqSection> 
   -->
  <FooterSv />