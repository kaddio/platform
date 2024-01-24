<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";

	export let data;
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


</FaqSection>

{#if data.pkgs.length > 0}
	<FaqSection>
		<span slot="title">Inbyggda formulär i Kaddio</span>

		{#each data.pkgs as pkg}
			<Qa>
				<span slot="q">{pkg.name}</span>
				<span slot="a">
					{pkg.desc}
				</span>
			</Qa>
		{/each}
	</FaqSection>
{/if}