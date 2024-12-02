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
	<span slot="h1">Integration till 1177
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
	<span slot="date-one">Dec 2024</span>
	<span slot="title-one">Testrubrik 1</span>
	<span slot="sub-one">Test av brödtext 1</span>

	<span slot="date-two">Jan 2025</span>
	<span slot="title-two">Testrubrik 2</span>
	<span slot="sub-two">Test av brödtext 2</span>

	<span slot="date-three">Mar 2025</span>
	<span slot="title-three">Testrubrik 3</span>
	<span slot="sub-three">Test av brödtext 3</span>

	<span slot="date-four">Jun 2025</span>
	<span slot="title-four">Testrubrik 4</span>
	<span slot="sub-four">Test av brödtext 4</span>
</NpoTimeline>

<!-- <WithImageTitles />  -->


<!-- <StatsSectionSv />

<PricesSv />

<ContactDanielSv /> -->