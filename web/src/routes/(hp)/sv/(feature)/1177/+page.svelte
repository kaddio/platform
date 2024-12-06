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
    <meta name="description" content="Kaddio bygger integration med 1177 och NPÖ" />
</svelte:head>


<ModuleSectionWithImage src="/img/kaddio-screenshots/1177.png" alt="Kaddio onlinebokning och kalender">
	<span slot="h1">Nyhet i Kaddio</span>
	<span slot="title">Integration med 1177</span>
	<span slot="sub">
		Kaddio bygger integration med 1177 och NPÖ, integrationen kommer att erbjudas som en tilläggstjänst våren 2025.
	</span>

	<ModuleFeatureWithIcon icon="people-pants">
		<span slot="title">Lagkrav.</span>
		<span slot="body">
			Uppfyll de krav som ställs för att arbeta mot svenska regioner.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="stopwatch">
		<span slot="title">Access.</span>
		<span slot="body">
			Vårdgivaren får tillgång till journalinformation för patienten från andra system med identifiering via SITHS. Patienter når själva sin journal på 1177.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="calendar-lines-pen">
		<span slot="title">Effektivitet.</span>
		<span slot="body">
			Få fördelarna med sammanhållen journalföring samtidigt som du jobbar i ett modernt journalsystem.
		</span>
	</ModuleFeatureWithIcon>
</ModuleSectionWithImage>

<ModuleOverviewFeaturesSection>
	<span slot="title">Vad händer nu?</span>
	<span slot="body">Kaddio bygger just nu integration mot 1177 och Nationell patientöversikt (NPÖ). Nedan kan du se vår tidslinje över projektet.

		<div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="/sv/sales" class="rounded-md bg-oldpink px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-oldpinkdarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Kontakta sälj</a>
          <a target="_blank" href="https://eepurl.com/gsgcG5" class="text-sm/6 font-semibold text-black">Kaddio nyhetsbrev <span aria-hidden="true">→</span></a>
        </div>	

	</span>

</ModuleOverviewFeaturesSection>



<Timeline>
	<TimelinePart>
		<span slot="date">Q2 2024</span>
		<span slot="title">Projektstart</span>
		<span slot="sub">Kaddio ansöker om att bli agent för 1177 och NPÖ.</span>
	</TimelinePart>

	<TimelinePart>
		<span slot="date">Q3-Q4 2024</span>
		<span slot="title">Utveckling</span>
		<span slot="sub">Kaddio har agentavtal och integration byggs med 1177 och NPÖ.</span>
	</TimelinePart>

	<TimelinePart>
		<span slot="date">Q1 2025</span>
		<span slot="title">Test och validering</span>
		<span slot="sub">Kaddio testar och validerar integration tillsammans med pilotkunder.</span>
	</TimelinePart>

	<TimelinePart>
		<span slot="date">Q2 2025</span>
		<span slot="title">Lansering</span>
		<span slot="sub">Integrationen med 1177 och NPÖ lanseras som tilläggstjänst i Kaddio.</span>
	</TimelinePart>

</Timeline>

<ContactDanielSv />