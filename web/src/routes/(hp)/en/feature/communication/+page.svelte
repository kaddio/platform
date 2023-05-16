<script>
	import Qa from "../../../components/qa.svelte";
	import ModuleFeature from "../../../components/moduleFeature.svelte";
	import ModuleSection from "../../../components/moduleSection.svelte";
	import FaqSection from "../../../components/faqSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Communication</title>
	<meta name="description" content="Communicate securely and encrypted via chat or video. With two or 500 participants." />
</svelte:head>

<ModuleSection>
	<span slot="title">Kaddio Communication</span>
	<span slot="sub">Communicate securely and encrypted via chat or video. With two or 500 participants.</span>

	<!-- <ModuleFeature>
		<span slot="title">Secure</span>
		<span slot="body">
			Automatisera ditt schema och låt dina kunder boka och betala själva eller ta kontroll över varje minut. Bokningstyper kan konfigureras i detalj och detta hjälper dig sen i bokningen så att det blir lätt där. Automatiskta påminnelser
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Simple</span>
		<span slot="body">
			Det är enkelt att byta till video..
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Integrated</span>
		<span slot="body">
			Kaddio Video har stöd för minst 500 deltagare samtidigt.
		</span>
	</ModuleFeature> -->
</ModuleSection>
  

<FaqSection>
	<span slot="title">Details</span>

	<Qa>
		<span slot="q">Screen sharing</span>
		<span slot="a">
			Share what you see
		</span>
	</Qa>

	<Qa>
		<span slot="q">Record</span>
		<span slot="a">
			Video calls are recordable, the video is uploaded in the conversation and is visible to handlers for 24 hours.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Emojis and reactions</span>
		<span slot="a">
			Maybe not the most meaningful, but all the other major video providers have it right?
		</span>
	</Qa>


</FaqSection>