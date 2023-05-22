<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Dokument</title>
	<meta name="description" content="Samarbeta i molnet med dina kollegor. Begränsa åtkomst i filhanteringssystemet med avancerad behörighetsstyrning. Versionshantering och backup kommer automatiskt." />
</svelte:head>

<ModuleSection>
	<span slot="title">Kaddio Documentos</span>
	<span slot="sub">Colabora en la nube con tus colegas. Limita el acceso en el sistema de gestión de archivos con un avanzado control de permisos. El control de versiones y las copias de seguridad se realizan automáticamente.</span>

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
		<span slot="q">Crea un documento de texto</span>
		<span slot="a">
			Crea y escribe documentos de texto directamente en Kaddio.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Gestión de versiones</span>
		<span slot="a">
			Guardar versiones de documentos para tener un seguimiento de los cambios.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Cargar archivos</span>
		<span slot="a">
			Sube todo tipo de archivos a Kaddio.
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
