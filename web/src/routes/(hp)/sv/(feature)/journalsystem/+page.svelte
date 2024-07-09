<script>
	import Qa from "$components/qa.svelte";
	import FaqSection from "$components/faqSection.svelte";
    import ModuleSectionWithImage from "$components/moduleSectionWithImage.svelte";
    import ModuleFeatureWithIcon from "$components/moduleFeatureWithIcon.svelte";
	export let data;
	import ModuleFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeaturesSection from "$components/moduleOverviewFeaturesSection.svelte";
    import ModuleOverviewFeature from "$components/moduleOverviewFeature.svelte";
    import ModuleOverviewFeaturesSegment from "$components/moduleOverviewFeaturesSegment.svelte";
    import ProductFeatureImageOnLeft from "$components/productFeatureImageOnLeft.svelte";
    import Quote from "$components/quote.svelte";
    import QuotesSection from "$components/quotesSection.svelte";
    import ProductPricingSection from "$components/productPricingSection.svelte";
    import StatsSection from "$components/statsSection.svelte";
    import StatsSectionPart from "$components/statsSectionPart.svelte";
    import StatsSectionWithText from "$components/statsSectionWithText.svelte";
    import StatsSectionWithTextPart from "$components/statsSectionWithTextPart.svelte";
</script>

<svelte:head>
	<meta name="robots" content="noindex">

	<title>Journalsystem med allt du behöver</title>
	<meta name="description" content="Kaddio Journal har allt du behöver för att dokumentera verksamheten och journalföra klienter. Ett komplett journalsystem för vård." />
</svelte:head>

<ModuleSectionWithImage src="/img/kaddio-screenshots/log-overview-se.png" alt="Kaddio Journalsystem">
	<span slot="h1">Journalsystem</span>
	<span slot="title">Kaddio Journal</span>
	<span slot="sub">
		Kaddio Journal har allt du behöver för att dokumentera verksamheten och journalföra klienter. Ett komplett journalsystem för vård helt enkelt.
	</span>

	<ModuleFeatureWithIcon icon="pen">
		<span slot="title">Dokumentera.</span>
		<span slot="body">
			Journalför på ett säkert sätt, där och när du vill. Slipp pappershantering, pärmar och backup.
		</span> 
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="sliders">
		<span slot="title">Anpassa.</span>
		<span slot="body">
			Utforma mallar för journalanteckningar utifrån verksamhetens behov. 
			<!-- Spara tid genom att sätta upp mallar med malltexter, lägg in egna bilder att rita på samt egna kortkommandon för dina vanliga fraser. -->
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="gamepad-modern">
		<span slot="title">Kontrollera.</span>
		<span slot="body">
			Styr åtkomst till klienter och journaler. Du bestämmer själv vem som kommer åt vad.
			<!-- Följ aktivitet i journaler genom Kaddios log för spårbarhet och regelefterlevnad. -->
		</span>
	</ModuleFeatureWithIcon>

</ModuleSectionWithImage>

<ProductFeatureImageOnLeft src="/img/ana-with-skeleton.png" alt="Ana Casanovas is giving a treatment">
	<span slot="pre">Inspirerande text och bild</span>
	<span slot="title">Därför använder X Kaddio Journal</span>
	<span slot="body">Distinctio et nulla eum soluta et neque labore quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</span>
</ProductFeatureImageOnLeft>

<ModuleOverviewFeaturesSection>
	<span slot="pre">Innehåll</span>
	<span slot="title">Detta är Kaddio Journal</span>
	<span slot="body">Med Kaddio Journal journalför du säkert och smidigt på det sätt som passar din verksamhet. Kaddio sköter datalagringen. Du får tid över till annat.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Dokumentera</span>
		<!-- <span slot="body">Funktioner för att ge dig en smärtfri upplevelse</span> -->

		<ModuleOverviewFeature>Journalför säkert via dator och mobil </ModuleOverviewFeature>
		<ModuleOverviewFeature>Rita på bilder direkt i journalen</ModuleOverviewFeature>
		<ModuleOverviewFeature>Ladda upp filer i journalanteckningar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Ange diagnoser enligt ICD-10</ModuleOverviewFeature>
		<ModuleOverviewFeature>Skicka och ta emot standardformulär direkt i journalen</ModuleOverviewFeature>
		<ModuleOverviewFeature>Exportera hela journalen eller enskilda anteckningar som PDF</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Anpassa</span>
		<!-- <span slot="body">Funktioner för göra samarbetet smidigare</span> -->

		<ModuleOverviewFeature>Skapa egna anteckningsmallar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Spara tid med malltext och fraser</ModuleOverviewFeature>
		<ModuleOverviewFeature>Ladda upp egna bilder att rita på</ModuleOverviewFeature>
		<ModuleOverviewFeature>Utforma egna formulär</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Kontrollera</span>
		<!-- <span slot="body">Funktioner för att spara tid</span> -->

		<ModuleOverviewFeature>Styr behörigheter till journaler</ModuleOverviewFeature>
		<ModuleOverviewFeature>Signera och redigera anteckningar med full historik</ModuleOverviewFeature>
		<ModuleOverviewFeature>Lista osignerade anteckningar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Logga läsning och redigering av journaler</ModuleOverviewFeature>
		

	</ModuleOverviewFeaturesSegment>

</ModuleOverviewFeaturesSection> 

<QuotesSection>
    <span slot="title">
        Vad våra kunder säger om Journalmodulen       
    </span>

    <Quote>
        Vi på Din Psykolog har haft stor hjälp av Kaddio i vårt arbete i att utveckla framtidens digitala vård, och de har varit väldigt tillmötesgående i utvecklingen av specifika funktioner vi behövt. Vi kan varmt rekommendera Kaddio!
        <span slot="quoted">
            Ramzi Jelassi <cite>Grundare  <a href="https://dinpsykolog.se" target="_blank" rel="noreferrer">Din Psykolog</a></cite>
        </span>
    </Quote>

    <Quote>
        Kaddio är användarvänligt, funktionellt och passar vår verksamhet perfekt!
        <span slot="quoted">
            Jimmy Lundqvist <cite>Chef IKSU fysio <a href="https://iksu.se" target="_blank" rel="noreferrer">IKSU</a></cite>
        </span>
    </Quote>
    
</QuotesSection>

<ProductPricingSection></ProductPricingSection>

<StatsSectionWithText>
    <StatsSectionWithTextPart>
		<span slot="title">användare</span>
		<span slot="sub">47 000+</span>
    </StatsSectionWithTextPart>

    <StatsSectionWithTextPart>
		<span slot="title">bokningar per dygn</span>
		<span slot="sub">1300+</span>
    </StatsSectionWithTextPart>

    <StatsSectionWithTextPart>
		<span slot="title">videomöten per månad</span>
		<span slot="sub">8500+</span>
    </StatsSectionWithTextPart>
</StatsSectionWithText>

<StatsSection>
	<StatsSectionPart>
		<span slot="title">användare</span>
		<span slot="sub">47 000+</span>
	</StatsSectionPart>
	<StatsSectionPart>
		<span slot="title">bokningar per dygn</span>
		<span slot="sub">1300+</span>
	</StatsSectionPart>
	<StatsSectionPart>
		<span slot="title">videomöten per månad</span>
		<span slot="sub">8500+</span>
	</StatsSectionPart>
</StatsSection>

<!-- <FaqSection>
	<span slot="title">Detaljer</span>

	<Qa>
		<span slot="q">Anteckningsmallar</span>
		<span slot="a">
			Skapa dina egna mallar för journalanteckningar så de passar din verksamhet. Välj dina egna sökord/rubriker. Använd malltext, fraser, filuppladdning och mer.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Journalformulär</span>
		<span slot="a">
			Skapa dina egna formulär eller använd vanligt förekommande standardformulär direkt från Kaddio. Skicka skattningsformulär och hälsodeklarationer via e-post och sms. Journalformulär kan skickas automatiskt i samband med bokning eller manuellt vid behov. Svaren sparas i journalen.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Brev och remisser</span>
		<span slot="a">
			Skapa brev, remisser, remissvar och intyg. Skicka med post, via Kaddios chat eller ladda ner som PDF.
		</span>
	</Qa>

	<Qa>
		<span slot="q">ICD-10</span>
		<span slot="a">
			Sök med kod eller fritext och lägg till diagnoser i varje journalanteckning.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Behörigheter</span>
		<span slot="a">
			Välj om alla i verksamheten ska kunna läsa klienters journal eller om behörigheten ska begränsas till vissa behandlare.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Rita på standardbilder</span>
		<span slot="a">
			Rita på Kaddios standardbilder för att dokumentera till exempel var klienten upplever smärta.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Rita på egna bilder</span>
		<span slot="a">
			Ladda upp egna bilder att rita på så att det passar din verksamhet.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Lista osignerade anteckningar</span>
		<span slot="a">
			Håll koll på anteckningar som väntar på att bli signerade.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Exportera/skriv ut</span>
		<span slot="a">
			Exportera och skriv ut enskild journalanteckning eller hela journalen till PDF.
		</span>
	</Qa>

	<Qa>
		<span slot="q">Loggning</span>
		<span slot="a">
			Läsning och redigering loggas. Loggen visar vad som gjorts med en viss klients journal och av vem, när och från vilken ip-adress.
		</span>
	</Qa>

	<Qa>
		<span slot="q">API</span>
		<span slot="a">
			Läsning och redigering loggas. Loggen visar vad som gjorts med en viss klients journal och av vem, när och från vilken ip-adress.
		</span>
	</Qa>

</FaqSection>

{#if data.pkgs?.length > 0}
	<FaqSection>
		<span slot="title">Inbyggda formulär i Kaddio</span>

		{#each data.pkgs as pkg}
			<Qa>
				<span slot="q">{pkg.name}</span>
				<span slot="a">
					{pkg.desc}
				</span>
			</Qa>
		{/each}
	</FaqSection>
{/if} -->