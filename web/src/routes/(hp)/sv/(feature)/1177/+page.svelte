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
	<span slot="h1">Integration till 1177 </span>
	<span slot="sub">Planerad lansering under 2025.</span>
	<span slot="p1">Här hamnar brödtexten som vackert beskriver vårt pågående arbete med integration till NPÖ.</span>
	<span slot="h2">Trevlig underrubrik</span>
	<span slot="strong1">Fetstilt 1</span>
	<span slot="li1">Trevlig lista 1</span>
	<span slot="strong2">Fetstilt 2</span>
	<span slot="li2">Trevlig lista 2</span>
	<span slot="strong3">Fetstilt 3</span>
	<span slot="li3">Trevlig lista 3</span>
	<span slot="p2">Trevlig brödtext</span>
	<span slot="p3">Trevlig brödtext</span>
</WithStickyScreenshot>

<NpoTimeline>
	<span slot="date-one">Q1 2024</span>
	<span slot="title-one">Projektstart</span>
	<span slot="sub-one">Projektet klubbas igenom internt och Kaddio ansöker om att bli agent för NPÖ.</span>

	<span slot="date-two">Q4 2024</span>
	<span slot="title-two">Bygge av integration</span>
	<span slot="sub-two">Kaddio är godkända som agent. <br>Våra utvecklare bygger integrationen till 1177 och NPÖ.</span>

	<span slot="date-three">Början av Q1 2025</span>
	<span slot="title-three">Test och validering</span>
	<span slot="sub-three">Bygget testas och kvalitetssäkras.</span>

	<span slot="date-four">Slutet av Q1 2025</span>
	<span slot="title-four">Integration i produktion</span>
	<span slot="sub-four">Integrationen mot 1177 och NPÖ släpps i produktion och blir tillgänglig för våra kunder och deras klienter.</span>

	<!-- <span slot="date-five"></span>
	<span slot="title-five"></span>
	<span slot="sub-five"></span> -->
</NpoTimeline>

<!-- <WithImageTitles />  -->


<!-- <StatsSectionSv />

<PricesSv />

<ContactDanielSv /> -->