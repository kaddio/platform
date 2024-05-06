<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Informes</title>
	<meta name="description" content="Få koll på verksamheten med Kaddios statistikverktyg. Visualisera data i Kaddio eller exportera för egen analys." />
</svelte:head>

<ModuleSection>
	<span slot="title">Kaddio Informes</span>
	<span slot="sub">Mantén el control con las herramientas de estadísticas de Kaddio. Visualiza los datos en Kaddio o exporta para realizar tu propio análisis.</span>

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
		<span slot="q">Creación de informes</span>
		<span slot="a">
			Utiliza la herramienta de informes para crear informes sobre reservas, facturación, respuestas de encuestas y más. Visualiza los resultados de forma gráfica y exporta los datos como archivos .csv.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Creación de encuestas</span>
		<span slot="a">
			Diseña encuestas a tu gusto. Utiliza diferentes tipos de respuestas, como texto libre, escala, valor numérico o selección múltiple. Elige cómo Kaddio calculará los resultados, ya sea mediante suma o promedio. Establece límites y etiquetas para obtener una visión general rápida de los resultados.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Envío</span>
		<span slot="a">
			Envía el enlace de la encuesta a través de mensaje de texto (SMS) o correo electrónico.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Envío de encuestas basadas en las reservas</span>
		<span slot="a">
			Envía la encuesta a los clientes que hayan realizado una reserva dentro de un determinado intervalo de tiempo.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Envía las encuestas basadas en grupos específicos</span>
		<span slot="a">
			Envía la encuesta a los clientes o terapeutas basándote en el grupo al que pertenecen.
		</span>
	</Qa>
	<Qa>
		<span slot="q">Respuestas anónimas para las encuestas</span>
		<span slot="a">
			Todas las respuestas recopiladas a través de las encuestas son anónimas y no se pueden vincular a ningún cliente o terapeuta específico.
		</span>
	</Qa>

</FaqSection>
