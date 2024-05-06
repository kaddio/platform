<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";

</script>

<svelte:head>

	<title>Kaddio - Rapporter</title>
	<meta name="description" content="Få koll på verksamheten med Kaddios statistikverktyg. Visualisera data i Kaddio eller exportera för egen analys." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/reports-se.png">
	<span slot="h1">Statistik</span>
	<span slot="title">Kaddio Rapporter</span>
	<span slot="sub">Få koll på verksamheten med Kaddios statistikverktyg. Visualisera data i Kaddio eller exportera för egen analys.</span>

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
		<span slot="q">Skapa rapporter</span>
		<span slot="a">
			Använd rapportverktyget för att skapa rapporter över bokningar, fakturering, enkätsvar och mer. Visualisera resultatet grafiskt och exportera data som .csv.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Skapa enkäter</span>
		<span slot="a">
			Utforma enkäter så som du vill. Använd olika svarstyper, som fritext, skala, numeriskt värde och flerval. Välj hur Kaddio ska räkna ut resultatet, till exempel som summa eller medelvärde. Sätt och benämn gränser för att få en snabb översikt av resultatet.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Utskick</span>
		<span slot="a">
			Skicka länk till enkäten via sms eller mail.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Skicka enkät utifrån bokningar</span>
		<span slot="a">
			Skicka enkäten till de klienter som haft en bokning inom ett visst tidsintervall.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Skicka enkät utifrån grupp</span>
		<span slot="a">
			Skicka enkäten till klienter eller behandlare baserat på vilken grupp de tillhör.
		</span>
	</Qa>
	<Qa>
		<span slot="q">Enkäter ger anonyma svar</span>
		<span slot="a">
			Alla svar som samlas in via enkäter är anonyma och kan inte kan inte kopplas till någon specifik klient eller behandlare.
		</span>
	</Qa>

</FaqSection>
