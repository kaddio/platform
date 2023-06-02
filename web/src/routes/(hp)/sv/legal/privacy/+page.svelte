<script>
	import Legal from "$components/legal.svelte";
    import LegalLi from "$components/legalLi.svelte";
    import LegalParagraph from "$components/legalParagraph.svelte";
	import LegalTitle from "$components/legalTitle.svelte";
	import LegalUl from "$components/legalUl.svelte";
</script>

<svelte:head>
	<title>Kaddio - Sekretesspolicy</title>
	<meta name="description" content="Sekretesspolicy" />

    <meta name="robots" content="noindex">
</svelte:head>


<Legal>
    <span slot="pretitle">Kaddio Policy</span>
    <span slot="title">Sekretesspolicy</span>
    <span slot="subtitle">
        Kaddio AB är ansvarigt för behandlingen av personuppgifter som samlas in i Kaddio. Vid behandling av personuppgifter
        följer vi dataskyddsförordningen (GDPR).
    </span>

    <span slot="intro">
        Samtliga personuppgifter vi behandlar är nödvändiga i avtalsförhållandet mellan Kaddio och kunden, alternativt sker
        med kundens samtycke för att tillhandahålla en så bra tjänst som möjligt. Vi sparar personuppgifterna så länge de
        behövs i vår affärsrelation med kunden och raderas därefter. Har du frågor eller är missnöjd är du välkommen att
        höra av dig till oss eller till vårt dataskyddsombud <a class="font-semibold text-oldpink" href="mailto:dpo@kaddio.com">dpo@kaddio.com</a>        
    </span>

    <LegalTitle>Behandling av dina klienters personuppgifter</LegalTitle>

    <LegalParagraph>
      Kaddio har beträffande de personuppgifter avseende klienter som kund till Kaddio tillför systemet ansvar enligt "Personuppgiftsbiträdesavtal" (som finns att ladda ner när ditt konto har skapats).
    </LegalParagraph>

    <LegalParagraph>
        Du som kund ska själv vidta lämpliga organisatoriska åtgärder för att uppfylla GDPR såvitt avser
        behandlingen av personuppgifter. Varje enskild kund har att bestämma var i organisationen som ansvaret för
        dataskyddsfrågor skall ligga. Läs mer hos Datainspektionen om när man måste eller bör ha ett dataskyddsombud och vad ett
        sådant ombud gör.            
    </LegalParagraph>

    <LegalParagraph>
      Kaddio ger dig som kund tekniska förutsättningar att uppfylla kraven i GDPR.
    </LegalParagraph>


    <LegalTitle>
        Information vi samlar in
    </LegalTitle>

    <LegalUl>
      <LegalLi><strong class="font-semibold text-gray-900">Ny kund.</strong> När du skapar en ny organisation ber vi dig om personuppgifter, bl.a. förnamn, efternamn och e-post.</LegalLi>
      <LegalLi><strong class="font-semibold text-gray-900">Användning.</strong> När du använder Kaddio sparar vi information om bl.a. vilka moduler du aktiverat. Vi sparar info om när du loggat in i våra serverloggar..</LegalLi>
    </LegalUl>

    <LegalTitle>
      Så här används informationen
    </LegalTitle>


    <LegalUl>
      <LegalLi><strong class="font-semibold text-gray-900">Förbättring.</strong> Den information vi samlar in används för att tillhandahålla, förbättra och skydda våra tjänster.</LegalLi>
      <LegalLi><strong class="font-semibold text-gray-900">Cookies.</strong> Kaddio använder cookies för lastbalansering och säkerhet. Inget annat.</LegalLi>
    </LegalUl>


    <LegalTitle>
      Valmöjlighet
    </LegalTitle>

    <LegalParagraph>
      Det är du som kund till Kaddio som väljer vilken information du vill dela med oss. De enda personuppgifter
        du måste dela med oss för att starta en organisation är för- och efternamn, e-post samt namnet på din
        organisation.
    </LegalParagraph>


    <LegalTitle>
      Var personuppgifter hanteras
    </LegalTitle>

    <LegalParagraph>
      Dataskyddsförordningen (GDPR) gäller i hela EU/ESS och innebär att alla EU:s medlemsstater har ett
        likvärdigt skydd för personuppgifter och personlig integritet.
    </LegalParagraph>





    <LegalUl>
      <LegalLi>Personuppgifter kan enligt GDPR behandlas fritt inom EU/EES utan begränsningar.</LegalLi>
      <LegalLi>
        Utanför EU/ESS får personuppgifter hanteras förutsatt att databehandlaren följer nödvändiga
        bestämmelser och har vidtagit lämpliga skyddsåtgärder.
      </LegalLi>
    </LegalUl>


    <LegalParagraph>
        Samtliga företag som hanterar personuppgifter för Kaddios räkning utanför EU/ESS har vi avtal med som
innehåller standardavtalsklausuler som EU-kommissionen har beslutat om, vilket uppfyller skyddsnivå
enligt GDPR.
  </LegalParagraph>

    
    <LegalTitle>
        Data för följande ändamål hanteras utanför EU/ESS
    </LegalTitle>



    <LegalUl>
      <LegalLi>
            <strong class="font-semibold text-gray-900">Nyhetsbrev.</strong> System för att skicka nyhetsbrev från Kaddio till våra kunder
      </LegalLi>

      <LegalLi>
            <strong class="font-semibold text-gray-900">SMS.</strong> System för att leverera SMS till patienter som har en bokning i kalendern. (SMS-påminnelser).
      </LegalLi>

      <LegalLi>
            <strong class="font-semibold text-gray-900">E-post.</strong> System för automatiska utskick av e-post för: fakturering, inbjudan av behandlare och patienter,
            kvitto vid bokning samt bokning- och avbokningsbekräftelse.            
      </LegalLi>
    </LegalUl>        

      <LegalParagraph>
        Övrig data som innehåller personuppgifter hanteras inom EU/ESS. All lagring av data från Journal och Kommunikation sker inom EU/ESS.
      </LegalParagraph>


    <!-- <figure class="mt-10 border-l border-oldpink pl-9">
      <blockquote class="font-semibold text-gray-900">
        <p>“Våra kunder investerar i oss med tid, engagemang, pengar och information och anförtror oss med ett stort ansvar. Vi engagerar oss i dessa investeringar och det förklarar varför vi strävar efter att arbeta balanserat, hålla våra kostnader låga, hur vi hanterar riskfaktorer och varför vi strävar efter att växa organiskt och stabilt.”</p>
      </blockquote>
      <figcaption class="mt-6 flex gap-x-4">
        <img class="h-6 w-6 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        <div class="text-sm leading-6"><strong class="font-semibold text-gray-900">Lena Nyberg</strong> - Chief Information Officer</div>
      </figcaption>
    </figure> -->

    <LegalParagraph>
      <a class="font-semibold text-oldpink" target="_blank" rel="noreferrer" href="https://github.com/kaddio/documentation/wiki/Third-Party-Subprocessors">Third-Party Subprocessors <i class="fa fa-regular fa-arrow-up-right-from-square" /></a>    
    </LegalParagraph>

</Legal>

