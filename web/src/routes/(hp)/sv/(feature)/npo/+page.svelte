<script>
import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
import ModuleFeatureWithIcon from "$components/moduleFeatureWithIcon.svelte";
import WithStickyScreenshot from "$components/withStickyScreenshot.svelte";
import ContentCentered from "$components/contentCentered.svelte";
import WithImageTitles from "$components/withImageTitles.svelte";
import Timeline from "$components/timeline.svelte";
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

<!-- <ModuleSectionWithImage src="/img/kaddio-screenshots/chat-sv.png" alt="Kaddio Journalsystem">
	<span slot="h1">Kommunikation</span>
	<span slot="title">Kaddio Chat och Video</span>
	<span slot="sub">
		Kaddio Chat och Video gör att du kan kommunicera och dela information säkert med klienter och kollegor. Kaddio uppfyller Socialstyrelsens krav på stark autentisering.
	</span>

    <ModuleFeatureWithIcon icon="comment">
		<span slot="title">Kommunicera.</span>
		<span slot="body">
			Videosamtal, chat och kontaktformulär i en krypterad miljö. 
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="share">
		<span slot="title">Dela information.</span>
		<span slot="body">
			Skicka känslig information, filer och bilder till klienter och kollegor på ett säkert.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="lock-keyhole">
		<span slot="title">Säkerhetsanpassa.</span>
		<span slot="body">
			Kräv inloggning till videosamtal och chat med Mobilt BankID eller
            tvåfaktorsautentisering.
		</span> 
	</ModuleFeatureWithIcon>

</ModuleSectionWithImage> -->

<!-- <ContentCentered />

<WithImageTitles /> -->

<Timeline />



<!-- <StatsSectionSv />

<PricesSv />

<ContactDanielSv /> -->