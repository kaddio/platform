<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
</script>

<svelte:head>
	<title>Kaddio - Formulär</title>
	<meta name="description" content="Automatisera utskick av formulär och hälsodeklarationer." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/form-se.png">
	<span slot="h1">Formulär</span>
	<span slot="title">Kaddio Formulär</span>
	<span slot="sub">Automatisera utskick av formulär och hälsodeklarationer. I Kaddio kan du både använda standardformulär och skapa dina egna. Skicka journalformulär automatiskt vid bokning och få svaren direkt till journalen.</span>

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
		<span slot="q">Skapa formulär</span>
		<span slot="a">
			Utforma formulär så som du vill. Använd olika svarstyper, som fritext, skala, numeriskt värde och flerval. Välj hur Kaddio ska räkna ut resultatet, till exempel som summa eller medelvärde. Sätt och benämn gränser för att få en snabb översikt av resultatet.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Skicka journalformulär</span>
		<span slot="a">
			Skicka journalformulär automatiskt i samband med bokning eller manuellt vid behov. Svaren sparas i journalen.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Skicka skattningsformulär</span>
		<span slot="a">
			Skicka skattningsformulär och hälsodeklarationer via e-post och sms.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Dela mallar</span>
		<span slot="a">
			Dela mallar för formulär och brev med andra organisationer som använder Kaddio.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Standardformulär</span>
		<span slot="a">
			Ladda ner, editera och skicka de vanligaste standardformulären direkt från Kaddio:
			<small>
				<ul>	
					<li>AUDIT – Alcohol Use Disorders Identification Test</li>
					<li>BBQ - Brunnsviken Quality of Life Scale (QUOLI)</li>
					<li>CPQ - Clinical Perfectionism Questionnaire</li>
					<li>DSM-5 – Självskattning av aktuella symtom</li>
					<li>DUDIT – Drug Use Disorders Identification Test</li>
					<li>GAD-7 – Generalized Anxiety Disorder</li>
					<li>ISI – Insomnia Severity Index</li>
					<li>KEDS - självskattningstest för utmattningssyndrom</li>
					<li>MADRS-S – Montgomery-Åsberg Depression Rating Scale Självskattning</li>
					<li>OCI-R – Obsessive-Compulsive Inventory-Revised Scale</li>
					<li>PCL-5 – Posttraumatic Stress Disorder Checklist</li>
					<li>PDSS-SR – Självskattning för panikångestsyndrom</li>
					<li>PHQ-9 – Formulär för patienthälsa</li>
					<li>PSS-10 – Perceived Stress Scale (10 frågor)</li>
					<li>PSS-14 – Perceived Stress Scale (14 frågor)</li>
					<li>PSWQ – Penn State Worry Questionnaire</li>
					<li>WHODAS 2.0 – Formulär för mätning av hälsa och funktionshinder (12 frågor självadministrerad)</li>
					<li>WHODAS 2.0 – Formulär för mätning av hälsa och funktionshinder (36 frågor självadministrerad)</li>
				</ul>
			</small>
		</span>
	</Qa>

</FaqSection>
