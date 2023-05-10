<script>
	import Qa from "../../../components/qa.svelte";
	import ModuleFeature from "../../../components/moduleFeature.svelte";
	import ModuleSection from "../../../components/moduleSection.svelte";
	import FaqSection from "../../../components/faqSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Rapporter</title>
	<meta name="description" content="Genom Kaddio kan du få ut rapporter och statistik över bokningar, fakturering och mer. Du kan också utforma och skicka enkäter där svaren anonymiseras." />
</svelte:head>

<ModuleSection>
	<span slot="title">Kaddio Rapporter</span>
	<span slot="sub">Genom Kaddio kan du få ut rapporter och statistik över bokningar, fakturering och mer. Du kan också utforma och skicka enkäter där svaren anonymiseras.</span>

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
	<span slot="title">Detaljer</span>

	<Qa>
		<span slot="q">Skapa rapporter</span>
		<span slot="a">
			Använd rapportverktyget för att skapa rapporter över bokningar, fakturering, enkätsvar och mer. Visualisera resultatet grafiskt och exportera data som .csv.
		</span>
	</Qa>

</FaqSection>
