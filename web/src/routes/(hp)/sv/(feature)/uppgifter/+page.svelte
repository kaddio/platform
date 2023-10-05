<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
</script>

<svelte:head>
	<title>Kaddio - Uppgifter</title>
	<meta name="description" content="Gör din egen att-göra-lista eller delegera till någon annan." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/tasks-se.png">
	<span slot="h1">Uppgifter</span>
	<span slot="title">Kaddio Uppgifter</span>
	<span slot="sub">Gör din egen att-göra-lista eller delegera till någon annan.</span>

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
</ModuleSectionWithImage>
  

<FaqSection>
	<span slot="title">Detaljer</span>

	<Qa>
		<span slot="q">Skapa uppgifter</span>
		<span slot="a">
			Skapa en checklista för saker som ska göras.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Deadline</span>
		<span slot="a">
			Sätt en sista dag och tid som uppgiften ska vara gjord.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Delegering</span>
		<span slot="a">
			Delegera uppgifter till kollegor
		</span>
	</Qa>

	<Qa>
		<span slot="q">Påminnelse</span>
		<span slot="a">
			Kaddio notifierar när du får en uppgift delegerad till dig eller om din uppgift är nära deadline.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Prioritet</span>
		<span slot="a">
			Markera vilka uppgifter som är prioriterade.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Historik</span>
		<span slot="a">
			Se uppgifter som är avklarade.
		</span>
	</Qa>

</FaqSection>
