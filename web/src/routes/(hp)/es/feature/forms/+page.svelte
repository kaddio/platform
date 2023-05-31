<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Formularios</title>
	<meta name="description" content="En Kaddio, puedes usar formularios estándar y crear los tuyos propios. Envía formularios clínicos automáticamente al hacer la reserva y reciba las respuestas directamente en el." />
</svelte:head>

<ModuleSection>
	<span slot="title">Formularios</span>
	<span slot="sub">En Kaddio, puedes usar formularios estándar y crear los tuyos propios. Envía formularios clínicos automáticamente al hacer la reserva y reciba las respuestas directamente en el.</span>

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
			Descarga, edita y envía los formularios estándar más comunes directamente desde Kaddio.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Crea formularios</span>
		<span slot="a">
			Diseña formularios a tu manera. Usa diferentes tipos de respuesta como, texto libre, escala, valor numérico y opción múltiple. Tu eliges cómo Kaddio debe calcular el resultado, por ejemplo, como una suma o un valor promedio. Tu estableces los límites para obtener una vista rápida del resultado.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Envía formularios clínicos</span>
		<span slot="a">
			Envía un formulario clínico de forma automática con la reserva en línea o, de preferirlo, de forma manual. Las respuestas se guardan en la historia clínica.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Envía formulario de presupuesto</span>
		<span slot="a">
			Envía formularios de valoración y declaraciones de salud por e-mail y SMS.
		</span>
	</Qa>


</FaqSection>
