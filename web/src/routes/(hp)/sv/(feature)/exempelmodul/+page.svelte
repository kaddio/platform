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

	<title>Exempel med allt du behöver</title>
	<meta name="description" content="Komplett bokningssystem och betalning som gör onlinebokningen för dina klienter supersmidig, Kaddio gör även allt annat du förväntar dig." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/cal-se.png" alt="Kaddio onlinebokning och kalender">
	<span slot="h1">Onlinebokning</span>
	<span slot="title">Kaddio Kalender och Tidsbokning</span>
	<span slot="sub">
		Komplett bokningssystem och betalning som gör onlinebokningen för dina klienter supersmidig, Kaddio gör även allt annat du förväntar dig. I Kaddio är kalendern även din publika bokning så att du enkelt kan hantera bokningsbara tider, möten och grupppass i samma vy.</span>

	<ModuleFeatureWithIcon icon="calendar-lines-pen">
		<span slot="title">Planera</span>
		<span slot="body">
			Skapa bokningsbara tider direkt från din kalender. Konfigurera dina bokningstyper i detalj. Välj om dina kunder bokar och betalar själva eller om du tar kontroll över varje minut. 
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="people-pulling">
		<span slot="title">Samarbeta</span>
		<span slot="body">
			Använd kalendern för att boka möten och välj enkelt vilka som ska vara med. Bestäm själv vilka kollegor som ska se vad.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="stopwatch">
		<span slot="title">Effektivisera</span>
		<span slot="body">
			Har du återkommande händelser i kalendern? Skapa mallar och spara tid. 
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
	<span slot="title">Detta är Kaddio Onlinebokning</span>
	<span slot="body">Kaddio kommer fullsmackat med grejer, för att ge dig en härlig överblick så har vi gjort en tabell. Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Planera</span>
		<span slot="body">Funktioner för att ge dig en smärtfri upplevelse</span>

		<ModuleOverviewFeature>Kalender</ModuleOverviewFeature>
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
        Vad några kunder säger om Exempelmodulen       
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
<!-- 
<FaqSection>
	<span slot="title">Vanliga frågor</span>

	<Qa>
		<span slot="q">Kalender</span>
		<span slot="a">
			Administrera bokningar i kalendern, till exempel ändra eller avboka tid. I kalendern ser du bokningar sida vid sida med möten och andra aktiviteter.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Öppen klientbokning</span>
		<span slot="a">
			Klienten bokar tid själv på en publik websida.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Bokning med Mobilt BankID</span>
		<span slot="a">
			Klienten loggar in i Kaddio med Mobilt BankID för att kunna boka tid. Passar dig som vill säkerställa identiteten på den som bokar.
		</span>
	</Qa>

	<Qa>
		<span slot="q">SMS-påminnelser</span>
		<span slot="a">
			Välj om och när SMS-påminnelser skickas inför och efter bokade tider.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Formulär</span>
		<span slot="a">
			Skicka formulär automatiskt i samband med bokning, till exempel skattningsformulär och hälsodeklaration.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Behandlingsformer</span>
		<span slot="a">
			Erbjud olika typer av behandlingsformer. Koppla behandlingsformer till olika behandlare. Anpassa sms och mailutskick beroende på behandling.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Gruppbokning</span>
		<span slot="a">
			Lägg upp tider som är bokningsbara för fler än en deltagare.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Tidsoptimering</span>
		<span slot="a">
			Undvik onödiga hål i schemat. Kaddio optimerar bokningsbara tider utifrån behandlingformernas längd.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Väntelistor</span>
		<span slot="a">
			Skapa väntelistor med datum, anteckningar och delegeringsfunktion.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Kortbetalning vid bokning</span>
		<span slot="a">
			Låt klienten betala med kort direkt vid bokning online.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Fakturering</span>
		<span slot="a">
			Automatiska faktureringsunderlag skapas utifrån bokningar.
		</span>
	</Qa>
	<Qa>
		<span slot="q">Visa bokning på din hemsida</span>
		<span slot="a">
			Integrera bokning direkt på din hemsida.
		</span>
	</Qa>
	<Qa>
		<span slot="q">Platser</span>
		<span slot="a">
			Kaddio har stöd för om du har mottagningar på flera platser. Information i mail och sms-påminnelser anpassas beroende på plats.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Rumsbokning</span>
		<span slot="a">
			Schemaläggning för dina rum. Kaddio ser till att behandlingar bara bokas in när det finns tillgängliga rum.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Personalliggare</span>
		<span slot="a">
			Kaddio kan användas som digital personalliggare genom Arbetstid i Kalendern, med hjälp av Loggning uppfylls även Skatteverkets regler kring kontroll.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Loggning</span>
		<span slot="a">
			Läsning och redigering loggas. Loggen visar vad som gjorts med en viss klients journal och av vem, när och från vilken ip-adress.
		</span>
	</Qa>

</FaqSection> -->