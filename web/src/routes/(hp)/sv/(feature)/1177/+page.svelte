<script>

import WithStickyScreenshot from "$components/withStickyScreenshot.svelte";

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

<WithStickyScreenshot>
	<span slot="pre">På gång i Kaddio</span>
	<span slot="h1">Integration till <br>NPÖ och 1177 </span>
	<span slot="sub">Kaddio bygger integration till 1177 och nationell patientöversikt för journaldata som en tilläggstjänst till modulen Journal. 
		Lanseringen beräknas till våren 2025.</span>
	<span slot="p1">Nationell patientöversikt, NPÖ, är ett verktyg som gör att vårdpersonal kan få en samlad bild av 
		en klients journaler hos samtliga vårdgivare. De uppgifter som vårdpersonal kan se i NPÖ kan också klienten 
		själv ta del av genom att logga in på 1177.se.</span>
	<span slot="p2"><br>Kaddio bygger nu en integration till NPÖ och 1177 vilket innebär nya möjligheter för dig som 
		journalför i Kaddio: </span>
	<span slot="strong1">Lagkrav &nbsp;</span>
	<span slot="li1"> Uppfyll de krav som ställs för att kunna arbeta mot region och kommun.</span>
	<span slot="strong2">Access &nbsp;</span>
	<span slot="li2"> Behandlare får tillgång till journalinformation för klienten från andra system med identifiering via SITHS. 
		Klienter når sin journal själva via 1177.</span>
	<span slot="strong3">Flexibilitet &nbsp;</span>
	<span slot="li3">Få fördelarna med sammanhållen journalföring samtidigt som du jobbar i ett användarvänligt och webbaserat system.</span>
	<span slot="h3">Vad händer nu?</span>
	<span slot="p3">Kaddio har godkänts som agent av Inera, det bolag som utvecklar och förvaltar digitala tjänster för invånare genom 1177. 
		Kodbygget är i full gång och lanseringen av integrationen kommer preliminärt att ske under våren 2025. Integrationen blir en tillägstjänst till modulen Journal.<br>
		<br>
	Är du nyfiken eller har frågor? Kontakta oss på support@kaddio.com.</span>
</WithStickyScreenshot>

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