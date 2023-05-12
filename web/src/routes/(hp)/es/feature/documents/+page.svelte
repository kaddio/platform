<script>
	import Qa from "../../../components/qa.svelte";
	import ModuleFeature from "../../../components/moduleFeature.svelte";
	import ModuleSection from "../../../components/moduleSection.svelte";
	import FaqSection from "../../../components/faqSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Dokument</title>
	<meta name="description" content="Samarbeta i molnet med dina kollegor. Begränsa åtkomst i filhanteringssystemet med avancerad behörighetsstyrning. Versionshantering och backup kommer automatiskt." />
</svelte:head>

<ModuleSection>
	<span slot="title">Kaddio Dokument</span>
	<span slot="sub">Samarbeta i molnet med dina kollegor. Begränsa åtkomst i filhanteringssystemet med avancerad behörighetsstyrning. Versionshantering och backup kommer automatiskt.</span>

	<!-- <ModuleFeature>
		<span slot="title">Förbered</span>
		<span slot="body">
			...
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Mät</span>
		<span slot="body">
			...
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Återkoppla</span>
		<span slot="body">
			...
		</span>
	</ModuleFeature> -->
</ModuleSection>
  

<FaqSection>
	<span slot="title">Funciones</span>

	<Qa>
		<span slot="q">Skapa textdokument</span>
		<span slot="a">
			Skapa och skriv textdokument direkt i Kaddio.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Versionshantering</span>
		<span slot="a">
			Spara versioner av dokument för att få spårbarhet i ändringar
		</span>
	</Qa>

	<Qa>
		<span slot="q">Ladda upp filer</span>
		<span slot="a">
			Ladda upp alla typer av filer i Kaddio.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Mappar</span>
		<span slot="a">
			Sortera dina dokument och filer i mappar.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Behörighetsstyrning</span>
		<span slot="a">
			Bestäm vilka som har tillgång till vilka mappar med läs- och skrivrättighet.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Samarbeta med kollegor</span>
		<span slot="a">
			Tillåt flera personer att skriva och redigera i samma dokument.
		</span>
	</Qa>

</FaqSection>
