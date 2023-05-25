<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Kommunikation</title>
	<meta name="description" content="Chat och video för upp till 500 samtidiga deltagare" />
</svelte:head>

<ModuleSection>
	<span slot="title">Kaddio Kommunikation</span>
	<span slot="sub">Chat och video för upp till 500 samtidiga deltagare</span>
<!-- 
	<ModuleFeature>
		<span slot="title">Automatisera</span>
		<span slot="body">
			Automatisera ditt schema och låt dina kunder boka och betala själva eller ta kontroll över varje minut. Bokningstyper kan konfigureras i detalj och detta hjälper dig sen i bokningen så att det blir lätt där. Automatiskta påminnelser
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Interagera</span>
		<span slot="body">
			Det är enkelt att byta till video..
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Och du kan växa med Kaddio</span>
		<span slot="body">
			Kaddio Video har stöd för minst 500 deltagare samtidigt.
		</span>
	</ModuleFeature> -->
</ModuleSection>
  

<FaqSection>
	<span slot="title">Detaljer</span>

	<Qa>
		<span slot="q">Skärmdelning</span>
		<span slot="a">
			Dela vad du ser
		</span>
	</Qa>

	<Qa>
		<span slot="q">Spela in</span>
		<span slot="a">
			Videosamtal är inspelningsbara, videon laddas upp i konversationen och är synlig för behandlare i 24 timmar.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Emojis och reaktioner</span>
		<span slot="a">
			Kanske inte det mest meningsfulla, men alla andra stora videoleverantörer har ju det så atte..
		</span>
	</Qa>



</FaqSection>