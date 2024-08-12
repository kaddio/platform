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
	import SalesSection from "$components/salesSection.svelte";
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

<ProductFeatureImageOnLeft src="/img/silvia-at-desk.png" alt="Silvia Triay at desk">
	<span slot="pre">Silvia Tiray, osteopat @ Osteopatía Mallorca, Spanien</span>
	<span slot="title">Därför använder Silvia <br>Kaddio Journal</span>
	<span slot="body"><cite>"Kaddio passar vårt sätt att arbeta med osteopatiska konsultationer och är enkelt att använda, även om man inte kan så mycket om datorer. Du kan börja använda systemet direkt. Det finns mallar för journalföring och jag kan redigera mallarna så att de fungerar för den typ av patienter som jag möter i mitt arbete. Det är väldigt viktigt för mig. 
		<br> 
		<br>Jag använder Kaddio för att organisera mina journalanteckningar och patientbesök bättre, och framför allt för att få mer tid till mina hobbies och min familj. Jag kan njuta mer av min fritid."</cite>
		<br>
		<br><a href="/sv/case/osteopatia-mallorca" class="font-semibold text-oldpink">Se mer om Silvias resa från analog till digital journalföring →</a>
	</span>
</ProductFeatureImageOnLeft>

<ModuleOverviewFeaturesSection>
	<!--<span slot="pre">Innehåll</span>-->
	<span slot="title">Detta är Kaddio Journal</span>
	<span slot="body">Med Kaddio Journal journalför du säkert och smidigt på det sätt som passar din verksamhet. Kaddio sköter datalagringen. Du får tid över till annat.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Dokumentera</span>
		<!-- <span slot="body">Funktioner för att ge dig en smärtfri upplevelse</span> -->

		<ModuleOverviewFeature>Krypterad journalföring</ModuleOverviewFeature>
		<ModuleOverviewFeature>Bilder med ritfunktion</ModuleOverviewFeature>
		<ModuleOverviewFeature>Filuppladdning i journalanteckningar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Diagnoser enligt ICD-10</ModuleOverviewFeature>
		<ModuleOverviewFeature>Standardformulär direkt i journalen</ModuleOverviewFeature>
		<ModuleOverviewFeature>Export av journal eller enskilda anteckning som PDF</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Anpassa</span>
		<!-- <span slot="body">Funktioner för göra samarbetet smidigare</span> -->

		<ModuleOverviewFeature>Fri utformning av anteckningsmallar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Stöd för malltext</ModuleOverviewFeature>
		<ModuleOverviewFeature>Stöd för fraser</ModuleOverviewFeature>
		<ModuleOverviewFeature>Uppladdning av egna bilder att rita på</ModuleOverviewFeature>
		<ModuleOverviewFeature>Fri utformning av egna formulär</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Kontrollera</span>
		<!-- <span slot="body">Funktioner för att spara tid</span> -->

		<ModuleOverviewFeature>Behörighetsstyrning för journaler</ModuleOverviewFeature>
		<ModuleOverviewFeature>Signering och redigering av anteckningar med full historik</ModuleOverviewFeature>
		<ModuleOverviewFeature>Listning av osignerade anteckningar</ModuleOverviewFeature>
		<ModuleOverviewFeature>Logg öven läsning och redigering av journaler</ModuleOverviewFeature>
		

	</ModuleOverviewFeaturesSegment>

</ModuleOverviewFeaturesSection> 

<QuotesSection>
    <span slot="title">
        Vad våra kunder säger om Journalmodulen       
    </span>

    <Quote>
        Jag har samma krav på mitt journalföringssystem som mina behandlingar: effektivitet. Därför använder jag Kaddio.
        <span slot="quoted">
            Jonas Evander <cite>Leg psykolog  <a href="https://afobia.se" target="_blank" rel="noreferrer">Afobia</a></cite>
        </span>
    </Quote>
	<Quote>
        Kaddio är det journalprogram jag valt pga enkelheten. Programmet är enkelt att navigera och fungerar smidigt att anpassa efter mina behov, både i journalföring och tidsbokning.
        <span slot="quoted">
            Amanda Follin <cite>Certifierad massageterapeut  <a href="https://endorfinkliniken.com" target="_blank" rel="noreferrer">Endorfinkliniken</a></cite>
        </span>
    </Quote>
	<Quote>
        Ett funktionellt och enkelt journalsystem, med snabb och proffsig support. Fungerar perfekt med samlingsräkning.
        <span slot="quoted">
            Kim Olausson <cite>Leg fysioterapeut  <a href="https://fysiokompassen.se" target="_blank" rel="noreferrer">Fysiokompassen</a></cite>
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

<!--<StatsSection>
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
</StatsSection>-->

<SalesSection></SalesSection>

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