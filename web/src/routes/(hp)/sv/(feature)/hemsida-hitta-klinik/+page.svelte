<script>
    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
    import ModuleFeatureWithIcon from "$components/moduleFeatureWithIcon.svelte";
    import ModuleOverviewFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeature from "$components/moduleOverviewFeature.svelte";
    import ModuleOverviewFeaturesSegment from "$components/moduleOverviewFeaturesSegment.svelte";
    import Quote from "$components/quote.svelte";
    import QuotesSection from "$components/quotesSection.svelte";
	import QuoteSvAmanda from "$components/quote-sv-amanda.svelte";
	import QuoteSvJimmy from "$components/quote-sv-jimmy.svelte";
	import QuoteSvJonas from "$components/quote-sv-jonas.svelte";
	import QuoteSvKim from "$components/quote-sv-kim.svelte";
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

<ModuleSectionWithImage src="/img/kaddio-screenshots/log-overview-se.png" alt="Kaddio Journalsystem">
	<span slot="h1">Hemsida</span>
	<span slot="title">Kaddio Hemsida</span>
	<span slot="sub">
		Kaddio Hemsida gör det enkelt för dina kunder att hitta information och hjälper dig att nå ut till fler.
	</span>

	<ModuleFeatureWithIcon icon="pen">
		<span slot="title">Informera.</span>
		<span slot="body">
			Presentera din verksamhet, visa kontaktuppgifter och låt kunder boka tid.
		</span> 
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="sliders">
		<span slot="title">Förenkla.</span>
		<span slot="body">
			Låt Kaddio automatiskt generera en hemsida och slipp tekniskt krångel.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="lock-keyhole">
		<span slot="title">Nå ut till fler.</span>
		<span slot="body">
			Styr åtkomst till klienter och journaler. Följ aktivitet i journaler genom Kaddios loggar.
		</span>
	</ModuleFeatureWithIcon>

</ModuleSectionWithImage>

<ModuleSectionWithImage src="/img/silvia-at-desk.png" alt="Söksida">
	<span slot="h1">Söksida</span>
	<span slot="title">Kaddio Söksida</span>
	<span slot="sub">
		Kaddio Söksida är en publik söktjänst där nya kunder kan hitta din verksamhet. Nå ut till fler och väx med Kaddio.
	</span>

	<ModuleFeatureWithIcon icon="chart-line-up">
		<span slot="title">Öka omsättningen</span>
		<span slot="body">
			Var med på Kaddios söksida och nå ut till fler kunder.
		</span> 
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="star">
		<span slot="title">Visa omdömen.</span>
		<span slot="body">
			Låt kunder lämna omdömen som visas publikt på Kaddios söksida.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="magnifying-glass">
		<span slot="title">Sökmotoroptimera.</span>
		<span slot="body">
			Få bättre träffar på sökmotorer genom att ange nyckelord och beskrivningar.
		</span>
	</ModuleFeatureWithIcon>

</ModuleSectionWithImage>

<ModuleOverviewFeaturesSection>
	<span slot="title">Detta är Kaddio Hemsida</span>
	<span slot="body">Med Kaddio Journal journalför du säkert och smidigt på det sätt som passar din verksamhet. Sköt allt i samma system och få tid över till annat.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Dokumentera</span>
		
		<ModuleOverviewFeature>Fri utformning av anteckningsmallar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Stöd för malltext och fraser</ModuleOverviewFeature>
		<ModuleOverviewFeature>Uppladdning av egna bilder att rita på</ModuleOverviewFeature>
		<ModuleOverviewFeature>Filuppladdning i journalanteckningar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Diagnoser enligt ICD-10</ModuleOverviewFeature>
		<ModuleOverviewFeature>Standardformulär direkt i journalen</ModuleOverviewFeature>
		<ModuleOverviewFeature>Bygg egna formulär</ModuleOverviewFeature>
		
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Följ upp</span>

		<ModuleOverviewFeature>Automatiserade utskick och insamling av formulär</ModuleOverviewFeature>
		<ModuleOverviewFeature>Remisser via brev, e-post och chat</ModuleOverviewFeature>
		<ModuleOverviewFeature>Export av journalanteckningar som PDF</ModuleOverviewFeature>
		<ModuleOverviewFeature>Översikt över bokningar, fakturor och uppgifter</ModuleOverviewFeature>
		<ModuleOverviewFeature>Samlingsräkning</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Säkerställ</span>
		
		<ModuleOverviewFeature>Krypterad journalföring</ModuleOverviewFeature>
		<ModuleOverviewFeature>Behörighetsstyrning för journaler</ModuleOverviewFeature>
		<ModuleOverviewFeature>Signering av anteckningar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Historik för redigering av anteckningar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Listning av osignerade anteckningar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Logg över läsning och redigering av journaler</ModuleOverviewFeature>
		

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