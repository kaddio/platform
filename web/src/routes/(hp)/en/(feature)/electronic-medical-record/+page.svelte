<script>

    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
    import ModuleFeatureWithIcon from "$components/moduleFeatureWithIcon.svelte";
    import ModuleOverviewFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeature from "$components/moduleOverviewFeature.svelte";
    import ModuleOverviewFeaturesSegment from "$components/moduleOverviewFeaturesSegment.svelte";
	import QuotesSection from "$components/quotesSection.svelte";
    import StatsSectionEn from "../../statsSectionEn.svelte";
	import PricesEn from "../../pricesEn.svelte";
    import ContactDanielEn from "../../contactDanielEn.svelte";

</script>

<svelte:head>
	
	<title>Electronic medical record with everything you need</title>
	<meta name="description" content="Kaddio Electronic Medical Record is a complete system for documenting your clients." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/medical-record-en.png" alt="Kaddio Electronic medical record">
	<span slot="h1">Electronic medical record</span>
	<span slot="title">Kaddio EMR</span>
	<span slot="sub">
		Kaddio EMR is an electronic medical record system that has everything you need to keep records of your clients and document your business. 
		A complete solution for health professionals.
	</span>

	<ModuleFeatureWithIcon icon="pen">
		<span slot="title">
			Document.
		</span>
		<span slot="body">
			Keep records safely and securely, wherever you are. 
			Design templates for medical records based on your business needs.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="sliders">
		<span slot="title">
			Follow up.
		</span>
		<span slot="body">
			Send letters and referrals. Automate the dispatch and collection of forms. 
			All information is gathered in the medical records.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="lock-keyhole">
		<span slot="title">
			Ensure.
		</span>
		<span slot="body">
			Regulate access to clients and medical records. Use Kaddio Logs to trace activities in medical records. 
		</span>
	</ModuleFeatureWithIcon>

</ModuleSectionWithImage>

<ModuleOverviewFeaturesSection>
	<span slot="title">This is Kaddio EMR</span>
	<span slot="body">With Kaddio EMR you keep records safely and smoothly in a way that suits 
		your business. Handle everything in the same system and get more free time.
 	</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Document</span>
	
		<ModuleOverviewFeature>Free design of templates for medical records</ModuleOverviewFeature>
		<ModuleOverviewFeature>Support for template text and phrases</ModuleOverviewFeature>
		<ModuleOverviewFeature>Upload images to draw on</ModuleOverviewFeature>
		<ModuleOverviewFeature>File upload to medical record entries</ModuleOverviewFeature>
		<ModuleOverviewFeature>Diagnoses with ICD-10</ModuleOverviewFeature>
		<!-- <ModuleOverviewFeature>Standard forms as entries in medical records</ModuleOverviewFeature> -->
		<ModuleOverviewFeature>Build your own forms</ModuleOverviewFeature>

	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Follow up</span>
		
		<ModuleOverviewFeature>Automated dispatch and collection of forms</ModuleOverviewFeature>
		<ModuleOverviewFeature>Referrals via letter, email and chat</ModuleOverviewFeature>
		<ModuleOverviewFeature>Export of medical records as PDF</ModuleOverviewFeature>
		<ModuleOverviewFeature>Overview of bookings, invoices and tasks</ModuleOverviewFeature>
		<!-- <ModuleOverviewFeature>Samlingsräkning</ModuleOverviewFeature> -->
		
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Ensure</span>
	
		<ModuleOverviewFeature>Encrypted record keeping</ModuleOverviewFeature>
		<ModuleOverviewFeature>Access control of medical records</ModuleOverviewFeature>
		<ModuleOverviewFeature>Signing of medical record entries</ModuleOverviewFeature>
		<ModuleOverviewFeature>History of editing of medical record entries</ModuleOverviewFeature>
		<ModuleOverviewFeature>Listing of unsigned medical record entries</ModuleOverviewFeature>
		<ModuleOverviewFeature>Log of reading and editing events for medical records</ModuleOverviewFeature>
		
	</ModuleOverviewFeaturesSegment>
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
       What our customers say about Kaddio EMR       
    </span>

	<!-- 	Fixa när Quotes EN är släppt
	<QuoteEnRamzi />
	<QuoteEnJimmy />
	<QuoteEnJonas />
	<QuoteEnAmanda />
	<QuoteEnSofia /> -->
	
</QuotesSection>

<StatsSectionEn />

<PricesEn />

<ContactDanielEn />

<!-- Inga listade formulär eftersom dessa är på svenska -->