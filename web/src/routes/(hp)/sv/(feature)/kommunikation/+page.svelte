<script>
    import Qa from '$components/qa.svelte';
    import FaqSection from '$components/faqSection.svelte';
    import ModuleSectionWithImage from '$components/moduleSectionWithImage.svelte';
    import ModuleFeatureWithIcon from '$components/moduleFeatureWithIcon.svelte';
</script>

<svelte:head>
    <title>Kaddio - Kommunikation</title>
    <meta name="description" content="Chat och video för upp till 500 samtidiga deltagare" />
</svelte:head>


<ModuleSectionWithImage src="/img/kaddio-screenshots/log-overview-se.png" alt="Kaddio Journalsystem">
	<span slot="h1">Kommunikation</span>
	<span slot="title">Kaddio Chat och Video</span>
	<span slot="sub">
		Med Kaddio Chat och video kan du chatta krypterat via chat och video både inom och utom din organisation.
	</span>

	<ModuleFeatureWithIcon icon="lock">
		<span slot="title">Ställ krav på säkerheten</span>
		<span slot="body">
			Kräv inloggning till samtalet eller chatten med Mobilt BankID eller
            tvåfaktorsautentisering. Kaddios inloggningsalternativ uppfyller Socialstyrelsens krav
            på stark autentisering.
		</span> 
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="share">
		<span slot="title">Dela information</span>
		<span slot="body">
			Skicka känslig information på ett säkert sätt genom chatten. Dela skärm under
            videosamtal. Spela in videosamtal som klient kan ladda ner.
		</span>
	</ModuleFeatureWithIcon>

	<ModuleFeatureWithIcon icon="seedling">
		<span slot="title">Väx med Kaddio</span>
		<span slot="body">
			Håll enskilda samtal eller stora föreläsningar. Kaddio Video har stöd för minst 500
            deltagare samtidigt.
		</span>
	</ModuleFeatureWithIcon>

</ModuleSectionWithImage>




<FaqSection>
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
    <!--
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
-->
</FaqSection>
