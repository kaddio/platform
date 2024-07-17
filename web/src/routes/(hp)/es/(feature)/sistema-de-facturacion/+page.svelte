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

	<title>Kaddio - Sistema de facturación</title>
	<meta name="description" content="Las facturas se crean automáticamente en función de las citas reservadas. También puedes crearlas de forma independiente. Todas las facturas se guardan en Kaddio." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/facturas-es.png" alt="Kaddio fakturering">
	<span slot="h1">Sistema de facturación</span>
	<span slot="title">Kaddio Sistema de facturación</span>
	<span slot="sub">
		Kaddio Fakturering är ett enkelt faktureringssystem för små och medelstora företag. Kombinera med Kaddio Bokning eller Kaddio Journalsystem för att fakturera snabbt och flexibelt.
	</span>

	<ModuleFeatureWithIcon icon="timer">
		<span slot="title">Spara tid.</span>
		<span slot="body">
			Skicka en faktura med tre klick. Underlag genereras automatiskt från bokade tider eller journalanteckningar.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="arrows-spin">
		<span slot="title">Automatisera.</span>
		<span slot="body">
			Håll koll på dina fakturor genom automatiska påminnelser och avprickningar av inbetalningar.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="file-contract">
		<span slot="title">Leverera.</span>
		<span slot="body">
			Fakturera via e-post, brev eller i chatten. Skicka e-fakturor till företag med PEPPOL-ID.
		</span>
	</ModuleFeatureWithIcon>
	
</ModuleSectionWithImage>
  
<ProductFeatureImageOnLeft src="/img/ana-with-skeleton.png" alt="Ana Casanovas is giving a treatment">
	<span slot="pre">Förnamn Efternamn, Titel @ Organisation, Stad/Land</span>
	<span slot="title">Därför använder X Kaddio Fakturering</span>
	<span slot="body">Distinctio et nulla eum soluta et neque labore quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</span>
</ProductFeatureImageOnLeft>

<ModuleOverviewFeaturesSection>
	<span slot="pre">Innehåll</span>
	<span slot="title">Detta är Kaddio Fakturering</span>
	<span slot="body">Med Kaddio Fakturering skickar du enkelt fakturor utifrån bokningar eller journalanteckningar. Hantera allt i samma system och få mer tid till dina klienter.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Spara tid</span>
		<!-- <span slot="body">Funktioner för att ge dig en smärtfri upplevelse</span> -->

		<ModuleOverviewFeature>Fakturering från automatiska underlag med tre klick</ModuleOverviewFeature>
		<ModuleOverviewFeature>Export av fakturainformation som <br>SIE-4, CSV och XLSX</ModuleOverviewFeature>
		<ModuleOverviewFeature>Kundreskontra</ModuleOverviewFeature>
		<ModuleOverviewFeature>Inkassoexport</ModuleOverviewFeature>
				
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Automatisera</span>
		<!-- <span slot="body">Funktioner för göra samarbetet smidigare</span> -->

		<ModuleOverviewFeature>Automatiska fakturaunderlag från bokade tider eller journalanteckningar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Automatiska betalningspåminnelser</ModuleOverviewFeature>
		<ModuleOverviewFeature>Automatisk sortering till inkasso</ModuleOverviewFeature>
		
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Leverera</span>
		<!-- <span slot="body">Funktioner för att spara tid</span> -->

		<ModuleOverviewFeature>Fakturering via e-post, brev och chat</ModuleOverviewFeature>
		<ModuleOverviewFeature>E-fakturering av företag med PEPPOL-ID</ModuleOverviewFeature>
		<ModuleOverviewFeature>Samlingsfaktura till företagskund</ModuleOverviewFeature>


	</ModuleOverviewFeaturesSegment>
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
        Vad våra kunder säger om Kaddio Fakturering       
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

<!-- <ModuleSection>
	<span slot="title">Sistema de facturación</span>
	<span slot="sub">Las facturas se crean automáticamente en función de las citas reservadas. También puedes crearlas de forma independiente. Todas las facturas se guardan en Kaddio.</span>

	<ModuleFeature>
		<span slot="title">Spara tid</span>
		<span slot="body">
			Spara tid med integrerad fakturering. Kaddio föreslår automatiskt underlag utifrån bokade tider eller journalanteckningar så att du skicka en fakturera med tre klick.
		</span>
	</ModuleFeature>
	
</ModuleSection>
  

<FaqSection>
	<span slot="title">Funciones</span>

	<Qa>
		<span slot="q">Facturas</span>
		<span slot="a">
			Basándose en las reservas, Kaddio crea automáticamente las facturas.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Envío de facturas</span>
		<span slot="a">
			Envía tus facturas por correo postal, correo electrónico, a través del chat de Kaddio o como factura electrónica.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Recordatorios</span>
		<span slot="a">
			Envía recordatorios de forma automática o manual.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Marcado automático</span>
		<span slot="a">
			Kaddio marca las facturas automáticamente cuando el cliente paga mediante transferencia bancaria.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Factura electrónica</span>
		<span slot="a">
			Envía facturas electrónicas con Kaddio según el estándar PEPPOL de la UE.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Cofacturación</span>
		<span slot="a">
			Factura varios clientes a una misma empresa, como un grupo o una compañía de seguros.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Exportación de datos para empresa de cobros</span>
		<span slot="a">
			Exporta facturas impagadas que luego podrán ser importadas a una empresa de cobros.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Contabilidad</span>
		<span slot="a">
			Exporta facturas como archivo .sie o archivo .csv para cargar en un programa de contabilidad.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Monedas</span>
		<span slot="a">
			Envía facturas en las 33 monedas más comunes del mundo, con tipos de cambio automáticos actualizados diariamente por el BCE. Kaddio publica automáticamente las ganancias y pérdidas de tipo de cambio en la exportación .sie.
		</span>
	</Qa>


</FaqSection> -->