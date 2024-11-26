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


	<title>Kaddio Marknadsföring</title>
	<meta name="description" content="Kaddio Marknadsföring." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/homepage-se.png" alt="Kaddio Marknadsföring">
	<span slot="h1">Visa upp din verksamhet</span>
	<span slot="title">Kaddio Marknadsföring</span>
	<span slot="sub">
		Kaddio Marknadsföring gör din verksamhet synlig på nätet och hjälper dig att nå ut till nya kunder.
	</span>
	
	<ModuleFeatureWithIcon icon="wand-sparkles">
		<span slot="title">Hemsida.</span>
		<span slot="body">
			Skapa en egen hemsida snabbt och smidigt genom Kaddio. 
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="person-chalkboard">
		<span slot="title">Söktjänst.</span>
		<span slot="body">
			Nå ut till fler med Kaddios söktjänst. Optimera för bättre träffar i sökmotorer. 
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="chart-line-up">
		<span slot="title">Omdömen.</span>
		<span slot="body">
			 Låt kunder lämna omdömen som visas på din hemsida och i Kaddios söktjänst.
		</span> 
	</ModuleFeatureWithIcon>




</ModuleSectionWithImage>

<!-- <ProductFeatureImageOnLeft src="/img/kaddio-screenshots/cal-se.png" alt="Söktjänst">
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
</ProductFeatureImageOnLeft> -->

<ModuleOverviewFeaturesSection>
	<span slot="title">Detta är Kaddio Marknadsföring</span>
	<span slot="body">Med Kaddio Marknadsföring får du hjälp att presentera din verksamhet <br>och nå ut till fler potentiella kunder.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Hemsida</span>
		
		<ModuleOverviewFeature>Ingår i ditt abonnemang</ModuleOverviewFeature>
		<ModuleOverviewFeature>Skapa en hemsida med några få klick</ModuleOverviewFeature>
		<ModuleOverviewFeature>Presentation av verksamheten</ModuleOverviewFeature>
		<ModuleOverviewFeature>Länk till tidsbokning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Huvudbild och flera mindre bilder</ModuleOverviewFeature>
		<ModuleOverviewFeature>Länkar till andra webbsidor</ModuleOverviewFeature>
		<ModuleOverviewFeature>Adress och karta med stöd för flera platser</ModuleOverviewFeature>
						
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
		
		<ModuleOverviewFeature>Tilläggstjänst till Kaddio Bokning</ModuleOverviewFeature>
		<ModuleOverviewFeature>Automatiska utskick med förfrågan om omdömen från kund</ModuleOverviewFeature>
		<ModuleOverviewFeature>Visa omdömen på din hemsida</ModuleOverviewFeature>
		<ModuleOverviewFeature>Visa omdömen i Kaddios söktjänst</ModuleOverviewFeature>
	
	</ModuleOverviewFeaturesSegment>

</ModuleOverviewFeaturesSection> 

<QuotesSection>
    <span slot="title">
        Vad våra kunder säger om <br>Kaddio Marknadsföring       
    </span>

	
	<QuoteSvJonas />
	<QuoteSvAmanda />

	<QuoteSvUlrika />

</QuotesSection>

<StatsSectionSv />

<PricesSv />

<ContactDanielSv /> 