<script>
	import Qa from "../../../components/qa.svelte";
	import ModuleFeature from "../../../components/moduleFeature.svelte";
	import ModuleSection from "../../../components/moduleSection.svelte";
	import FaqSection from "../../../components/faqSection.svelte";
</script>

<ModuleSection>
	<span slot="title">Kaddio Fakturering</span>
	<span slot="sub">Kaddio Fakturering är ett komplett faktureringsprogram, i och med att det finns integrerat i Kaddio hjälper det dig att fakturera direkt från bokningar och journalanteckningar</span>

	<ModuleFeature>
		<span slot="title">Artiklar</span>
		<span slot="body">
			Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Journalformulär</span>
		<span slot="body">
			Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">ICD-10</span>
		<span slot="body">
			Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>
	</ModuleFeature>

	
</ModuleSection>
  

<FaqSection>
	<span slot="title">Funktioner</span>

	<Qa>
		<span slot="q">Fakturaunderlag</span>
		<span slot="a">
			Kaddio skapar automatiskt fakturaunderlag utifrån kalender och journal.
		</span>
	</Qa>
	<Qa>
		<span slot="q">Skicka fakturor</span>
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