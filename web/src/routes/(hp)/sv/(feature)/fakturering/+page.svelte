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
	import QuoteSvAmanda from "$components/quote-sv-amanda.svelte";
	import QuoteSvJimmy from "$components/quote-sv-jimmy.svelte";
	import QuoteSvJonas from "$components/quote-sv-jonas.svelte";
	import QuoteSvKim from "$components/quote-sv-kim.svelte";
	import QuoteSvRamzi from "$components/quote-sv-ramzi.svelte";
	import QuoteSvSofia from "$components/quote-sv-sofia.svelte";
	import QuoteSvUlrika from "$components/quote-sv-ulrika.svelte";
	import ContactDanielSv from "$components/contactDanielSv.svelte";
	import PricesSv from "$components/pricesSv.svelte";
	import StatsSectionSv from "$components/statsSectionSv.svelte";

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
			Generera fakturor automatiskt utifrån bokade tider eller journalanteckningar.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="arrows-spin">
		<span slot="title">Automatisera.</span>
		<span slot="body">
			Låt Kaddio hantera påminnelser och avprickningar av inbetalningar.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="envelope">
		<span slot="title">Leverera.</span>
		<span slot="body">
			Fakturera via e-post, brev eller i chatten. <br>Skicka e-fakturor till företag i hela världen.
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

		<ModuleOverviewFeature>Duplicering av fakturor</ModuleOverviewFeature>
		<ModuleOverviewFeature>Bokföringsunderlag med export i SIE-4, CSV och för Excel</ModuleOverviewFeature>
		<ModuleOverviewFeature>Kundlista för företagskunder</ModuleOverviewFeature>
		<ModuleOverviewFeature>Kundreskontra</ModuleOverviewFeature>
		<ModuleOverviewFeature>Rapporter över intänkter</ModuleOverviewFeature>
				
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Automatisera</span>
		<!-- <span slot="body">Funktioner för göra samarbetet smidigare</span> -->

		<ModuleOverviewFeature>Fakturor utifrån bokade tider eller journalanteckningar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Avprickning av betalningar mot Bankgirot eller bankkonto</ModuleOverviewFeature>
		<ModuleOverviewFeature>Betalningspåminnelser</ModuleOverviewFeature>
		<ModuleOverviewFeature>Sortering till inkassoexport</ModuleOverviewFeature>
				
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Leverera</span>
		<!-- <span slot="body">Funktioner för att spara tid</span> -->

		<ModuleOverviewFeature>Fakturering via e-post, brev och chat</ModuleOverviewFeature>
		<ModuleOverviewFeature>E-fakturering av företag i hela världen</ModuleOverviewFeature>
		<ModuleOverviewFeature>Samlingsfaktura till företagskund</ModuleOverviewFeature>


	</ModuleOverviewFeaturesSegment>
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
        Vad våra kunder säger om Kaddio Fakturering       
    </span>

	<QuoteSvKim />

	<QuoteSvUlrika />

	<QuoteSvJimmy />

</QuotesSection>

<StatsSectionSv />

<PricesSv />

<ContactDanielSv />