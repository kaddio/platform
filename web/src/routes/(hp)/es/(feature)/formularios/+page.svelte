<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
	import { hrefLangAlternates } from "$lib/stores";
</script>

<svelte:head>
	{@html hrefLangAlternates('formulär', 'es')}

	<title>Kaddio - Formularios</title>
	<meta name="description" content="En Kaddio, puedes usar formularios estándar y crear los tuyos propios. Envío de formularios clínicos automáticamente al hacer la reserva y recibe las respuestas directamente en ellos." />
</svelte:head>

<ModuleSection>
	<span slot="title">Formularios</span>
	<span slot="sub">En Kaddio, puedes usar formularios estándar y crear los tuyos propios. Envío de formularios clínicos automáticamente al hacer la reserva y recibe las respuestas directamente en ellos.</span>

	<!-- <ModuleFeature>
		<span slot="title">Förbered</span>
		<span slot="body">
			... Kaddio kan automatiskt skicka de formulär eller hälsodeklarationen du vill ha ifyllda innan besöket.
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
		<span slot="q">Formulario estándar</span>
		<span slot="a">
			Descarga, edita y envía los formularios estándares más comunes directamente desde Kaddio.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Crea formularios</span>
		<span slot="a">
			Diseña formularios según tus necesidades. Usa diferentes tipos de respuesta, como texto libre, escala, valor numérico u opción múltiple. Tú eliges cómo Kaddio debe calcular el resultado, por ejemplo, como una suma o un valor promedio. Tú estableces los límites para obtener una vista rápida del resultado.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Envío de formularios clínicos</span>
		<span slot="a">
			Envía un formulario clínico de forma automática con la reserva en línea o, de preferirlo, de forma manual. Las respuestas se guardan en la historia clínica.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Envío de formulario de presupuestos</span>
		<span slot="a">
			Envía formularios de valoración y declaraciones de salud correo electrónico y SMS.
		</span>
	</Qa>


</FaqSection>
