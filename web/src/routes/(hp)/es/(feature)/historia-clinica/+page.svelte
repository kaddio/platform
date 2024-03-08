<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
    import { hrefLangAlternates } from "$lib/stores";

</script>

<svelte:head>
	{@html hrefLangAlternates('journalsystem', 'es')}

	<title>Kaddio - Historia clínica</title>
	<meta name="description" content="Kaddio es un software de gestión online adaptable a cualquier volumen de clínica. Desde los centros pequeños hasta las clínicas interdisciplinares de mayor tamaño, está diseñado para ser fácil de usar. Adapta tanto el contenido como la funcionalidad a tus necesidades." />
</svelte:head>

<ModuleSection>
	<span slot="title">Historia clínica</span>
	<span slot="sub">Kaddio es un software de gestión online adaptable a cualquier volumen de clínica. Desde los centros pequeños hasta las clínicas interdisciplinarias de mayor tamaño, está diseñado para ser fácil de usar. Adapta tanto el contenido como la funcionalidad a tus necesidades.</span>

	<!-- <ModuleFeature>
		<span slot="title">Användarvänligt.</span>
		<span slot="body">
			Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>
	</ModuleFeature> -->
<!-- 
	<ModuleFeature>
		<span slot="title">Flexibelt.</span>
		<span slot="body">
			Använd Kaddios egna mallar för anteckningar och rubriker eller skräddarsy allt efter verksamhetens behov.
Använd Kaddios egna mallar för anteckningar och rubriker eller skräddarsy allt efter verksamhetens behov. Skapa egna mallar för journalanteckningar utifrån dina behov och din verksamhet. Välj egna sökord/rubriker. Använd malltext, fraser, filuppladdning och mer</span>
	</ModuleFeature> -->

	<!-- <ModuleFeature>
		<span slot="title">Säkert.</span>
		<span slot="body">
			Behörighetsstyrning
			Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>
	</ModuleFeature> -->


	
</ModuleSection>
  

<FaqSection>
	<span slot="title">Funciones</span>

	<Qa>
		<span slot="q">Plantillas de notas</span>
		<span slot="a">
			Crea tus propias plantillas para que las historias clínicas se adapten a tu negocio. Elige tus propias palabras clave/títulos. Usa plantillas de texto, frases, carga de archivos y más.
		</span>
	</Qa>
	
	<Qa>
		<span slot="q">Formularios</span>
		<span slot="a">
			Crea tus propios formularios o utiliza formularios estándar de uso común directamente desde Kaddio. Envía formularios de valoración y declaraciones de salud correo electrónico y SMS. Los formularios se pueden enviar automáticamente en relación con la reserva o manualmente si es necesario. Las respuestas se guardan en la historia clínica.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Cartas y remisiones</span>
		<span slot="a">
			Crea cartas, remisiones y certificados. Envíalos por correo postal, a través del chat de Kaddio o como PDF.
		</span>
	</Qa>

	<Qa>
		<span slot="q">ICD-10</span>
		<span slot="a">
			Busca por código o texto libre y agrega diagnósticos a cada historia clínica.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Control en la seguridad de las historias clínicas</span>
		<span slot="a">
			Elige quiénes pueden leer el historial médico del paciente.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Gráficas del cuerpo humano</span>
		<span slot="a">
			Haz dibujos en las gráficas corporales para documentar, por ejemplo, dónde experimenta dolor el paciente.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Mantenimiento de registros</span>
		<span slot="a">
			Mantén un registro de las notas que esperan ser firmadas.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Exportación de historias clínicas</span>
		<span slot="a">
			Exporta partes individuales o una historia clínica completa a PDF.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Registro de eventos</span>
		<span slot="a">
			Se registran la lectura, escritura y edición de las historias clínicas. El registro muestra lo que se hizo con una historia clínica en particular y por quién, cuándo y desde qué dirección IP.
		</span>
	</Qa>


</FaqSection>