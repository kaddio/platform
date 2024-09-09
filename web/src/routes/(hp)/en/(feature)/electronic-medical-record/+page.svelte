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
	
	<title>Electronic medical record</title>
	<meta name="description" content="Kaddio Electronic Medical Record is a complete system for documenting your clients." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/medical-record-en.png" alt="Kaddio Electronic medical record">
	<span slot="h1">Electronic medical record</span>
	<span slot="title">Kaddio EMR</span>
	<span slot="sub">
		Kaddio EMR is an electronic medical record system that has everything you need to document your business and keep records of your clients. A complete solution for health professionals.
	</span>

	<ModuleFeatureWithIcon icon="pen">
		<span slot="title">
			Document.
		</span>
		<span slot="body">
			Keep your records safe and secure, wherever you are. No need for paper, binders or backups.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="sliders">
		<span slot="title">
			Customize.
		</span>
		<span slot="body">
			Design your own templates for medical records based on your business needs.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="gamepad-modern">
		<span slot="title">
			Control.
		</span>
		<span slot="body">
			Regulate access to clients and medical records. You decide who can access what.
		</span>
	</ModuleFeatureWithIcon>

</ModuleSectionWithImage>

<ModuleOverviewFeaturesSection>
	<span slot="title">This is Kaddio EMR</span>
	<span slot="body">With Kaddio EMR you keep records safely and smoothly in a way that suits 
		your business. Kaddio handles all data storage. You get more free time.
 	</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Document</span>
	
		<ModuleOverviewFeature>Encrypted record keeping</ModuleOverviewFeature>
		<ModuleOverviewFeature>Images with drawing functions</ModuleOverviewFeature>
		<ModuleOverviewFeature>File upload to medical record entries</ModuleOverviewFeature>
		<ModuleOverviewFeature>Diagnoses with ICD-10</ModuleOverviewFeature>
		<ModuleOverviewFeature>Standard forms as entries in medical records</ModuleOverviewFeature>
		<ModuleOverviewFeature>Export of medical records or single entries in PDF format</ModuleOverviewFeature>

	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Customize</span>
	
		<ModuleOverviewFeature>Free design of templates for medical records</ModuleOverviewFeature>
		<ModuleOverviewFeature>Support for template text</ModuleOverviewFeature>
		<ModuleOverviewFeature>Support for phrases</ModuleOverviewFeature>
		<ModuleOverviewFeature>Upload of images to draw on</ModuleOverviewFeature>
		<ModuleOverviewFeature>Free design of forms</ModuleOverviewFeature>	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Control</span>
	
		<ModuleOverviewFeature>Access control of medical records</ModuleOverviewFeature>
		<ModuleOverviewFeature>Signing and editing functions with full history</ModuleOverviewFeature>
		<ModuleOverviewFeature>Listing of unsigned medical record entries</ModuleOverviewFeature>
		<ModuleOverviewFeature>Log of reading and editing events for medical records</ModuleOverviewFeature>
		
	</ModuleOverviewFeaturesSegment>
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
       What our customers say about Kaddio EMR       
    </span>

	<!-- Fixa när quotesEn är släppt -->
	
</QuotesSection>

<StatsSectionEn />

<PricesEn />

<ContactDanielEn />