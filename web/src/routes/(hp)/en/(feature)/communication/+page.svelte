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

    <title>Kaddio - Communication</title>
    <meta name="description" content="Chat and video for up to 500 participants" />
</svelte:head>


<ModuleSectionWithImage src="/img/kaddio-screenshots/chat-sv.png" alt="Kaddio Journalsystem">
	<span slot="h1">Communication</span>
	<span slot="title">Kaddio Chat and Video</span>
	<span slot="sub">
		Kaddio Chat och Video enables you to communicate and share information securely with 
		clients and colleagues. Kaddio fulfils requirements for strong authentication.
	</span>



    <ModuleFeatureWithIcon icon="comment">
		<span slot="title">Communicate.</span>
		<span slot="body">
			Video calls, chat and contact form in an encrypted environment. 
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="share">
		<span slot="title">Share information.</span>
		<span slot="body">
			Send sensitive information, files and images securely to clients and colleagues.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="lock-keyhole">
		<span slot="title">Secure.</span>
		<span slot="body">
			Require login to video calls with two-factor authentication.
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