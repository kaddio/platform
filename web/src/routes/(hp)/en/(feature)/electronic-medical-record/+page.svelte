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

	<title>Electronic medical record</title>
	<meta name="description" content="Kaddio Electronic Medical Record is a complete system for documenting your clients." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/medical-record-en.png" alt="Kaddio Electronic medical record">
	<span slot="h1">Electronic medical record</span>
	<span slot="title">Kaddio EMR</span>
	<span slot="sub">
		Kaddio EMR is an electronic medical record system that has everything you need to document your business and journal your clients. A complete solution for health professionals.
	</span>

	<ModuleFeatureWithIcon icon="pen">
		<span slot="title">
			Document it
		</span>
		<span slot="body">
			Keep your notes safe and secure, wherever you are. No paper, binders or backups.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="sliders">
		<span slot="title">
			Customize
		</span>
		<span slot="body">
			Tool up your own templates for journal entries based on your business needs.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="gamepad-modern">
		<span slot="title">
			Control
		</span>
		<span slot="body">
			Control access to clients and journals. You decide who can access what.
			Follow activity in journals through Kaddio's log for traceability and regulatory compliance.
		</span>
	</ModuleFeatureWithIcon>

</ModuleSectionWithImage>

<ProductFeatureImageOnLeft src="/img/ana-with-skeleton.png" alt="Ana Casanovas is giving a treatment">
	<span slot="pre">Inspirerande text</span>
	<span slot="title">Därför använder X Kaddio Modulnamn</span>
	<span slot="body">Beskrivande text med exempel från verklig kund hur denna modul hjälper just dem i sitt arbete. Distinctio et nulla eum soluta et neque labore quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</span>
</ProductFeatureImageOnLeft>

<ModuleOverviewFeaturesSection>
	<span slot="pre">Innehåll</span>
	<span slot="title">Detta är Kaddio Onlinebokning</span>
	<span slot="body">Kort intro till allt denna modul innehållerKaddio kommer fullsmackat med grejer, för att ge dig en härlig överblick så har vi gjort en tabell. Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Nyckelverb 1 från första sektionen</span>
		<!-- <span slot="body">Underrubrik, utkommenterad för nu.</span> -->

		<ModuleOverviewFeature>Lista funktioner: "Detta har vi". Fakta. Mer detaljerat. Skriv neutralt och på -ing-form</ModuleOverviewFeature>
		<ModuleOverviewFeature>Öppen klientbokning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Bokning med Mobilt BankID</ModuleOverviewFeature>
		<ModuleOverviewFeature>SMS-påminnelser</ModuleOverviewFeature>
		<ModuleOverviewFeature>Formulär</ModuleOverviewFeature>
		<ModuleOverviewFeature>Behandlingsformer</ModuleOverviewFeature>
		<ModuleOverviewFeature>Gruppbokning</ModuleOverviewFeature>

	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Samarbeta</span>
		<span slot="body">Funktioner för göra samarbetet smidigare</span>

		<ModuleOverviewFeature>Platser</ModuleOverviewFeature>
		<ModuleOverviewFeature>Rumsbokning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Personalliggare</ModuleOverviewFeature>
		<ModuleOverviewFeature>Loggning</ModuleOverviewFeature>	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Effektivisera</span>
		<span slot="body">Funktioner för att spara tid</span>

		<ModuleOverviewFeature>Tidsoptimering</ModuleOverviewFeature>
		<ModuleOverviewFeature>Väntelistor</ModuleOverviewFeature>
		<ModuleOverviewFeature>Kortbetalning vid bokning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Fakturering</ModuleOverviewFeature>
		<ModuleOverviewFeature>Visa bokning på din hemsida</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
        Vad våra kunder säger om Exempelmodulen       
    </span>

    <Quote>
        Vi på Din Psykolog har haft stor hjälp av Kaddio i vårt arbete i att utveckla framtidens digitala vård, och de har varit väldigt tillmötesgående i utvecklingen av specifika funktioner vi behövt. Vi kan varmt rekommendera Kaddio!
        <span slot="quoted">
            Ramzi Jelassi <cite>Grundare  <a href="https://dinpsykolog.se" target="_blank" rel="noreferrer">Din Psykolog</a></cite>
        </span>
    </Quote>
    <Quote>
        Det är ett rent nöje att fakturera med kaddio! Så smidigt och tydligt. Och så gör det ju skillnad att det är en snygg miljö också, mina andra program har sett ut som ... 😉. Tack för allt ni gör, min jobbdag blir så mycket härligare i kaddio!
        <span slot="quoted">
            Ulrika Hiscoke <cite>Leg Psykolog, medicine doktor <a href="https://arbor.kaddio.com" target="_blank" rel="noreferrer">Arbor Psykologi</a></cite>
        </span>
    </Quote>
    
    <Quote>
        Kaddio är användarvänligt, funktionellt och passar vår verksamhet perfekt!
        <span slot="quoted">
            Jimmy Lundqvist <cite>Chef IKSU fysio <a href="https://iksu.se" target="_blank" rel="noreferrer">IKSU</a></cite>
        </span>
    </Quote>
    
</QuotesSection>

<ProductPricingSection></ProductPricingSection>

<StatsSectionWithText>
    <StatsSectionWithTextPart>
		<span slot="title">användare</span>
		<span slot="sub">47 000+</span>
    </StatsSectionWithTextPart>

    <StatsSectionWithTextPart>
		<span slot="title">bokningar per dygn</span>
		<span slot="sub">1300+</span>
    </StatsSectionWithTextPart>

    <StatsSectionWithTextPart>
		<span slot="title">videomöten per månad</span>
		<span slot="sub">8500+</span>
    </StatsSectionWithTextPart>
</StatsSectionWithText>


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