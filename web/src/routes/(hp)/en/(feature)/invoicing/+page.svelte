<script>
    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
    import ModuleFeatureWithIcon from "$components/moduleFeatureWithIcon.svelte";
    import ModuleOverviewFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeature from "$components/moduleOverviewFeature.svelte";
    import ModuleOverviewFeaturesSegment from "$components/moduleOverviewFeaturesSegment.svelte";
    import QuotesSection from "$components/quotesSection.svelte";
	import QuoteEnJimmy from "$components/quoteEnJimmy.svelte";
	import QuoteEnUlrika from "$components/quoteEnUlrika.svelte";
	import ContactDanielEn from "$components/contactDanielEn.svelte";
	import PricesEn from "$components/pricesEn.svelte";
	import StatsSectionEn from "$components/statsSectionEn.svelte";

</script>

<svelte:head>
	<title>Fakturering för små och medelstora företag</title>
	<meta name="description" content="Kaddio Fakturering är ett komplett faktureringsprogram för små och medelstora företag." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/invoice-new-se.png" alt="Kaddio invoicing">
	<span slot="h1">Invoicing system</span>
	<span slot="title">Kaddio Invoicing</span>
	<span slot="sub">
		Kaddio Invoicing is an easy invoicing system for small and medium businesses.
		Combine with Kaddio Booking or Kaddio EMR for fast and flexible invoicing.
	</span>

	<ModuleFeatureWithIcon icon="timer">
		<span slot="title">Save time.</span>
		<span slot="body">
			Generate invoices automatically from bookings or medical record entries.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="arrows-spin">
		<span slot="title">Automate.</span>
		<span slot="body">
			Let Kaddio handle reminders and tick off payments.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="envelope">
		<span slot="title">Deliver.</span>
		<span slot="body">
			Send invoices via email, letter or chat. <br>Send e-invoices to companies all over the world.
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
	<QuoteEnUlrika />
	<QuoteEnJimmy />
</QuotesSection>

<StatsSectionEn />

<PricesEn />

<ContactDanielEn />