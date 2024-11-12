<script>
	import Qa from "$components/qa.svelte";
	import FaqSection from "$components/faqSection.svelte";
    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
    import ModuleFeatureWithIcon from "$components/moduleFeatureWithIcon.svelte";
	export let data;
	
    import ModuleOverviewFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeature from "$components/moduleOverviewFeature.svelte";
    import ModuleOverviewFeaturesSegment from "$components/moduleOverviewFeaturesSegment.svelte";
   
    import QuotesSection from "$components/quotesSection.svelte";
    
	import QuoteSvAmanda from "$components/quote-sv-amanda.svelte";
	import QuoteSvJimmy from "$components/quote-sv-jimmy.svelte";
	import QuoteSvJonas from "$components/quote-sv-jonas.svelte";
	
	import QuoteSvRamzi from "$components/quote-sv-ramzi.svelte";
	import QuoteSvSofia from "$components/quote-sv-sofia.svelte";
	
	import ContactDanielSv from "$components/contactDanielSv.svelte";
	import PricesSv from "$components/pricesSv.svelte";
	import StatsSectionSv from "$components/statsSectionSv.svelte";
</script>

<svelte:head>


	<title>Journalsystem med allt du behöver</title>
	<meta name="description" content="Kaddio Journal har allt du behöver för att dokumentera verksamheten och journalföra klienter. Ett komplett journalsystem för vård." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/log-overview-se.png" alt="Kaddio Journalsystem">
	<span slot="h1">Journalsystem</span>
	<span slot="title">Kaddio Journal</span>
	<span slot="sub">
		Kaddio Journal har allt du behöver för att journalföra klienter och dokumentera verksamheten. 
		Ett komplett journalsystem, helt enkelt.
	</span>

	<ModuleFeatureWithIcon icon="pen">
		<span slot="title">Dokumentera.</span>
		<span slot="body">
			Journalför på ett säkert sätt, där och när du vill. Utforma mallar för journalanteckningar utifrån verksamhetens behov.
		</span> 
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="sliders">
		<span slot="title">Följ upp.</span>
		<span slot="body">
			Skicka brev och remisser. Automatisera utskick och insamling av formulär. Allt finns samlat i journalen.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="lock-keyhole">
		<span slot="title">Säkerställ.</span>
		<span slot="body">
			Styr åtkomst till klienter och journaler. Följ aktivitet i journaler genom Kaddios loggar.
		</span>
	</ModuleFeatureWithIcon>

</ModuleSectionWithImage>

<ModuleOverviewFeaturesSection>
	<span slot="title">Detta är Kaddio Journal</span>
	<span slot="body">Med Kaddio Journal journalför du säkert och smidigt på det sätt som passar din verksamhet. Sköt allt i samma system och få tid över till annat.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Dokumentera</span>
		
		<ModuleOverviewFeature>Fri utformning av anteckningsmallar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Stöd för malltext och fraser</ModuleOverviewFeature>
		<ModuleOverviewFeature>Uppladdning av egna bilder att rita på</ModuleOverviewFeature>
		<ModuleOverviewFeature>Filuppladdning i journalanteckningar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Diagnoser enligt ICD-10</ModuleOverviewFeature>
		<ModuleOverviewFeature>Standardformulär direkt i journalen</ModuleOverviewFeature>
		<ModuleOverviewFeature>Bygg egna formulär</ModuleOverviewFeature>
		<ModuleOverviewFeature>API</ModuleOverviewFeature>
		
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Följ upp</span>

		<ModuleOverviewFeature>Automatiserade utskick och insamling av formulär</ModuleOverviewFeature>
		<ModuleOverviewFeature>Remisser via brev, e-post och chat</ModuleOverviewFeature>
		<ModuleOverviewFeature>Export av journalanteckningar som PDF</ModuleOverviewFeature>
		<ModuleOverviewFeature>Översikt över bokningar, fakturor och uppgifter</ModuleOverviewFeature>
		<ModuleOverviewFeature>Samlingsräkning</ModuleOverviewFeature>
		
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Säkerställ</span>
		
		<ModuleOverviewFeature>Krypterad journalföring</ModuleOverviewFeature>
		<ModuleOverviewFeature>Behörighetsstyrning för journaler</ModuleOverviewFeature>
		<ModuleOverviewFeature>Signering av anteckningar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Historik för redigering av anteckningar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Listning av osignerade anteckningar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Logg över läsning och redigering av journaler</ModuleOverviewFeature>
		

	</ModuleOverviewFeaturesSegment>

</ModuleOverviewFeaturesSection> 

<QuotesSection>
    <span slot="title">
        Vad våra kunder säger om Kaddio Journal       
    </span>

	<QuoteSvRamzi />
	<QuoteSvJimmy />
	<QuoteSvJonas />
	<QuoteSvAmanda />
	<QuoteSvSofia />

</QuotesSection>

<StatsSectionSv />

<PricesSv></PricesSv>


<ContactDanielSv />

{#if data.pkgs?.length > 0}
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
 