<script>
    import Legal from '$components/legal.svelte';
    import LegalLi from '$components/legalLi.svelte';
    import LegalParagraph from '$components/legalParagraph.svelte';
    import LegalTitle from '$components/legalTitle.svelte';
    import LegalUl from '$components/legalUl.svelte';
</script>

<svelte:head>
    <title>Kaddio - Policy för Godkända Omdömen</title>
    <meta name="description" content="Policy för Godkända Omdömen" />

    <meta name="robots" content="noindex" />
</svelte:head>

<Legal>
    <span slot="pretitle">Kaddio Policy</span>
    <span slot="title">Policy för omdömen</span>

    <LegalTitle>Relevans</LegalTitle>
    <LegalParagraph>
        Omdömen som publiceras måste vara relevanta för den specifika bokningen eller upplevelsen
        som beskrivs. Allmänna eller irrelevanta kommentarer kan komma att tas bort.
    </LegalParagraph>

    <LegalTitle>Ärlighet och rättvisa</LegalTitle>
    <LegalParagraph>
        Omdömen måste vara ärliga och rättvisa utifrån användarens verkliga erfarenheter. Falska
        eller vilseledande påståenden kan komma att tas bort.
    </LegalParagraph>

    <LegalTitle>Respektfullt språk</LegalTitle>
    <LegalParagraph>
        Användare måste använda ett respektfullt språk i sina omdömen. Personliga påhopp,
        diskriminerande kommentarer eller olämpligt språk kommer att avvisas.
    </LegalParagraph>

    <LegalTitle>Inga konfidentiella uppgifter</LegalTitle>
    <LegalParagraph>
        Användare får inte lämna ut konfidentiella eller personliga uppgifter om andra personer i
        sina omdömen. Detta inkluderar namn, kontaktinformation och andra privatlivsrelaterade
        detaljer.
    </LegalParagraph>

    <LegalTitle>Inget spam eller reklam</LegalTitle>
    <LegalParagraph>
        Omdömen som innehåller spam, reklam eller länkar till andra webbplatser kan komma att tas
        bort.
    </LegalParagraph>
    <LegalTitle>Policyns genomförande och radering av omdömen</LegalTitle>

    <LegalParagraph
        >Vi på Kaddio förbehåller oss rätten att granska och moderera alla omdömen som lämnas på vår
        webbplats. Om ett omdöme anses strida mot denna policy kan det komma att tas bort av vårt
        modereringsteam.</LegalParagraph
    >

    <LegalParagraph
        >Om användare upptäcker omdömen som de anser bryter mot vår policy, uppmanar vi dem att
        rapportera dessa till vår supportavdelning för vidare granskning. Vi kommer att behandla
        alla rapporterade omdömen och vidta lämpliga åtgärder i enlighet med denna policy.</LegalParagraph
    >

    <LegalTitle>Ändringar i policyn</LegalTitle>

    <LegalParagraph
        >Denna policy för godkända omdömen och recensioner kan komma att ändras och uppdateras vid
        behov. Användare uppmanas att regelbundet granska policyn för att vara medvetna om
        eventuella ändringar.</LegalParagraph
    >

    <LegalParagraph
        >Genom att använda Kaddio och lämna omdömen och recensioner samtycker användarna till att
        följa denna policy och accepterar konsekvenserna av att bryta mot den.</LegalParagraph
    >

    <LegalTitle>Senast uppdaterad: 2024-01-01</LegalTitle>
</Legal>
