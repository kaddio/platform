<script>
	import Qa from "../../../components/qa.svelte";
	import ModuleFeature from "../../../components/moduleFeature.svelte";
	import ModuleSection from "../../../components/moduleSection.svelte";
	import FaqSection from "../../../../hp/components/faqSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Kalender och Tidsbokning</title>
	<meta name="description" content="Kaddio Kalender och Tidsbokning" />
</svelte:head>

<ModuleSection>
	<span slot="title">Kaddio Kalender och Tidsbokning</span>
	<span slot="sub">Kaddios Dokumentation / Journal har allt du behöver för att dokumentera verksamheten och journalföra klienter. Ett komplett journalsystem för vård.</span>

	<ModuleFeature>
		<span slot="title">Användarvänligt.</span>
		<span slot="body">
			Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Flexibelt.</span>
		<span slot="body">
			Skapa egna mallar för journalanteckningar utifrån dina behov och din verksamhet. Välj egna sökord/rubriker. Använd malltext, fraser, filuppladdning och mer</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Säkert.</span>
		<span slot="body">
			Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Behörighetsstyrning.</span>
		<span slot="body">
			Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">API.</span>
		<span slot="body">
			Automatisera flöden med Kaddio GraphQL API. Kaddio Journal finns åtkomligt via API.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Backup.</span>
		<span slot="body">
			Kaddio tar kontinuerlig backup av allting i Kaddio, flera gånger per dygn. Säkerhetskopior lagras krypterat på geografiskt skiljda platser.
		</span>
	</ModuleFeature>
	
</ModuleSection>
  

<FaqSection>
	<span slot="title">Funktioner</span>

	<Qa>
		<span slot="q">Anteckningsmallar</span>
		<span slot="a">
			Skapa dina egna mallar för journalanteckningar så de passar din verksamhet. Välj din egna sökord/rubriker. Använd malltext, fraser, filuppladdning och mer.
		</span>
	</Qa>

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