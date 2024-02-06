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
    <span slot="title">Policy för Godkända Omdömen och Recensioner</span>
    <span slot="subtitle">
        Vi på Kaddio välkomnar och uppmuntrar användarna att lämna omdömen och recensioner om sina
        erfarenheter med våra bokningstjänster. Vi tror på öppenhet och ärlighet, och vi strävar
        efter att erbjuda en plattform där användarna kan dela sina åsikter på ett konstruktivt
        sätt. För att upprätthålla integriteten och kvaliteten på de omdömen och recensioner som
        publiceras på vår webbplats har vi utvecklat följande policy.
    </span>

    <LegalTitle>Relevans</LegalTitle>
    <LegalParagraph>
        Omdömen och recensioner som publiceras på Kaddio måste vara relevanta för den specifika
        bokningen eller upplevelsen som beskrivs. Allmänna eller irrelevanta kommentarer kommer inte
        att godkännas.
    </LegalParagraph>

    <LegalTitle>Ärlighet och Rättvisa</LegalTitle>
    <LegalParagraph>
        Ärlighet och Rättvisa: Omdömen och recensioner måste vara ärliga och rättvisa utifrån
        användarens verkliga erfarenheter med våra tjänster. Falska eller vilseledande påståenden
        kommer inte att tolereras.
    </LegalParagraph>

    <LegalTitle>Respektfullt Språk</LegalTitle>
    <LegalParagraph>
        Användare måste använda ett respektfullt och opartiskt språk i sina omdömen och recensioner.
        Personliga påhopp, diskriminerande kommentarer eller olämpligt språk kommer att avvisas.
    </LegalParagraph>

    <LegalTitle>Inga Konfidentiella Uppgifter</LegalTitle>
    <LegalParagraph>
        Användare får inte lämna ut konfidentiella eller personliga uppgifter om andra personer i
        sina omdömen och recensioner. Detta inkluderar namn, kontaktinformation och andra
        privatlivsrelaterade detaljer.
    </LegalParagraph>

    <LegalTitle>Inget Spam eller Reklam</LegalTitle>
    <LegalParagraph>
        Omdömen och recensioner som innehåller spam, reklam eller länkar till andra webbplatser
        kommer inte att publiceras.
    </LegalParagraph>
    <LegalTitle>Policyns Genomförande och Radering av Omdömen</LegalTitle>

    <LegalParagraph
        >Vi på Kaddio förbehåller oss rätten att granska och moderera alla omdömen och recensioner
        som lämnas på vår webbplats. Om ett omdöme anses strida mot denna policy kan det komma att
        tas bort eller redigeras av vårt modereringsteam.</LegalParagraph
    >

    <LegalParagraph
        >Om användare upptäcker omdömen som de anser bryter mot vår policy, uppmanar vi dem att
        rapportera dessa till vår supportavdelning för vidare granskning. Vi kommer att behandla
        alla rapporterade omdömen och vidta lämpliga åtgärder i enlighet med denna policy.</LegalParagraph
    >

    <LegalTitle>Ändringar i Policyn</LegalTitle>

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
