<script>

    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
    import ModuleFeatureWithIcon from "$components/moduleFeatureWithIcon.svelte";
    import ModuleOverviewFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeature from "$components/moduleOverviewFeature.svelte";
    import ModuleOverviewFeaturesSegment from "$components/moduleOverviewFeaturesSegment.svelte";
	import QuotesSection from "$components/quotesSection.svelte";
    import StatsSectionEn from "$components/statsSectionEn.svelte";
	import PricesEn from "$components/pricesEn.svelte";
    import ContactDanielEn from "$components/contactDanielEn.svelte";
	import QuoteEnAmanda from "$components/quoteEnAmanda.svelte";
	import QuoteEnJimmy from "$components/quoteEnJimmy.svelte";
	import QuoteEnJonas from "$components/quoteEnJonas.svelte";
	import QuoteEnSofia from "$components/quoteEnSofia.svelte";


</script>

<svelte:head>

	<title>Kaddio - Time booking and calendar</title>
	<meta name="description" content="Easy-to-use time booking and online payment that does everything you expect." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/cal-sv.png" alt="Kaddio onlinebokning och kalender">
	<span slot="h1">Online booking</span>
	<span slot="title">Kaddio Booking</span>
	<span slot="sub">
		Kaddio Booking is your all-in-one calendar and booking system. Manage bookings, meetings and group sessions in the same view and get sorted.
	</span>

	<ModuleFeatureWithIcon icon="people">
		<span slot="title">Collaborate.</span>
		<span slot="body">
			Schedule meetings and rooms for the entire organization.
			
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="stopwatch">
		<span slot="title">Streamline.</span>
		<span slot="body">
			Create templates for recurring events in your calendar and save time.
						
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="calendar-lines-pen">
		<span slot="title">Improve customer flow.</span>
		<span slot="body">
			Create bookable times directly from your calendar. Control everything or let your clients book and pay themselves.
		</span>
	</ModuleFeatureWithIcon>

</ModuleSectionWithImage>

<ModuleOverviewFeaturesSection>
	<span slot="pre">Contents</span>
	<span slot="title">This is Kaddio Booking</span>
	<span slot="body">Kaddio Booking helps you plan all activities of the organization in an 
		efficient and comprehensable way, whether you are part of a 
		big company or self-employed.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Collaborate</span>
			
		<ModuleOverviewFeature>Scheduling of meetings</ModuleOverviewFeature>
		<ModuleOverviewFeature>Support for online businesses and multiple locations</ModuleOverviewFeature>
		<ModuleOverviewFeature>Room booking</ModuleOverviewFeature>
		<ModuleOverviewFeature>Shared calendar witin the organization</ModuleOverviewFeature>
		<ModuleOverviewFeature>Waiting lists for queuing clients</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Streamline</span>
		
		<ModuleOverviewFeature>Calendar and booking in the same view</ModuleOverviewFeature>
		<ModuleOverviewFeature>Card payment at booking</ModuleOverviewFeature>
		<ModuleOverviewFeature>Check-in functions</ModuleOverviewFeature>
		<ModuleOverviewFeature>Day reports</ModuleOverviewFeature>
		<ModuleOverviewFeature>Automated invoices</ModuleOverviewFeature>
		<ModuleOverviewFeature>Template functions</ModuleOverviewFeature>
	

	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Improve customer flow</span>
		
		<ModuleOverviewFeature>Booking on website</ModuleOverviewFeature>
		<!-- <ModuleOverviewFeature>Integration with Kuralink - ävne på EN?</ModuleOverviewFeature>
		<ModuleOverviewFeature>Söktjänst Hitta Klinik - Hur översätta?</ModuleOverviewFeature> -->
		<ModuleOverviewFeature>Booking with two-factor authentication</ModuleOverviewFeature>
		<ModuleOverviewFeature>Reminders via email and texts</ModuleOverviewFeature>
		<ModuleOverviewFeature>Forms at booking</ModuleOverviewFeature>
		<ModuleOverviewFeature>Group bookings</ModuleOverviewFeature>
		<ModuleOverviewFeature>API</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>

</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
       What our customers say about Kaddio EMR       
    </span>

	<QuoteEnAmanda />
	<QuoteEnJimmy />
	<QuoteEnJonas />

	<QuoteEnSofia />

</QuotesSection>

<StatsSectionEn />

<PricesEn />

<ContactDanielEn />

