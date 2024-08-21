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
</script>

<svelte:head>
	<meta name="robots" content="noindex">

	<title>Kaddio - Invoicing</title>
	<meta name="description" content="Kaddio Invoicing is a complete invoicing service for small and medium businesses." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/invoice-en.png" alt="Kaddio invoicing">
	<span slot="h1">Invoicing</span>
	<span slot="title">Kaddio Invoicing</span>
	<span slot="sub">
		Kaddio Invoicing is a complete invoicing service for small and medium businesses. Combine with Kaddio Booking or Kaddio EMR for fast and flexible invoicing.</span>

	<ModuleFeatureWithIcon icon="calendar-lines-pen">
		<span slot="title">Save time.</span>
		<span slot="body">
			Send an invoice in three clicks. Invoice data is automatically generated from bookings or medical record entries.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="people-pulling">
		<span slot="title">Automate.</span>
		<span slot="body">
			Keep track of your invoices with automatic reminders and tick-off of payments.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="stopwatch">
		<span slot="title">Deliver.</span>
		<span slot="body">
			Send invoices by email, letters or in the chat. Send e-invoices to companies with PEPPOL ID. 
		</span>
	</ModuleFeatureWithIcon>
</ModuleSectionWithImage>

<!-- <ProductFeatureImageOnLeft src="/img/ana-with-skeleton.png" alt="Ana Casanovas is giving a treatment">
	<span slot="pre">Inspirerande text</span>
	<span slot="title">Why X uses Kaddio Invoicing</span>
	<span slot="body">Beskrivande text med exempel från verklig kund hur denna modul hjälper just dem i sitt arbete. Distinctio et nulla eum soluta et neque labore quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</span>
</ProductFeatureImageOnLeft> -->

<ModuleOverviewFeaturesSection>
	<span slot="pre">Contents</span>
	<span slot="title">This is Kaddio Invoicing</span>
	<span slot="body">With Kaddio Invoicing you send invoices from bookings or medical record in an 
		easy way. Handle all tasks in the same system and spend more time on your clients.
	</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Save time</span>
		<!-- <span slot="body">Underrubrik, utkommenterad för nu.</span> -->

		<ModuleOverviewFeature>Easy invoicing with automated invoice data</ModuleOverviewFeature>
		<ModuleOverviewFeature>Export of invoice information as SIE-4, CSV and XLSX</ModuleOverviewFeature>
		<ModuleOverviewFeature>Export of accounts receivable ledger</ModuleOverviewFeature>
		<ModuleOverviewFeature>Export of debt collection</ModuleOverviewFeature>

	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Automate</span>
		<!-- <span slot="body">Funktioner för göra samarbetet smidigare</span> -->

		<ModuleOverviewFeature>Automated invoice data from bookings or medical record entries</ModuleOverviewFeature>
		<ModuleOverviewFeature>Automatic reminders</ModuleOverviewFeature>
		<ModuleOverviewFeature>Automatic sorting for debt collection</ModuleOverviewFeature>
		
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Deliver</span>
		<!-- <span slot="body">Funktioner för att spara tid</span> -->

		<ModuleOverviewFeature>Invoicing via email, letters and chat</ModuleOverviewFeature>
		<ModuleOverviewFeature>E-invoicing of businesses with PEPPOL ID</ModuleOverviewFeature>
		<ModuleOverviewFeature>Collective invoicing of business customers</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
        What our customers say about Kaddio Invoicing       
    </span>

    <Quote>
        It is a pleasure to do invoicing with Kaddio! So smooth and clear. And the neat environment makes a difference too, my other programs have looked like... 😉. Thanks for everything you do, my work day is so much nicer with Kaddio. 
        <span slot="quoted">
            Ulrika Hiscoke <cite>Lic. Psychologist, Medical Doctor <a href="https://arbor.kaddio.com" target="_blank" rel="noreferrer">Arbor Psykologi</a></cite>
        </span>
    </Quote>
    
    <Quote>
        Kaddio is user friendly, functional and suits our business perfectly!
        <span slot="quoted">
            Jimmy Lundqvist <cite>CEO IKSU fysio <a href="https://iksu.se" target="_blank" rel="noreferrer">IKSU</a></cite>
        </span>
    </Quote>

</QuotesSection>

<!-- <ProductPricingSection></ProductPricingSection> -->

<!-- <StatsSectionWithText>
    <StatsSectionWithTextPart>
		<span slot="title">users</span>
		<span slot="sub">47 000+</span>
    </StatsSectionWithTextPart>

    <StatsSectionWithTextPart>
		<span slot="title">bookings per day</span>
		<span slot="sub">1300+</span>
    </StatsSectionWithTextPart>

    <StatsSectionWithTextPart>
		<span slot="title">video calls per month</span>
		<span slot="sub">8500+</span>
    </StatsSectionWithTextPart>
</StatsSectionWithText> -->


<StatsSection>
	<StatsSectionPart>
		<span slot="title">users</span>
		<span slot="sub">47 000+</span>
	</StatsSectionPart>
	<StatsSectionPart>
		<span slot="title">bookings per day</span>
		<span slot="sub">1300+</span>
	</StatsSectionPart>
	<StatsSectionPart>
		<span slot="title">video calls per month</span>
		<span slot="sub">8500+</span>
	</StatsSectionPart>
</StatsSection>

<!-- <ModuleSection>
	<span slot="title">Kaddio Invoicing</span>
	<span slot="sub">Kaddio Invoicing is a complete invoicing service for small and medium businesses.</span>

	<ModuleFeature>
		<span slot="title">Save time</span>
		<span slot="body">
			Save time with integrated invoicing. Kaddio automatically makes suggestions for invoicing based on bookings or medical records. 
		</span>
	</ModuleFeature>
	
</ModuleSection> -->
<!--  
<FaqSection>
	<span slot="title">Details</span>

	<Qa>
		<span slot="q">Articles</span>
		<span slot="a">
			Kaddio has support for articles.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Invoice bases</span>
		<span slot="a">
			Kaddio automatically creates bases for invoices from bookings or medical records.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Send invoices</span>
		<span slot="a">
			Skicka fakturor med post, e-post, via Kaddios säkra kommunikation och e-faktura.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Reminders for invoices</span>
		<span slot="a">
			Send reminders for invoices, automatically or manually.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Automatisk avprickning</span>
		<span slot="a">
			Kaddio prickar av fakturor automatiskt när kunden betalar via bankgiro.
		</span>
	</Qa>
	
	<Qa>
		<span slot="q">E-faktura</span>
		<span slot="a">
			Skicka e-fakturor med Kaddio enligt EU-standarden PEPPOL.
		</span>
	</Qa>
	<Qa>
		<span slot="q">Samfakturering</span>
		<span slot="a">
			Fakturera för flera klienter till ett företag, till exempel ett gruppboende eller försäkringsbolag.
		</span>
	</Qa>
	<Qa>
		<span slot="q">Inkassoexport</span>
		<span slot="a">
			Exportera ej betalda fakturor som sedan kan importeras till ett inkassoföretag.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Export</span>
		<span slot="a">
			Exportera invoices as SIE or CSV filer for uploads to bokkeeping programs.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Currencies</span>
		<span slot="a">
			Send invoices in the world's 33 most common currencies with automated exchange rates, updated each day from ECB. Kaddio automatically posts gains and losses from exchange rates in the exported SIE file.
		</span>
	</Qa>

</FaqSection>
-->