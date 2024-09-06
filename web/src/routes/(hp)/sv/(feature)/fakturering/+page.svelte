<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
    import ModuleFeatureWithIcon from "$components/moduleFeatureWithIcon.svelte";
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
	import StatsSectionSv from "../../statsSectionSv.svelte";

</script>

<svelte:head>
	<title>Fakturering för små och medelstora företag</title>
	<meta name="description" content="Kaddio Fakturering är ett komplett faktureringsprogram för små och medelstora företag." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/invoice-new-se.png" alt="Kaddio fakturering">
	<span slot="h1">Faktureringssystem</span>
	<span slot="title">Kaddio Fakturering</span>
	<span slot="sub">
		Kaddio Fakturering är ett enkelt faktureringssystem för små och medelstora företag. Kombinera med Kaddio Bokning eller Kaddio Journalsystem för att fakturera snabbt och flexibelt.
	</span>

	<ModuleFeatureWithIcon icon="timer">
		<span slot="title">Spara tid.</span>
		<span slot="body">
			Skicka en faktura med tre klick. Underlag genereras automatiskt från bokade tider eller journalanteckningar.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="arrows-spin">
		<span slot="title">Automatisera.</span>
		<span slot="body">
			Håll koll på dina fakturor genom automatiska påminnelser och avprickningar av inbetalningar.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="file-contract">
		<span slot="title">Leverera.</span>
		<span slot="body">
			Fakturera via e-post, brev eller i chatten. Skicka e-fakturor till företag med PEPPOL-ID.
		</span>
	</ModuleFeatureWithIcon>
	
</ModuleSectionWithImage>

<ModuleOverviewFeaturesSection>
	<span slot="pre">Innehåll</span>
	<span slot="title">Detta är Kaddio Fakturering</span>
	<span slot="body">Med Kaddio Fakturering skickar du enkelt fakturor utifrån bokningar eller journalanteckningar. Hantera allt i samma system och få mer tid till dina klienter.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Spara tid</span>
		<!-- <span slot="body">Funktioner för att ge dig en smärtfri upplevelse</span> -->

		<ModuleOverviewFeature>Fakturering från automatiska underlag med tre klick</ModuleOverviewFeature>
		<ModuleOverviewFeature>Export av fakturainformation som <br>SIE-4, CSV och XLSX</ModuleOverviewFeature>
		<ModuleOverviewFeature>Kundreskontra</ModuleOverviewFeature>
		<ModuleOverviewFeature>Inkassoexport</ModuleOverviewFeature>
				
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Automatisera</span>
		<!-- <span slot="body">Funktioner för göra samarbetet smidigare</span> -->

		<ModuleOverviewFeature>Automatiska fakturaunderlag från bokade tider eller journalanteckningar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Automatiska betalningspåminnelser</ModuleOverviewFeature>
		<ModuleOverviewFeature>Automatisk sortering till inkasso</ModuleOverviewFeature>
		
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Leverera</span>
		<!-- <span slot="body">Funktioner för att spara tid</span> -->

		<ModuleOverviewFeature>Fakturering via e-post, brev och chat</ModuleOverviewFeature>
		<ModuleOverviewFeature>E-fakturering av företag med PEPPOL-ID</ModuleOverviewFeature>
		<ModuleOverviewFeature>Samlingsfaktura till företagskund</ModuleOverviewFeature>


	</ModuleOverviewFeaturesSegment>
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
        Vad våra kunder säger om Kaddio Fakturering       
    </span>

	<QuoteSvKim />

	<QuoteSvUlrika />

</QuotesSection>

<StatsSectionSv />

<PricesSv />

<ContactDanielSv />