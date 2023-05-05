<script>
	import Qa from "../../../components/qa.svelte";
	import ModuleFeature from "../../../components/moduleFeature.svelte";
	import ModuleSection from "../../../components/moduleSection.svelte";
	import FaqSection from "../../../components/faqSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Uppgifter</title>
	<meta name="description" content="..." />
</svelte:head>

<ModuleSection>
	<span slot="title">Kaddio Uppgifter</span>
	<span slot="sub">...</span>

	<ModuleFeature>
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
	</ModuleFeature>
</ModuleSection>
  

<FaqSection>
	<span slot="title">Detaljer</span>

	<Qa>
		<span slot="q">Fråga</span>
		<span slot="a">
			Svar
		</span>
	</Qa>

</FaqSection>
