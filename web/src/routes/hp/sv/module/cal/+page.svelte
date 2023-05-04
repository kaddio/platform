<script>
	import Qa from "../../../components/qa.svelte";
	import ModuleFeature from "../../../components/moduleFeature.svelte";
	import ModuleSection from "../../../components/moduleSection.svelte";
	import FaqSection from "../../../../hp/components/faqSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Kalender och Tidsbokning</title>
	<meta name="description" content="Komplett bokningssystem och onlinebetalning som gör allt du förväntar dig" />
</svelte:head>

<ModuleSection>
	<span slot="title">Kaddio Kalender och Tidsbokning</span>
	<span slot="sub">Komplett bokningssystem och onlinebetalning som gör allt du förväntar dig</span>

	<ModuleFeature>
		<span slot="title">Automatisera</span>
		<span slot="body">
			Automatisera ditt schema och låt dina kunder boka och betala själva eller ta kontroll över varje minut. Bokningstyper kan konfigureras i detalj och detta hjälper dig sen i bokningen så att det blir lätt där. Automatiskta påminnelser
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Samarbeta</span>
		<span slot="body">
			Använd kalendern för att boka möten. I Kaddio är kalendern även din publika bokning.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Effektivisera</span>
		<span slot="body">
			Har du återkommande händelser i kalendern? Skapa mallar och spara tid
		</span>
	</ModuleFeature>
</ModuleSection>
  

<FaqSection>
	<span slot="title">Funktioner</span>

	<Qa>
		<span slot="q">Personalliggare</span>
		<span slot="a">
			Kaddio kan användas som digital personalliggare genom Arbetstid i Kalendern, med hjälp av Loggning uppfylls även Skatteverkets regler kring kontroll.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Loggning</span>
		<span slot="a">
			Läsning och redigering loggas. Loggen visar vad som gjorts med en viss klients journal och av vem, när och från vilken ip-adress.
		</span>
	</Qa>

	<Qa>
		<span slot="q">API</span>
		<span slot="a">
			Läsning och redigering loggas. Loggen visar vad som gjorts med en viss klients journal och av vem, när och från vilken ip-adress.
		</span>
	</Qa>

</FaqSection>