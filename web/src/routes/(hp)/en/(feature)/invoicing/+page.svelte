<script>
	import Qa from "$components/qa.svelte";
	import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import FaqSection from "$components/faqSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Invoicing</title>
	<meta name="description" content="Kaddio Invoicing is a complete invoicing service for small and medium businesses." />
</svelte:head>

<ModuleSection>
	<span slot="title">Kaddio Invoicing</span>
	<span slot="sub">Kaddio Invoicing is a complete invoicing service for small and medium businesses.</span>

	<ModuleFeature>
		<span slot="title">Save time</span>
		<span slot="body">
			Save time with integrated invoicing. Kaddio automatically makes suggestions for invoicing based on bookings or medical records. 
		</span>
	</ModuleFeature>
	
</ModuleSection>
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