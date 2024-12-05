<script>

import WithStickyScreenshot from "$components/withStickyScreenshot.svelte";
import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
import ModuleFeatureWithIcon from "$components/moduleFeatureWithIcon.svelte";
import ModuleOverviewFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";

import WithImageTitles from "$components/withImageTitles.svelte";

import Timeline from "$components/timeline.svelte";
import TimelinePart from "$components/timeline-part.svelte";

import ContactDanielSv from "$components/contactDanielSv.svelte";
import PricesSv from "$components/pricesSv.svelte";
import StatsSectionSv from "$components/statsSectionSv.svelte";
</script>

<svelte:head>
    <title>Kaddio - 1177</title>
    <meta name="description" content="Kaddio bygger integration till 1177 och NPÖ" />
</svelte:head>


<ModuleSectionWithImage src="/img/kaddio-screenshots/1177.png" alt="Kaddio onlinebokning och kalender">
	<span slot="h1">På gång i Kaddio</span>
	<span slot="title">Integration med 1177</span>
	<span slot="sub">
		Kaddio bygger integration till 1177 och nationell patientöversikt för journaldata som en tilläggstjänst till modulen Journal. 
		Lanseringen beräknas till våren 2025.
	</span>

	<ModuleFeatureWithIcon icon="people-pants">
		<span slot="title">Lagkrav.</span>
		<span slot="body">
			Uppfyll de krav som ställs för att kunna arbeta mot region och kommun.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="stopwatch">
		<span slot="title">Access.</span>
		<span slot="body">
			Behandlare får tillgång till journalinformation för klienten från andra system med identifiering via SITHS. Patienter når sin journal via 1177.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="calendar-lines-pen">
		<span slot="title">Effektivitet.</span>
		<span slot="body">
			Få fördelarna med sammanhållen journalföring samtidigt som du jobbar i ett användarvänligt och webbaserat system.
		</span>
	</ModuleFeatureWithIcon>
</ModuleSectionWithImage>

<ModuleOverviewFeaturesSection>
	<span slot="title">Vad händer nu?</span>
	<span slot="body">Nationell patientöversikt, NPÖ, är ett verktyg som gör att vårdpersonal kan få en samlad bild av 
		en klients journaler hos samtliga vårdgivare. De uppgifter som vårdpersonal kan se i NPÖ kan också klienten 
		själv ta del av genom att logga in på 1177.se. </span>
</ModuleOverviewFeaturesSection>

	<span ><br>
		<br>
	Är du nyfiken eller har frågor? Kontakta oss på support@kaddio.com.</span>



<Timeline>
	<TimelinePart>
		<span slot="date">Q2 2024</span>
		<span slot="title">Projektstart</span>
		<span slot="sub">Kaddio ansöker om att bli agent för 1177 och NPÖ.</span>
	</TimelinePart>

	<TimelinePart>
		<span slot="date">Q3-Q4 2024</span>
		<span slot="title">Utveckling</span>
		<span slot="sub">Kaddio har agentavtal och integration byggs till 1177 och NPÖ.</span>
	</TimelinePart>

	<TimelinePart>
		<span slot="date">Q1 2025</span>
		<span slot="title">Test och validering</span>
		<span slot="sub">Kaddio testar och validerar integration tillsammans med pilotkunder.</span>
	</TimelinePart>

	<TimelinePart>
		<span slot="date">Q2 2025</span>
		<span slot="title">Lansering</span>
		<span slot="sub">Integrationen mot 1177 och NPÖ beräknas finnas i produktion som en modul.</span>
	</TimelinePart>

</Timeline>

<!-- <WithImageTitles />  -->


<!-- <StatsSectionSv />

<PricesSv /> -->

<ContactDanielSv />