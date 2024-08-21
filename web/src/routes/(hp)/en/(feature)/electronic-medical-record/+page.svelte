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
	import SalesSectionEn from "$components/salesSectionEn.svelte";

</script>

<svelte:head>
	<meta name="robots" content="noindex">

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

<!-- <ProductFeatureImageOnLeft src="/img/ana-with-skeleton.png" alt="Ana Casanovas is giving a treatment">
	<span slot="pre">Silvia Tiray, osteopat @ Osteopatía Mallorca, Spanien</span>
	<span slot="title">Why Silvia uses Kaddio EMR</span>
	<span slot="body"><cite> "Kaddio fits our way of working with osteopathic consultations and is easy to use, even if you don't know much about computers. You can start using the system straight away. There are templates for record keeping and I can edit the templates to work for the type of patients that I meet in my work It is very important to me. 
		<br>
		<br>I use Kaddio to better organize my medical records and patient visits, and above all to have more time for my hobbies and my family. I can enjoy my free time more."</cite>
		<br>
		<br><a href="/sv/case/osteopatia-mallorca" class="font-semibold text-oldpink">
			Read more about Silvia's journey to digital record keeping →</a>
	</span>
</ProductFeatureImageOnLeft> -->

<ModuleOverviewFeaturesSection>
	<!--<span slot="pre">Innehåll</span>-->
	<span slot="title">This is Kaddio EMR</span>
	<span slot="body">With Kaddio EMR you keep records safely and smoothly in a way that suits 
		your business. Kaddio handles all data storage. You get more free time.
 	</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Document</span>
		<!-- <span slot="body">Underrubrik, utkommenterad för nu.</span> -->

		<ModuleOverviewFeature>Encrypted record keeping</ModuleOverviewFeature>
		<ModuleOverviewFeature>Images with drawing functions</ModuleOverviewFeature>
		<ModuleOverviewFeature>File upload to medical record entries</ModuleOverviewFeature>
		<ModuleOverviewFeature>Diagnoses with ICD-10</ModuleOverviewFeature>
		<ModuleOverviewFeature>Standard forms as entries in medical records</ModuleOverviewFeature>
		<ModuleOverviewFeature>Export of medical records or single entries in PDF format</ModuleOverviewFeature>

	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Customize</span>
		<!-- <span slot="body">Funktioner för göra samarbetet smidigare</span> -->

		<ModuleOverviewFeature>Free design of templates for medical records</ModuleOverviewFeature>
		<ModuleOverviewFeature>Support for template text</ModuleOverviewFeature>
		<ModuleOverviewFeature>Support for phrases</ModuleOverviewFeature>
		<ModuleOverviewFeature>Upload of images to draw on</ModuleOverviewFeature>
		<ModuleOverviewFeature>Free design of forms</ModuleOverviewFeature>	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Control</span>
		<!-- <span slot="body">Funktioner för att spara tid</span> -->

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

	<Quote>
        At Din Psykolog, we have had great help from Kaddio in our work with developing digital healthcare for the future, and they have been most accommodating with developing specific functions for our needs. We warmly recommend Kaddio!
        <span slot="quoted">
            Ramzi Jelassi <cite>Founder  <a href="https://dinpsykolog.se" target="_blank" rel="noreferrer">Din Psykolog</a></cite>
        </span>
    </Quote>
    
    <Quote>
        Kaddio is user friendly, functional and suits our business perfectly!
        <span slot="quoted">
            Jimmy Lundqvist <cite>CEO IKSU fysio <a href="https://iksu.se" target="_blank" rel="noreferrer">IKSU</a></cite>
        </span>
    </Quote>
    
    <Quote>
        I have the same demand for my medical records program as for my treatments: Efficiency. That is why I use Kaddio.
        <span slot="quoted">
            Jonas Evander <cite>Lic. Psychologist <a href="https://afobia.se" target="_blank" rel="noreferrer">Afobia</a></cite>
        </span>
    </Quote>

    <Quote>
        Kaddio is my chosen program for medical records due to its ease of use. The program is easy to navigate and adjust to my needs, both for medical records and for time bookings.
        <span slot="quoted">
            Amanda Follin <cite>Lic. Massage Therapist <a href="https://www.endorfinkliniken.com" target="_blank" rel="noreferrer">Endorfinkliniken</a></cite>
        </span>
    </Quote>

    <Quote>
        The program has everything I need and is easy to adjust to my needs. I can really recommend this program for medical records.
        <span slot="quoted">
            Sofia Viotti <cite>Lic. Psychologist Compassionfocus
        </span>
    </Quote>

    <Quote>
        A functional and easy program for medical records, with a quick and professional support team.
        <span slot="quoted">
            Kim Olausson <cite>Lic. Physiotherapist <a href="https://fysiokompassen.se" target="_blank" rel="noreferrer">Fysiokompassen</a></cite>
        </span>
    </Quote>    
</QuotesSection>

<!-- <ProductPricingSection></ProductPricingSection> -->

<!--<StatsSectionWithText>
    <StatsSectionWithTextPart>
		<span slot="title">users</span>
		<span slot="sub">47 000+</span>
    </StatsSectionWithTextPart>

    <StatsSectionWithTextPart>
		<span slot="title">bookings per day</span>
		<span slot="sub">1300+</span>
    </StatsSectionWithTextPart>

    <StatsSectionWithTextPart>
		<span slot="title">video meetings per month</span>
		<span slot="sub">8500+</span>
    </StatsSectionWithTextPart>
</StatsSectionWithText>-->


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
		<span slot="title">video meetings per month</span>
		<span slot="sub">8500+</span>
	</StatsSectionPart>
</StatsSection>

<SalesSectionEn></SalesSectionEn>

<!-- <SalesSection></SalesSection> -->

<!-- <FaqSection>
	<span slot="title">Details</span>

	<Qa>
		<span slot="q">Templates</span>
		<span slot="a">
			Create medical record templates tailored to your needs. Choose your own search phrases and titles.
		</span>
	</Qa>
	
	<Qa>
		<span slot="q">Medical record forms</span>
		<span slot="a">
			Create your own forms or use commonly used standard forms directly from Kaddio. Send assessment forms and health declarations via e-mail and SMS. Journal forms can be sent automatically when you get a new booking, or manually if necessary. The answers are saved in the journal.		</span>
	</Qa>

	<Qa>
		<span slot="q">Letters and referrals</span>
		<span slot="a">
			Create letters, referrals, referral responses and certificates. Send by post, via Kaddio Communication or download as PDF.		</span>
	</Qa>

	<Qa>
		<span slot="q">ICD-10</span>
		<span slot="a">
			Search by code or free text and add diagnoses to each journal entry.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Privileges</span>
		<span slot="a">
			Choose if everyone within your organization should be able to read a client's medical record or limit access to certain processors.
		</span>
	</Qa>

</FaqSection> -->