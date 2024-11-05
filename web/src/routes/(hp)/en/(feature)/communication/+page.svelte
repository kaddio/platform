<script>
    import ModuleSectionWithImage from '$components/moduleSectionWithImage.svelte';
    import ModuleFeatureWithIcon from '$components/moduleFeatureWithIcon.svelte';
    import ModuleOverviewFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeature from "$components/moduleOverviewFeature.svelte";
    import ModuleOverviewFeaturesSegment from "$components/moduleOverviewFeaturesSegment.svelte";
    import Quote from "$components/quote.svelte";
    import QuotesSection from "$components/quotesSection.svelte";
    import StatsSectionEn from '$components/statsSectionEn.svelte';
    import StatsSectionPart from "$components/statsSectionPart.svelte";
	import QuoteEnJimmy from '$components/quoteEnJimmy.svelte';
	import QuoteEnJonas from '$components/quoteEnJonas.svelte';
	import QuoteEnRamzi from '$components/quoteEnRamzi.svelte';
	import QuoteEnSofia from '$components/quoteEnSofia.svelte';
	import QuoteEnUlrika from '$components/quoteEnUlrika.svelte';
	import ContactDanielEn from '$components/contactDanielEn.svelte';
	import PricesEn from '$components/pricesEn.svelte';
</script>

<svelte:head>
    <meta name="robots" content="noindex">

    <title>Kaddio - Kommunikation</title>
    <meta name="description" content="Chat och video för upp till 500 samtidiga deltagare" />
</svelte:head>


<ModuleSectionWithImage src="/img/kaddio-screenshots/chat-sv.png" alt="Kaddio Journalsystem">
	<span slot="h1">Kommunikation</span>
	<span slot="title">Kaddio Chat och Video</span>
	<span slot="sub">
		Kaddio Chat och Video gör att du kan kommunicera och dela information säkert med klienter och kollegor. Kaddio uppfyller Socialstyrelsens krav på stark autentisering.
	</span>



    <ModuleFeatureWithIcon icon="comment">
		<span slot="title">Kommunicera.</span>
		<span slot="body">
			Videosamtal, chat och kontaktformulär i en krypterad miljö. 
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="share">
		<span slot="title">Dela information.</span>
		<span slot="body">
			Skicka känslig information, filer och bilder till klienter och kollegor på ett säkert.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="lock-keyhole">
		<span slot="title">Säkerhetsanpassa.</span>
		<span slot="body">
			Kräv inloggning till videosamtal och chat med Mobilt BankID eller
            tvåfaktorsautentisering.
		</span> 
	</ModuleFeatureWithIcon>

</ModuleSectionWithImage>

<ModuleOverviewFeaturesSection>
	<span slot="pre">Innehåll</span>
	<span slot="title">Detta är Kaddio Chat och Video</span>
	<span slot="body">Med Kaddio Chat och Video kommunicerar du säkert med klienter och kollegor. 
		<br>Allt i Kaddio är krypterat.</span>
	
    <ModuleOverviewFeaturesSegment>
		<span slot="title">Kommunicera</span>
		
		<ModuleOverviewFeature>Videosamtal för 2-500 deltagare</ModuleOverviewFeature>
		<ModuleOverviewFeature>Skärmdelning i videosamtal</ModuleOverviewFeature>
        <ModuleOverviewFeature>Chat med klienter och kollegor</ModuleOverviewFeature>
        <ModuleOverviewFeature>Gruppchat</ModuleOverviewFeature>
		<ModuleOverviewFeature>E-postmeddelande till klient från chatten</ModuleOverviewFeature>
        <ModuleOverviewFeature>Kontaktformulär för klient</ModuleOverviewFeature>

	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Dela information</span>
	
		<ModuleOverviewFeature>
			Bifoga filer, till exempel journalanteckningar eller annan känslig information.</ModuleOverviewFeature>
		<ModuleOverviewFeature>
			Medgivandeblankett med signeringsfunktion </ModuleOverviewFeature>
		<ModuleOverviewFeature>Inspelning av videosamtal</ModuleOverviewFeature>
		<ModuleOverviewFeature>Automatiska utskick av formulär från kontaktformuläret</ModuleOverviewFeature>
		
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Säkerhetsanpassa</span>
			
		<ModuleOverviewFeature>Uppfyller Socialstyrelsens krav på stark autentisering</ModuleOverviewFeature>
		<ModuleOverviewFeature>Inloggning för klient med Mobilt BankID</ModuleOverviewFeature>
		<ModuleOverviewFeature>Inloggning för klient med tvåfaktorsautentisering via SMS</ModuleOverviewFeature>
			
	</ModuleOverviewFeaturesSegment>
  
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
        Vad våra kunder säger om <br>Kaddio Chat och Video       
    </span>
    <QuoteEnJimmy />
    <QuoteEnJonas />
    <QuoteEnRamzi />
    <QuoteEnSofia />
    
</QuotesSection>

<StatsSectionEn />

<PricesEn />

<ContactDanielEn />