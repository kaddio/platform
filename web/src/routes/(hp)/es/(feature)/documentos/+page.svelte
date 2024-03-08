<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
    import { hrefLangAlternates } from "$lib/stores";

</script>

<svelte:head>
	{@html hrefLangAlternates('dokument', 'es')}

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
		<span slot="q">Creación de un documento de texto</span>
		<span slot="a">
			Crea y escribe documentos de texto directamente en Kaddio.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Gestión de versiones</span>
		<span slot="a">
			Guarda versiones de documentos para tener un seguimiento de los cambios.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Carga de archivos</span>
		<span slot="a">
			Sube todo tipo de archivos a Kaddio.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Carpetas</span>
		<span slot="a">
			Organiza tus documentos y archivos en carpetas.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Gestión de permisos</span>
		<span slot="a">
			Determina quiénes tienen acceso a qué carpetas con permisos de lectura y escritura.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Colaboración entre colegas.</span>
		<span slot="a">
			Permite que varias personas escriban y editen el mismo documento.
		</span>
	</Qa>

</FaqSection>
