<script>
	
import WithStickyScreenshot from "$components/withStickyScreenshot.svelte";
import ContentCentered from "$components/contentCentered.svelte";
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

<WithStickyScreenshot />

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