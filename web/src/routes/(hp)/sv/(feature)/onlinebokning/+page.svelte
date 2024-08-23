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
    import PricesSv from "../../pricesSv.svelte";
    import StatsSection from "$components/statsSection.svelte";
    import StatsSectionPart from "$components/statsSectionPart.svelte";
    import StatsSectionWithText from "$components/statsSectionWithText.svelte";
    import StatsSectionWithTextPart from "$components/statsSectionWithTextPart.svelte";
	import SalesSection from "$components/salesSection.svelte";
	import ContactDanielSv from "../../contactDanielSv.svelte";
	import QuoteSvAmanda from "../../quote-sv-amanda.svelte";
	import QuoteSvJimmy from "../../quote-sv-jimmy.svelte";
	import QuoteSvJonas from "../../quote-sv-jonas.svelte";
    import QuoteSvSofia from "../../quote-sv-sofia.svelte";

</script>

<svelte:head>
    <meta name="robots" content="noindex">

	<title>Onlinebokning med allt du behöver</title>
	<meta name="description" content="Komplett bokningssystem och betalning som gör onlinebokningen för dina klienter supersmidig, Kaddio gör även allt annat du förväntar dig." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/cal-se.png" alt="Kaddio onlinebokning och kalender">
	<span slot="h1">Onlinebokning</span>
	<span slot="title">Kaddio Bokning</span>
	<span slot="sub">
		Kaddio Bokning är kalender och bokningssystem i ett. Hantera bokningar, gruppass och möten i samma vy och få koll på läget.</span>

	<ModuleFeatureWithIcon icon="people-pants">
		<span slot="title">Samarbeta.</span>
		<span slot="body">
			Administrera mötesbokning och rumsbokning för hela organisationen.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="stopwatch">
		<span slot="title">Effektivisera.</span>
		<span slot="body">
			Skapa mallar för återkommande händelser i kalendern och spara tid. 
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="calendar-lines-pen">
		<span slot="title">Förbättra kundflödet.</span>
		<span slot="body">
			Skapa bokningsbara tider direkt från din kalender. Styr allt själv eller låt kunderna boka och betala på egen hand.
		</span>
	</ModuleFeatureWithIcon>
</ModuleSectionWithImage>

<ModuleOverviewFeaturesSection>
	<span slot="pre">Innehåll</span>
	<span slot="title">Detta är Kaddio Bokning</span>
	<span slot="body">Med Kaddio Bokning planerar du organisationens verksamhet effektivt och överskådligt, oavsett om du är del av ett stort företag eller egenföretagare.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Samarbeta</span>

		<ModuleOverviewFeature>Mötesbokning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Stöd för verksamhet på flera adresser</ModuleOverviewFeature>
		<ModuleOverviewFeature>Rumsbokning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Delad kalender inom organisationen</ModuleOverviewFeature>
		<ModuleOverviewFeature>Väntelistor för klienter på kö</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Effektivisera</span>

		<ModuleOverviewFeature>Kalender och tidsbokning i samma vy</ModuleOverviewFeature>
		<ModuleOverviewFeature>Kortbetalning vid bokning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Incheckning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Dagrapporter</ModuleOverviewFeature>
		<ModuleOverviewFeature>Automatiska fakturaunderlag</ModuleOverviewFeature>
		<ModuleOverviewFeature>Mallfunktion</ModuleOverviewFeature>
		
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Förbättra kundflödet</span>

		<ModuleOverviewFeature>Tidsbokning på hemsida</ModuleOverviewFeature>
		<ModuleOverviewFeature>Integration till Kuralink</ModuleOverviewFeature>
		<ModuleOverviewFeature>Söktjänsten Hitta Klinik</ModuleOverviewFeature>
		<ModuleOverviewFeature>Bokning med BankID</ModuleOverviewFeature>
		<ModuleOverviewFeature>Påminnelser via e-post och SMS</ModuleOverviewFeature>
		<ModuleOverviewFeature>Formulär vid bokning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Gruppbokning</ModuleOverviewFeature>

	</ModuleOverviewFeaturesSegment>
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
        Vad våra kunder säger om <br>Kaddio Bokning       
    </span>

    <QuoteSvJimmy />
    
    <QuoteSvJonas />

	<QuoteSvAmanda />

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

<PricesSv></PricesSv>

<ContactDanielSv></ContactDanielSv>