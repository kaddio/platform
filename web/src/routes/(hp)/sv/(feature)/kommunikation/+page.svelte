<script>
    import Qa from '$components/qa.svelte';
    import FaqSection from '$components/faqSection.svelte';
    import ModuleSectionWithImage from '$components/moduleSectionWithImage.svelte';
    import ModuleFeatureWithIcon from '$components/moduleFeatureWithIcon.svelte';
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

    <title>Kaddio - Kommunikation</title>
    <meta name="description" content="Chat och video för upp till 500 samtidiga deltagare" />
</svelte:head>


<ModuleSectionWithImage src="/img/kaddio-screenshots/chat-sv.png" alt="Kaddio Journalsystem">
	<span slot="h1">Kommunikation</span>
	<span slot="title">Kaddio Chat och Video</span>
	<span slot="sub">
		Kaddio Chat och Video gör att du kan kommunicera och dela information säkert med klienter och kollegor. Kaddio uppfyller Socialstyrelsens krav på stark autentisering.
	</span>

	<ModuleFeatureWithIcon icon="lock">
		<span slot="title">Säkerhetsanpassa.</span>
		<span slot="body">
			Kräv inloggning till videosamtal och chat med Mobilt BankID eller
            tvåfaktorsautentisering.
		</span> 
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="share">
		<span slot="title">Dela information.</span>
		<span slot="body">
			Skicka känslig information på ett säkert sätt genom krypterad chat och videosamtal.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="seedling">
		<span slot="title">Väx med Kaddio.</span>
		<span slot="body">
			Håll enskilda samtal eller stora föreläsningar. Kaddio Video har stöd för minst 500
            deltagare samtidigt.
		</span>
	</ModuleFeatureWithIcon>

</ModuleSectionWithImage>

<ProductFeatureImageOnLeft src="/img/ana-with-skeleton.png" alt="Ana Casanovas is giving a treatment">
	<span slot="pre">Inspirerande text och bild</span>
	<span slot="title">Därför använder X Kaddio Chat och Video</span>
	<span slot="body">Distinctio et nulla eum soluta et neque labore quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</span>
</ProductFeatureImageOnLeft>

<ModuleOverviewFeaturesSection>
	<span slot="pre">Innehåll</span>
	<span slot="title">Detta är Kaddio Chat och Video</span>
	<span slot="body">Med Kaddio Chat och Video kommunicerar du säkert med klienter och kollegor. <br>Allt i Kaddio är krypterat.</span>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Säkerhetsanpassa</span>
		<!-- <span slot="body">Funktioner för att ge dig en smärtfri upplevelse</span> -->
        <ModuleOverviewFeature>Uppfyller Socialstyrelsens krav på stark autentisering</ModuleOverviewFeature>
        <ModuleOverviewFeature>Inloggning för klient med Mobilt BankID</ModuleOverviewFeature>
		<ModuleOverviewFeature>Inloggning för utländska klienter med tvåfaktorsautentisering via SMS</ModuleOverviewFeature>
        <ModuleOverviewFeature>Kryptering av all information</ModuleOverviewFeature>
	</ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Dela information</span>
		<!-- <span slot="body">Funktioner för göra samarbetet smidigare</span> -->

		<ModuleOverviewFeature>Krypterad fildelning i chat</ModuleOverviewFeature>
		<ModuleOverviewFeature>Skärmdelning i videosamtal</ModuleOverviewFeature>
		<ModuleOverviewFeature>Inspelning av videosamtal för delning med klient i chat</ModuleOverviewFeature>
        <ModuleOverviewFeature>Kontaktformulär för klient</ModuleOverviewFeature>
    </ModuleOverviewFeaturesSegment>

	<ModuleOverviewFeaturesSegment>
		<span slot="title">Väx med Kaddio</span>
		<!-- <span slot="body">Funktioner för att spara tid</span> -->

		<ModuleOverviewFeature>Videosamtal för 2-500 deltagare</ModuleOverviewFeature>

	</ModuleOverviewFeaturesSegment>
</ModuleOverviewFeaturesSection>  

<QuotesSection>
    <span slot="title">
        Vad våra kunder säger om Kaddio Chat och Video       
    </span>

    <Quote>
        Här vill man ha citat som rör just Kommunikation.
        <span slot="quoted">
            Förnamn Efternamn <cite>Titel  <a href="https://webadress.se" target="_blank" rel="noreferrer">Webadress</a></cite>
        </span>
    </Quote>

    <!-- <Quote>
        Vi på Din Psykolog har haft stor hjälp av Kaddio i vårt arbete i att utveckla framtidens digitala vård, och de har varit väldigt tillmötesgående i utvecklingen av specifika funktioner vi behövt. Vi kan varmt rekommendera Kaddio!
        <span slot="quoted">
            Ramzi Jelassi <cite>Grundare  <a href="https://dinpsykolog.se" target="_blank" rel="noreferrer">Din Psykolog</a></cite>
        </span>
    </Quote>
    <Quote>
        Det är ett rent nöje att fakturera med kaddio! Så smidigt och tydligt. Och så gör det ju skillnad att det är en snygg miljö också, mina andra program har sett ut som ... 😉. Tack för allt ni gör, min jobbdag blir så mycket härligare i kaddio!
        <span slot="quoted">
            Ulrika Hiscoke <cite>Leg Psykolog, medicine doktor <a href="https://arbor.kaddio.com" target="_blank" rel="noreferrer">Arbor Psykologi</a></cite>
        </span>
    </Quote>
    
    <Quote>
        Kaddio är användarvänligt, funktionellt och passar vår verksamhet perfekt!
        <span slot="quoted">
            Jimmy Lundqvist <cite>Chef IKSU fysio <a href="https://iksu.se" target="_blank" rel="noreferrer">IKSU</a></cite>
        </span>
    </Quote> -->
    
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

<SalesSection></SalesSection>

<!-- <FaqSection>
    <span slot="title">Detaljer</span>

    <Qa>
        <span slot="q">Stark autentisering</span>
        <span slot="a">
            Logga in med Mobilt BankID eller genom tvåfaktorsautentisering med e-post, lösenord och
            kod via SMS. Båda metoderna uppfyller Socialstyrelsens krav på stark autentisering.
            Inloggningsalternativen gäller både behandlare och klient.
        </span>
    </Qa>

    <Qa>
        <span slot="q">Säker delning</span>
        <span slot="a">
            I inloggat läge i Kaddio är allt krypterat. Dela känslig information på ett säkert sätt
            genom chatten. Skriv meddelanden direkt eller bifoga filer. Skicka brev och fakturor
            direkt i chatten.
        </span>
    </Qa>

    <Qa>
        <span slot="q">Skärmdelning</span>
        <span slot="a"> Dela skärm under videosamtal. </span>
    </Qa>

    <Qa>
        <span slot="q">Gruppchat</span>
        <span slot="a"> Skapa chatgrupper snabbt och enkelt. </span>
    </Qa>

    <Qa>
        <span slot="q">Spela in samtal</span>
        <span slot="a">
            Spela in videosamtal och dela med klient vid behov. Inspelningen laddas upp i chatten
            och är synlig för behandlare i 24 timmar.
        </span>
    </Qa>

    <Qa>
        <span slot="q">Autosvar</span>
        <span slot="a">
            Ställ in autosvar i chatten, om du till exempel blir sjuk eller är på semester.
        </span>
    </Qa>
	<Qa>
		<span slot="q">Skärmdelning</span>
		<span slot="a">
			Dela skärm
		</span>
	</Qa>

	<Qa>
		<span slot="q">Skärmdelning</span>
		<span slot="a">
			Dela skärm
		</span>
	</Qa>
</FaqSection> -->
