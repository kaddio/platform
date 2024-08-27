<script>
    import Qa from '$components/qa.svelte';
    import FaqSection from '$components/faqSection.svelte';
    import ModuleSectionWithImage from '$components/moduleSectionWithImage.svelte';
    import ModuleFeatureWithIcon from '$components/moduleFeatureWithIcon.svelte';
    import ModuleFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeature from "$components/moduleOverviewFeature.svelte";
    import ModuleOverviewFeaturesSegment from "$components/moduleOverviewFeaturesSegment.svelte";
    import ProductFeatureImageOnLeft from "$components/productFeatureImageOnLeft.svelte";
    import Quote from "$components/quote.svelte";
    import QuotesSection from "$components/quotesSection.svelte";
    import ProductPricingSection from "$components/productPricingSection.svelte";
    import StatsSection from "$components/statsSection.svelte";
    import StatsSectionPart from "$components/statsSectionPart.svelte";
    import StatsSectionWithText from "$components/statsSectionWithText.svelte";
    import StatsSectionWithTextPart from "$components/statsSectionWithTextPart.svelte";
    import SalesSection from "$components/salesSection.svelte";
    import QuoteSvAmanda from "../../quote-sv-amanda.svelte";
	import QuoteSvJimmy from "../../quote-sv-jimmy.svelte";
	import QuoteSvJonas from "../../quote-sv-jonas.svelte";
	import QuoteSvKim from "../../quote-sv-kim.svelte";
	import QuoteSvRamzi from "../../quote-sv-ramzi.svelte";
	import QuoteSvSofia from "../../quote-sv-sofia.svelte";
	import QuoteSvUlrika from "../../quote-sv-ulrika.svelte";
	import ContactDanielSv from "../../contactDanielSv.svelte";
	import PricesSv from "../../pricesSv.svelte";
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

	<ModuleFeatureWithIcon icon="lock-keyhole">
		<span slot="title">Säkerhetsanpassa.</span>
		<span slot="body">
			Kräv inloggning till videosamtal och chat med Mobilt BankID eller
            tvåfaktorsautentisering.
		</span> 
	</ModuleFeatureWithIcon>

    <ModuleFeatureWithIcon icon="comment">
		<span slot="title">Kommunicera.</span>
		<span slot="body">
			Samtala enskilt eller i grupp. Kaddio Video har stöd för minst 500
            deltagare.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="share">
		<span slot="title">Dela information.</span>
		<span slot="body">
			Skicka känslig information på ett säkert sätt genom krypterad chat.
		</span>
	</ModuleFeatureWithIcon>

</ModuleSectionWithImage>

<ModuleOverviewFeaturesSection>
	<span slot="pre">Innehåll</span>
	<span slot="title">Detta är Kaddio Chat och Video</span>
	<span slot="body">Med Kaddio Chat och Video kommunicerar du säkert med klienter och kollegor. <br>Allt i Kaddio är krypterat.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Säkerhetsanpassa</span>
		
        <ModuleOverviewFeature>Uppfyller Socialstyrelsens krav på stark autentisering</ModuleOverviewFeature>
        <ModuleOverviewFeature>Inloggning för klient med Mobilt BankID</ModuleOverviewFeature>
		<ModuleOverviewFeature>Inloggning för klient med tvåfaktorsautentisering via SMS</ModuleOverviewFeature>
        
	</ModuleOverviewFeaturesSegment>

    <ModuleOverviewFeaturesSegment>
		<span slot="title">Kommunicera</span>
		
		<ModuleOverviewFeature>Videosamtal för 2-500 deltagare</ModuleOverviewFeature>
        <ModuleOverviewFeature>Chat för klienter och kollegor</ModuleOverviewFeature>
        <ModuleOverviewFeature>Gruppchat</ModuleOverviewFeature>
        <ModuleOverviewFeature>Kontaktformulär för klient</ModuleOverviewFeature>

	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Dela information</span>
	
		<ModuleOverviewFeature>Krypterad fildelning i chat</ModuleOverviewFeature>
		<ModuleOverviewFeature>Skärmdelning i videosamtal</ModuleOverviewFeature>
		<ModuleOverviewFeature>Inspelning av videosamtal för delning med klient i chat</ModuleOverviewFeature>
  
    </ModuleOverviewFeaturesSegment></ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
        Vad våra kunder säger om <br>Kaddio Chat och Video       
    </span>
    <QuoteSvJimmy />
    <QuoteSvJonas />
    <QuoteSvRamzi />
    <QuoteSvSofia />
    
</QuotesSection>

<StatsSection>
	<StatsSectionPart>
		<span slot="title">användare</span>
		<span slot="sub">47 000+</span>
	</StatsSectionPart>
	<StatsSectionPart>
		<span slot="title">bokningar per dygn</span>
		<span slot="sub">1300+</span>
	</StatsSectionPart>
	<StatsSectionPart>
		<span slot="title">videomöten per månad</span>
		<span slot="sub">8500+</span>
	</StatsSectionPart>
</StatsSection>

<ContactDanielSv />