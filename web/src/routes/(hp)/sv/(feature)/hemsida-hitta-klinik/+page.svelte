<script>
    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
    import ModuleFeatureWithIcon from "$components/moduleFeatureWithIcon.svelte";
    import ModuleOverviewFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeature from "$components/moduleOverviewFeature.svelte";
    import ModuleOverviewFeaturesSegment from "$components/moduleOverviewFeaturesSegment.svelte";

    import QuotesSection from "$components/quotesSection.svelte";
	import QuoteSvAmanda from "$components/quote-sv-amanda.svelte";
	import QuoteSvJimmy from "$components/quote-sv-jimmy.svelte";
	import QuoteSvJonas from "$components/quote-sv-jonas.svelte";
	import QuoteSvRamzi from "$components/quote-sv-ramzi.svelte";
	import QuoteSvSofia from "$components/quote-sv-sofia.svelte";
	import QuoteSvUlrika from "$components/quote-sv-ulrika.svelte";
	import ContactDanielSv from "$components/contactDanielSv.svelte";
	import PricesSv from "$components/pricesSv.svelte";
	import StatsSectionSv from "$components/statsSectionSv.svelte";
	import ProductFeatureImageOnLeft from "$components/productFeatureImageOnLeft.svelte";
</script>

<svelte:head>


	<title>Kaddio Hemsida och Söksida</title>
	<meta name="description" content="Kaddio Hemsida och Söksida." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/homepage-se.png" alt="Kaddio Journalsystem">
	<span slot="h1">Hemsida-Modulnamn</span>
	<span slot="title">Kaddio Hemsida-Modulnamn</span>
	<span slot="sub">
		Kaddio Hemsida-Modulnamn gör det enkelt för dina kunder att hitta information och hjälper dig att nå ut till fler.
	</span>
	
	<ModuleFeatureWithIcon icon="wand-sparkles">
		<span slot="title">Förenkla.</span>
		<span slot="body">
			Låt Kaddio generera en hemsida automatiskt och slipp tekniskt krångel. 
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="person-chalkboard">
		<span slot="title">Presentera.</span>
		<span slot="body">
			Visa upp organisationen och bokningsbara tider. Låt kunder lämna omdömen som visas publikt på Kaddios söksida.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="chart-line-up">
		<span slot="title">Öka omsättningen.</span>
		<span slot="body">
			Nå ut till fler med Kaddios söktjänst. Optimera för bättre träffar i sökmotorer.
		</span> 
	</ModuleFeatureWithIcon>




</ModuleSectionWithImage>

<ProductFeatureImageOnLeft src="/img/kaddio-screenshots/hittaklinik-se.png" alt="Söktjänst">
	<span slot="pre">Väx med Kaddio</span>
	<span slot="title">Söktjänst</span>
	<span slot="body">Kaddio har en publik söktjänst där du som har hemsida via Kaddio finns med. 
		Din organisation kan hittas på plats, verksamhetsområde och nyckelord som du själv bestämmer.<br> 
		<br>
		Genom söktjänsten kan du lägga in beskrivningar för sökmotoroptimering, SEO, 
		så att din organisation får bättre träffar på sökmotorer. Du kan också be kunder om omdömen som visas på din sida i söktjänsten.<br>
		<br>
		Var med på söktjänsten du med och nå ut till fler!<br>
		<br>	
		<a href="/sv/hitta-klinik" class="font-semibold text-oldpink">Testa Kaddios söktjänst → </a> 
	</span>
</ProductFeatureImageOnLeft>

<ModuleOverviewFeaturesSection>
	<span slot="title">Detta är Kaddio Hemsida-Modulnamn</span>
	<span slot="body">Med Kaddio Hemsida-Modulnamn får du hjälp att presentera din verksamhet <br>och nå ut till fler kunder.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Förenkla</span>
		
		<ModuleOverviewFeature>Automatisk generering av hemsida</ModuleOverviewFeature>
		<ModuleOverviewFeature>Visning av lediga tider</ModuleOverviewFeature>
		<ModuleOverviewFeature>Automatiska utskick med förfrågan om omdömen från kund</ModuleOverviewFeature>
		<ModuleOverviewFeature></ModuleOverviewFeature>
				
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Presentera</span>

		<ModuleOverviewFeature>Beskrivning av  verksamheten</ModuleOverviewFeature>
		<ModuleOverviewFeature>Presentation av personal</ModuleOverviewFeature>
		<ModuleOverviewFeature>Bilder och länkar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Mottagningsadresser och karta</ModuleOverviewFeature>
		<ModuleOverviewFeature></ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Öka omsättningen</span>
		
		<ModuleOverviewFeature>Publik söksida för blivande kunder</ModuleOverviewFeature>
		<ModuleOverviewFeature>Sökmotoroptimering, SEO</ModuleOverviewFeature>
		<ModuleOverviewFeature>Visning av omdömen från kund</ModuleOverviewFeature>
		<ModuleOverviewFeature></ModuleOverviewFeature>
				

	</ModuleOverviewFeaturesSegment>

</ModuleOverviewFeaturesSection> 

<QuotesSection>
    <span slot="title">
        Vad våra kunder säger om Kaddio Hemsida       
    </span>

	<QuoteSvRamzi />
	<QuoteSvJimmy />
	<QuoteSvJonas />
	<QuoteSvAmanda />
	<QuoteSvSofia />
	<QuoteSvUlrika />

</QuotesSection>

<StatsSectionSv />

<PricesSv></PricesSv>

<ContactDanielSv /> 