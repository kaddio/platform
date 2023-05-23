<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Tareas</title>
	<meta name="description" content="Crea tu propia - lista de tareas pendientes -. Delega tareas a otros y obtén una visión general de las acciones que deben llevarse a cabo" />
</svelte:head>

<ModuleSection>
	<span slot="title">Tareas</span>
	<span slot="sub">Crea tu propia - lista de tareas pendientes -. Delega tareas a otros y obtén una visión general de las acciones que deben llevarse a cabo</span>

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
		<span slot="q">Crear tareas</span>
		<span slot="a">
			Crea una lista de verificación de las cosas que hacer.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Plazo</span>
		<span slot="a">
			Establece una fecha límite para completar la tarea.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Delegación de tareas</span>
		<span slot="a">
			Delega tareas a colegas o clientes
		</span>
	</Qa>

	<Qa>
		<span slot="q">Recordatorios</span>
		<span slot="a">
			Kaddio notifica cuando se delega una tarea o si una tarea está cerca de la fecha límite
		</span>
	</Qa>

	<Qa>
		<span slot="q">Prioridad</span>
		<span slot="a">
			Marca qué tareas se priorizan.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Historial</span>
		<span slot="a">
			Revisa qué tareas se han completado
		</span>
	</Qa>

</FaqSection>
