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
	<title>Fakturering för små och medelstora företag</title>
	<meta name="description" content="Kaddio Fakturering är ett komplett faktureringsprogram för små och medelstora företag." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/invoice-new-se.png" alt="Kaddio fakturering">
	<span slot="h1">Faktureringssystem</span>
	<span slot="title">Kaddio Fakturering</span>
	<span slot="sub">
		Kaddio Fakturering är ett komplett faktureringsprogram för små och medelstora företag. Kaddio fakturering tillsammans med Kaddio Onlinebokning och Kaddio Journalsystem gör faktureringen enkel och samtidigt flexibel.
	</span>

	<ModuleFeatureWithIcon icon="timer">
		<span slot="title">Spara tid</span>
		<span slot="body">
			Spara tid med integrerad fakturering. Kaddio föreslår automatiskt underlag utifrån bokade tider eller journalanteckningar. Du skickar en fakturera med tre klick.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="arrows-spin">
		<span slot="title">Automatisera</span>
		<span slot="body">
			Automatisera utskick av påminnelsefakturor. Håll koll på betalningar genom automatisk avprickning av fakturor betalda via Bankgiro.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="file-contract">
		<span slot="title">E-fakturera</span>
		<span slot="body">
			Skicka e-fakturor med Kaddio enligt EU-standarden PEPPOL.
		</span>
	</ModuleFeatureWithIcon>
	
</ModuleSectionWithImage>
  

<FaqSection>
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

</FaqSection>