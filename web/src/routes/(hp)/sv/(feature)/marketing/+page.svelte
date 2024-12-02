<script>
    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
    import ModuleFeatureWithIcon from "$components/moduleFeatureWithIcon.svelte";
    import ModuleOverviewFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeature from "$components/moduleOverviewFeature.svelte";
    import ModuleOverviewFeaturesSegment from "$components/moduleOverviewFeaturesSegment.svelte";

    import QuotesSection from "$components/quotesSection.svelte";
	import QuoteSvAmanda from "$components/quote-sv-amanda.svelte";

	import QuoteSvJonas from "$components/quote-sv-jonas.svelte";

	import QuoteSvUlrika from "$components/quote-sv-ulrika.svelte";
	import ContactDanielSv from "$components/contactDanielSv.svelte";
	import PricesSv from "$components/pricesSv.svelte";
	import StatsSectionSv from "$components/statsSectionSv.svelte";

</script>

<svelte:head>


	<title>Kaddio Marknadsföring</title>
	<meta name="description" content="Kaddio Marknadsföring." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/marketing-se.png" alt="Kaddio Marknadsföring">
	<span slot="h1">Visa upp din verksamhet</span>
	<span slot="title">Kaddio Marknadsföring</span>
	<span slot="sub">
		Kaddio Marknadsföring gör din verksamhet synlig på nätet och hjälper dig att nå ut till nya kunder.
	</span>
	
	<ModuleFeatureWithIcon icon="browser">
		<span slot="title">Hemsida.</span>
		<span slot="body">
			Skapa en egen hemsida snabbt och smidigt genom Kaddio. 
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="magnifying-glass">
		<span slot="title">Söktjänst.</span>
		<span slot="body">
			Nå ut till fler kunder med Kaddios söktjänst. Optimera för bättre träffar i sökmotorer. 
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="star">
		<span slot="title">Omdömen.</span>
		<span slot="body">
			 Låt kunder lämna omdömen som visas på din hemsida och i Kaddios söktjänst.
		</span> 
	</ModuleFeatureWithIcon></ModuleSectionWithImage>

<ModuleOverviewFeaturesSection>
	<span slot="title">Detta är Kaddio Marknadsföring</span>
	<span slot="body">Med Kaddio Marknadsföring får du hjälp att presentera din verksamhet <br>och nå ut till fler potentiella kunder.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Hemsida</span>
		
		<ModuleOverviewFeature>Ingår i ditt abonnemang</ModuleOverviewFeature>
		<ModuleOverviewFeature>Skapa en hemsida med några få klick</ModuleOverviewFeature>
		<ModuleOverviewFeature>Presentation av din verksamhet</ModuleOverviewFeature>
		<ModuleOverviewFeature>Tidsbokning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Kontaktformulär</ModuleOverviewFeature>
		<ModuleOverviewFeature>Bilder</ModuleOverviewFeature>
		<ModuleOverviewFeature>Länkar till andra webbsidor</ModuleOverviewFeature>
		<ModuleOverviewFeature>Adress och karta</ModuleOverviewFeature>
		<ModuleOverviewFeature>Omdömen från kunder</ModuleOverviewFeature>
						
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Söktjänst</span>

		<ModuleOverviewFeature>Ingår i ditt abonnemang</ModuleOverviewFeature>
		<ModuleOverviewFeature>Publik söksida för blivande kunder</ModuleOverviewFeature>
		<ModuleOverviewFeature>Bättre sökträffar på Google med sökmotoroptimering</ModuleOverviewFeature>
		<ModuleOverviewFeature>Öka trafiken till din hemsida</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Omdömen</span>
		
		<ModuleOverviewFeature>Skicka omdömesförfrågan via e-post</ModuleOverviewFeature>
		<ModuleOverviewFeature>Automatiska utskick med förfrågan om omdömen efter bokning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Visa omdömen på din hemsida</ModuleOverviewFeature>
		<ModuleOverviewFeature>Visa omdömen i Kaddios söktjänst</ModuleOverviewFeature>
	
	</ModuleOverviewFeaturesSegment>

</ModuleOverviewFeaturesSection> 

<!-- <QuotesSection>
    <span slot="title">
        Vad våra kunder säger om <br>Kaddio Marknadsföring       
    </span>

	
	<QuoteSvJonas />
	<QuoteSvAmanda />

	<QuoteSvUlrika />

</QuotesSection> -->

<StatsSectionSv />

<PricesSv />

<ContactDanielSv />