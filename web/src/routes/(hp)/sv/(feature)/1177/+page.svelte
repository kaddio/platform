<script>

import WithStickyScreenshot from "$components/withStickyScreenshot.svelte";

import WithImageTitles from "$components/withImageTitles.svelte";

import NpoTimeline from "$components/npo-timeline.svelte";

// import ContactDanielSv from "$components/contactDanielSv.svelte";
// import PricesSv from "$components/pricesSv.svelte";
// import StatsSectionSv from "$components/statsSectionSv.svelte";
</script>

<svelte:head>


    <title>Kaddio - Kommunikation</title>
    <meta name="description" content="Chat och video för upp till 500 samtidiga deltagare" />
</svelte:head>

<WithStickyScreenshot>
	<span slot="pre">På gång i Kaddio</span>
	<span slot="h1">Integration till <br>NPÖ och 1177 </span>
	<span slot="sub">Kaddio bygger integration till 1177 och nationell patientöversikt för journaldata. 
		Lanseringen beräknas till våren 2025.</span>
	<span slot="p1">Nationell patientöversikt, NPÖ, är ett verktyg för sammanhållen journalföring inom vården. 
		Genom NPÖ kan vårdpersonal få en samlad bild av en klients journaler hos samtliga vårdgivare. 
		De uppgifter som vårdpersonal kan se i NPÖ kan också klienten själv ta del av genom att logga in på 1177.se.</span>
	<span slot="h2">Vad integrationen betyder för dig som kund</span>
	<span slot="strong1">Lagkrav </span>
	<span slot="li1">Uppfyll de krav som ställs för att kunna arbeta mot region och kommun.</span>
	<span slot="strong2">Access </span>
	<span slot="li2">Behandlare får tillgång till journalinformation för klienten från andra system på ett smidigt och säkert sätt. 
		Klienter når sin journal själva via 1177.</span>
	<span slot="strong3">Flexibilitet </span>
	<span slot="li3">Få fördelarna med sammanhållen journalföring samtidigt som du jobbar i ett användarvänligt och webbaserat system.</span>
	<span slot="h3">Vad händer nu?</span>
	<span slot="p2">Kaddio har godkänts som agent av Inera, det bolag som utvecklar och förvaltar digitala tjänster för invånare genom 1177. 
		Kodbygget är i full gång och lanseringen av integrationen kommer preliminärt att ska under våren 2025.</span>
</WithStickyScreenshot>

<NpoTimeline>
	<span slot="date-one">Q1 2024</span>
	<span slot="title-one">Projektstart</span>
	<span slot="sub-one">Projektet klubbas igenom internt och Kaddio ansöker om att bli agent för NPÖ.</span>

	<span slot="date-two">Q4 2024</span>
	<span slot="title-two">Bygge av integration</span>
	<span slot="sub-two">Kaddio är godkända som agent. <br>Våra utvecklare bygger integrationen till 1177 och NPÖ.</span>

	<span slot="date-three">Q1 2025</span>
	<span slot="title-three">Test och validering</span>
	<span slot="sub-three">Bygget testas och kvalitetssäkras.</span>

	<span slot="date-four">Våren 2025</span>
	<span slot="title-four">Integrationen i produktion</span>
	<span slot="sub-four">Integrationen mot 1177 och NPÖ släpps i produktion och blir tillgänglig för våra kunder och deras klienter.</span>

	<!-- <span slot="date-five"></span>
	<span slot="title-five"></span>
	<span slot="sub-five"></span> -->
</NpoTimeline>

<!-- <WithImageTitles />  -->


<!-- <StatsSectionSv />

<PricesSv />

<ContactDanielSv /> -->