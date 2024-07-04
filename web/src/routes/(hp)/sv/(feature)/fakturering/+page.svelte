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

	<title>Fakturering för små och medelstora företag</title>
	<meta name="description" content="Kaddio Fakturering är ett komplett faktureringsprogram för små och medelstora företag." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/invoice-new-se.png" alt="Kaddio fakturering">
	<span slot="h1">Faktureringssystem</span>
	<span slot="title">Kaddio Fakturering</span>
	<span slot="sub">
		Kaddio Fakturering är ett enkelt faktureringsprogram för små och medelstora företag. I kombination med Kaddio Bokning och Kaddio Journalsystem fakturerar du snabbt och flexibelt.
	</span>

	<ModuleFeatureWithIcon icon="timer">
		<span slot="title">Automatisera.</span>
		<span slot="body">
			Kaddio föreslår automatiskt fakturaunderlag utifrån bokade tider eller journalanteckningar. 
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="arrows-spin">
		<span slot="title">Leverera.</span>
		<span slot="body">Skicka fakturor via e-post, brev eller i krypterad chat, direkt från Kaddio.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="file-contract">
		<span slot="title">Kontrollera.</span>
		<span slot="body">
			Pricka av fakturor automatiskt. Exportera fakturainformation för bokföring.
		</span>
	</ModuleFeatureWithIcon>
	
</ModuleSectionWithImage>

<ProductFeatureImageOnLeft src="/img/ana-with-skeleton.png" alt="Ana Casanovas is giving a treatment">
	<span slot="pre">Själslig boost</span>
	<span slot="title">Därför använder Ana Kaddio</span>
	<span slot="body">Distinctio et nulla eum soluta et neque labore quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</span>
</ProductFeatureImageOnLeft>

<ModuleOverviewFeaturesSection>
	<span slot="pre">Innehåll</span>
	<span slot="title">Detta är Kaddio Fakturering</span>
	<span slot="body">Kaddio kommer fullsmackat med grejer, för att ge dig en härlig överblick så har vi gjort en tabell. Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Automatisera</span>
		<!-- <span slot="body">Funktioner för att ge dig en smärtfri upplevelse</span> -->

		<ModuleOverviewFeature>Automatiska fakturaunderlag från bokningar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Automatiska fakturaunderlag från journalanteckningar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Automatisk avprickning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Automatiska betalningspåminnelser</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Leverera</span>
		<!-- <span slot="body">Funktioner för göra samarbetet smidigare</span> -->

		<ModuleOverviewFeature>Skicka fakturor via brev, e-post och krypterad chat</ModuleOverviewFeature>
		<ModuleOverviewFeature>E-fakturera globalt enligt PEPPOL-standard</ModuleOverviewFeature>
		<ModuleOverviewFeature>Skicka fakturor i världens 33 vanligaste valutor</ModuleOverviewFeature>
		<ModuleOverviewFeature>Skicka samlingsfaktura</ModuleOverviewFeature>
		<ModuleOverviewFeature>Fakturera företagskunder</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Kontrollera</span>
		<!-- <span slot="body">Fakturera på det sätt som passar dig.</span> -->
		<ModuleOverviewFeature>Automatisk avprickning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Exportera fakturainformation som SIE-4, CSV och XLSX</ModuleOverviewFeature>
		<ModuleOverviewFeature>Kundreskontra</ModuleOverviewFeature>
		<ModuleOverviewFeature>Inkassoexport</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>
	
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
        Vad våra kunder säger om Fakturering       
    </span>

    <Quote>
        Det är ett rent nöje att fakturera med kaddio! Så smidigt och tydligt. Och så gör det ju skillnad att det är en snygg miljö också, mina andra program har sett ut som ... 😉. Tack för allt ni gör, min jobbdag blir så mycket härligare i kaddio!
        <span slot="quoted">
            Ulrika Hiscoke <cite>Leg Psykolog, medicine doktor <a href="https://arbor.kaddio.com" target="_blank" rel="noreferrer">Arbor Psykologi</a></cite>
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
	<span slot="title">Detaljer</span>

	<Qa>
		<span slot="q">Fakturaunderlag</span>
		<span slot="a">
			Kaddio skapar automatiskt fakturaunderlag utifrån kalender och journal.
		</span>
	</Qa>
	<Qa>
		<span slot="q">Artiklar</span>
		<span slot="a">
			Kaddio kan spara dina artiklar och tjänster för att ännu enklare kunna fakturera för dem.
		</span>
	</Qa>
	<Qa>
		<span slot="q">Leverans</span>
		<span slot="a">
			Skicka fakturor med post, e-post, via Kaddios säkra kommunikation och e-faktura.
		</span>
	</Qa>
	<Qa>
		<span slot="q">Påminnelsefaktura</span>
		<span slot="a">
			Skicka påminnelsefakturor automatiskt och manuellt.
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
			Exportera fakturor som SIE-fil eller CSV-fil för uppladdning i ett bokföringsprogram.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Valutor</span>
		<span slot="a">
			Skicka fakturor i världens 33 vanligaste valutor, med automatiska växelkurser som uppdateras varje dag från ECB. Kaddio bokför automatiskt valutakursvinster och valutakursförluster i SIE-exporten.
		</span>
	</Qa>

</FaqSection> -->