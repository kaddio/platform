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

	<title>Kaddio - Sistema de reservas</title>
	<meta name="description" content="Kaddio tiene un servicio de reservas en el que tus clientes pueden reservar a través de una web accesible al público. También puedes optar por administrar las reservas tu mismo dentro de Kaddio." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/calendario-es.png" alt="Kaddio onlinebokning och kalender">
	<span slot="h1">Sistema de reservas</span>
	<span slot="title">Kaddio Sistema de reservas</span>
	<span slot="sub">
		Kaddio Bokning är kalender och bokningssystem i ett. Hantera bokningar, gruppass och möten i samma vy och få koll på läget.</span>

	<ModuleFeatureWithIcon icon="calendar-lines-pen">
		<span slot="title">Planera.</span>
		<span slot="body">
			Skapa bokningsbara tider direkt från din kalender. Låt kunderna boka och betala på egen hand eller styr allt själv.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="people-pulling">
		<span slot="title">Samarbeta.</span>
		<span slot="body">
			Administrera mötesbokning och rumsbokning för hela organisationen.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="stopwatch">
		<span slot="title">Effektivisera.</span>
		<span slot="body">
			Skapa mallar för återkommande händelser i kalendern och spara tid. 
		</span>
	</ModuleFeatureWithIcon>
</ModuleSectionWithImage>
  
<ProductFeatureImageOnLeft src="/img/ana-with-skeleton.png" alt="Ana Casanovas is giving a treatment">
	<span slot="pre">Inspirerande text och bild</span>
	<span slot="title">Därför använder X Kaddio Bokning</span>
	<span slot="body">Distinctio et nulla eum soluta et neque labore quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</span>
</ProductFeatureImageOnLeft>

<ModuleOverviewFeaturesSection>
	<span slot="pre">Innehåll</span>
	<span slot="title">Detta är Kaddio Bokning</span>
	<span slot="body">Med Kaddio Bokning planerar du organisationens verksamhet effektivt och överskådligt, oavsett om du är ensam behandlare eller del av ett större företag.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Planera</span>
		<!-- <span slot="body">Funktioner för att ge dig en smärtfri upplevelse</span> -->

		<ModuleOverviewFeature>Kalender och tidsbokning i samma vy</ModuleOverviewFeature>
		<ModuleOverviewFeature>Obegränsat antal behandlingsformer</ModuleOverviewFeature>

		<ModuleOverviewFeature>Bokning med mobilt BankID</ModuleOverviewFeature>
		<ModuleOverviewFeature>Påminnelser via e-post och SMS</ModuleOverviewFeature>
		<ModuleOverviewFeature>Formulär vid bokning</ModuleOverviewFeature>
		
		<ModuleOverviewFeature>Gruppbokning</ModuleOverviewFeature>

	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Samarbeta</span>
		<!-- <span slot="body">Funktioner för göra samarbetet smidigare</span> -->

		<ModuleOverviewFeature>Mötesbokning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Stöd för verksamhet online och på flera platser</ModuleOverviewFeature>
		<ModuleOverviewFeature>Rumsbokning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Personalliggare</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Effektivisera</span>
		<!-- <span slot="body">Funktioner för att spara tid</span> -->

		<ModuleOverviewFeature>Mallar för arbetstid</ModuleOverviewFeature>
		<ModuleOverviewFeature>Öppen tidsbokning på hemsida</ModuleOverviewFeature>
		<ModuleOverviewFeature>Kortbetalning vid bokning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Ankomstregistrering</ModuleOverviewFeature>
		<ModuleOverviewFeature>Väntelistor</ModuleOverviewFeature>
		<ModuleOverviewFeature>Dagrapporter</ModuleOverviewFeature>
		<ModuleOverviewFeature>Automatiska fakturaunderlag ihop med modulen Fakturering</ModuleOverviewFeature>
		
	</ModuleOverviewFeaturesSegment>
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
        Vad våra kunder säger om <br>Kaddio Bokning       
    </span>

    <Quote>
        Här vill man ha citat som rör just Bokning.
        <span slot="quoted">
            Förnamn Efternamn <cite>Titel  <a href="https://webadress.se" target="_blank" rel="noreferrer">Webadress</a></cite>
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

<!-- <svelte:head>
	<title>Kaddio - Sistema de reservas</title>
	<meta name="description" content="Kaddio tiene un servicio de reservas en el que tus clientes pueden reservar a través de una web accesible al público. También puedes optar por administrar las reservas tu mismo dentro de Kaddio." />
</svelte:head> -->

<!-- <ModuleSection>
	<span slot="title">Sistema de reservas</span>
	<span slot="sub">Kaddio tiene un servicio de reservas en el que tus clientes pueden reservar a través de una web accesible al público. También puedes optar por administrar las reservas tu mismo dentro de Kaddio.</span>

	<ModuleFeature>
		<span slot="title">Automatisera</span>
		<span slot="body">
			Automatisera ditt schema och låt dina kunder boka och betala själva eller ta kontroll över varje minut. Bokningstyper kan konfigureras i detalj och detta hjälper dig sen i bokningen så att det blir lätt där. Automatiskta påminnelser
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Samarbeta</span>
		<span slot="body">
			Använd kalendern för att boka möten.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Effektivisera</span>
		<span slot="body">
			Har du återkommande händelser i kalendern? Skapa mallar och spara tid
		</span>
	</ModuleFeature>
</ModuleSection> -->
  

<!-- <FaqSection>
	<span slot="title">Funciones</span>

	<Qa>
		<span slot="q">Calendario</span>
		<span slot="a">
			Administra las reservas en el calendario. Por ejemplo, cambia o cancela una cita. En el calendario, verás las reservas junto con las reuniones y otras actividades.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Sistema de reservas accesible</span>
		<span slot="a">
			El cliente puede hacer reservas él mismo a través de un sitio web accesible al público.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Reservas con Mobilt BankID</span>
		<span slot="a">
			El cliente inicia sesión en Kaddio con Mobilt BankID para poder reservar una cita. Adecuado para aquellos que quieren asegurar la identidad de la persona que reserva.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Recordatorios SMS</span>
		<span slot="a">
			Elige si y cuándo se envían recordatorios por SMS antes de una cita reservada.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Formularios</span>
		<span slot="a">
			Envía formularios automáticamente cuando se realiza una reserva. Por ejemplo, formularios de evaluación y declaraciones de salud.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Formas de tratamiento</span>
		<span slot="a">
			Ofrece tipos de tratamientos diferentes. Vincula formas de tratamiento a diferentes terapeutas. Personaliza los mensajes de texto y correos electrónicos según el tratamiento.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Reservas de grupo</span>
		<span slot="a">
			Publica horarios que se puedan reservar para más de un paciente.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Optimización del tiempo</span>
		<span slot="a">
			Evita huecos innecesarios en el calendario. Kaddio optimiza los tiempos de reserva en función de la duración del tratamiento.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Pago con tarjeta al reservar</span>
		<span slot="a">
			El cliente puede pagar directamente con tarjeta al reservar online.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Facturación</span>
		<span slot="a">
			Se crean documentos de facturación de forma automática en función de las reservas.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Sistema de reservas en tu página web</span>
		<span slot="a">
			Integra el sistema de reservas directamente en tu página web.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Múltiples localizaciones</span>
		<span slot="a">
			Kaddio soporta múltiples localizaciones. La información de los recordatorios por correo electrónico y SMS se adapta según la ubicación.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Reserva inteligente de consultorios</span>
		<span slot="a">
			Programación planificada. Kaddio asegura que los tratamientos solo se reservan cuando hay consultorios disponibles.
		</span>
	</Qa>



</FaqSection> -->