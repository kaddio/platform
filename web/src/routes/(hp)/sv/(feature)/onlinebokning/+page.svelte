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
    import PricesSv from "../../pricesSv.svelte";
    import StatsSection from "$components/statsSection.svelte";
    import StatsSectionPart from "$components/statsSectionPart.svelte";
    import StatsSectionWithText from "$components/statsSectionWithText.svelte";
    import StatsSectionWithTextPart from "$components/statsSectionWithTextPart.svelte";
	import SalesSection from "$components/salesSection.svelte";
	import ContactDanielSv from "../../contactDanielSv.svelte";
</script>

<svelte:head>
    <meta name="robots" content="noindex">

	<title>Onlinebokning med allt du behöver</title>
	<meta name="description" content="Komplett bokningssystem och betalning som gör onlinebokningen för dina klienter supersmidig, Kaddio gör även allt annat du förväntar dig." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/cal-se.png" alt="Kaddio onlinebokning och kalender">
	<span slot="h1">Onlinebokning</span>
	<span slot="title">Kaddio Bokning</span>
	<span slot="sub">
		Kaddio Bokning är kalender och bokningssystem i ett. Hantera bokningar, gruppass och möten i samma vy och få koll på läget.</span>

	<ModuleFeatureWithIcon icon="people-pants">
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

	<ModuleFeatureWithIcon icon="calendar-lines-pen">
		<span slot="title">Få kunder.</span>
		<span slot="body">
			Skapa bokningsbara tider direkt från din kalender. Låt kunderna boka och betala på egen hand eller styr allt själv.
		</span>
	</ModuleFeatureWithIcon>
</ModuleSectionWithImage>

<ModuleOverviewFeaturesSection>
	<span slot="pre">Innehåll</span>
	<span slot="title">Detta är Kaddio Bokning</span>
	<span slot="body">Med Kaddio Bokning planerar du organisationens verksamhet effektivt och överskådligt, oavsett om du är ensam behandlare eller del av ett större företag.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Samarbeta</span>

		<ModuleOverviewFeature>Mötesbokning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Stöd för flera platser</ModuleOverviewFeature>
		<ModuleOverviewFeature>Rumsbokning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Delad kalender</ModuleOverviewFeature>
		<ModuleOverviewFeature>Väntelistor</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Effektivisera</span>

		<ModuleOverviewFeature>Kalender och tidsbokning i samma vy</ModuleOverviewFeature>
		<ModuleOverviewFeature>Kortbetalning vid bokning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Incheckning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Dagrapporter</ModuleOverviewFeature>
		<ModuleOverviewFeature>Automatiska fakturaunderlag</ModuleOverviewFeature>
		<ModuleOverviewFeature>Mallfunktion</ModuleOverviewFeature>
		
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Få kunder</span>

		<ModuleOverviewFeature>Tidsbokning på hemsida</ModuleOverviewFeature>
		<ModuleOverviewFeature>Integration till Kuralink</ModuleOverviewFeature>
		<ModuleOverviewFeature>Söktjänsten Hitta Klinik</ModuleOverviewFeature>
		<ModuleOverviewFeature>Bokning med BankID</ModuleOverviewFeature>
		<ModuleOverviewFeature>Påminnelser via e-post och SMS</ModuleOverviewFeature>
		<ModuleOverviewFeature>Formulär vid bokning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Gruppbokning</ModuleOverviewFeature>

	</ModuleOverviewFeaturesSegment>
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
        Vad våra kunder säger om <br>Kaddio Bokning       
    </span>

	<Quote>
        Vi på Din Psykolog har haft stor hjälp av Kaddio i vårt arbete i att utveckla framtidens digitala vård, och de har varit väldigt tillmötesgående i utvecklingen av specifika funktioner vi behövt. Vi kan varmt rekommendera Kaddio!
        <span slot="quoted">
            Ramzi Jelassi <cite>Grundare  <a href="https://dinpsykolog.se" target="_blank" rel="noreferrer">Din Psykolog</a></cite>
        </span>
    </Quote>
    
    <Quote>
        Kaddio är användarvänligt, funktionellt och passar vår verksamhet perfekt!
        <span slot="quoted">
            Jimmy Lundqvist <cite>Chef IKSU fysio <a href="https://iksu.se" target="_blank" rel="noreferrer">IKSU</a></cite>
        </span>
    </Quote>
    
    <Quote>
        Jag har samma krav på mitt journalföringssystem som mina behandlingar: effektivitet. Därför använder jag Kaddio.
        <span slot="quoted">
            Jonas Evander <cite>Leg Psykolog <a href="https://afobia.se" target="_blank" rel="noreferrer">Afobia</a></cite>
        </span>
    </Quote>
    <Quote>
        Kaddio är det journalprogram jag valt pga enkelheten. Programmet är enkelt att navigera och fungerar smidigt att anpassa efter mina behov, både i journalföring och tidsbokning.
        <span slot="quoted">
            Amanda Follin <cite>Certifierad massageterapeut <a href="https://www.endorfinkliniken.com" target="_blank" rel="noreferrer">Endorfinkliniken</a></cite>
        </span>
    </Quote>

    <Quote>
        Programmet har allt jag behöver och det är lätt att använda och anpassa efter mina behov. Jag kan verkligen rekommendera detta journalsystem.
        <span slot="quoted">
            Sofia Viotti <cite>Leg Psykolog Compassionfocus
        </span>
    </Quote>
    
</QuotesSection>

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

<PricesSv></PricesSv>

<ContactDanielSv></ContactDanielSv>