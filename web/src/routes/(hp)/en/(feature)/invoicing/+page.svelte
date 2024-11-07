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
	<span slot="pre">Contents</span>
	<span slot="title">This is Kaddio Invoicing</span>
	<span slot="body">With Kaddio Invoicing you easily send invoices from bookings or medical record entries. 
		Handle everything in the same system and spend more time on your clients.
	</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Save time</span>
		<!-- <span slot="body">Funktioner för att ge dig en smärtfri upplevelse</span> -->

		<ModuleOverviewFeature>Duplication of invoices</ModuleOverviewFeature>
		<ModuleOverviewFeature>Accounting records with exports in SIE-4, CSV and for Excel.</ModuleOverviewFeature>
		<ModuleOverviewFeature>Clients lists of business customers</ModuleOverviewFeature>
		<ModuleOverviewFeature>Accounts receivable</ModuleOverviewFeature>
		<ModuleOverviewFeature>Reports of income</ModuleOverviewFeature>
				
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Automate</span>
		<!-- <span slot="body">Funktioner för göra samarbetet smidigare</span> -->

		<ModuleOverviewFeature>Invoices from bookings or medical record entries</ModuleOverviewFeature>
		<!-- <ModuleOverviewFeature>Avprickning av betalningar mot Bankgirot eller bankkonto</ModuleOverviewFeature> -->
		<ModuleOverviewFeature>Payment reminders</ModuleOverviewFeature>
		<ModuleOverviewFeature>Sorting for debt collection</ModuleOverviewFeature>
				
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Deliver</span>
		<!-- <span slot="body">Funktioner för att spara tid</span> -->

		<ModuleOverviewFeature>Invoicing via email, letters and chat</ModuleOverviewFeature>
		<ModuleOverviewFeature>E-invoicing to companies world-wide</ModuleOverviewFeature>
		<!-- <ModuleOverviewFeature>Samlingsfaktura till företagskund</ModuleOverviewFeature> -->

	</ModuleOverviewFeaturesSegment>
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
        What our customers say about Kaddio Invoicing      
    </span>
	<QuoteEnUlrika />
	<QuoteEnJimmy />
</QuotesSection>

<StatsSectionEn />

<PricesEn />

<ContactDanielEn />