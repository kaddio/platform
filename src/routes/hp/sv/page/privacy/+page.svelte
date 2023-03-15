<script>
	import Subprocessors from '../../../components/subprocessors.svelte';
    import HeaderHero from '../../../components/header-hero.svelte';
	import HeroBox from '../../../components/heroBox.svelte';
</script>

<HeaderHero>
    <span slot="title">Sekretesspolicy</span>
</HeaderHero>

<HeroBox variant="pink">
    När du använder Kaddio ger du oss förtroendet att hantera dina uppgifter. Vi förklarar här vilka uppgifter vi samlar in, varför och hur vi använder dem.
</HeroBox>
<main>
    <article>
        <p>
            Kaddio AB är ansvarigt för behandlingen av personuppgifter som samlas in i Kaddio. Vid behandling av personuppgifter
            följer vi dataskyddsförordningen (GDPR).
        </p>
        <p>
            Samtliga personuppgifter vi behandlar är nödvändiga i avtalsförhållandet mellan Kaddio och kunden, alternativt sker
            med kundens samtycke för att tillhandahålla en så bra tjänst som möjligt. Vi sparar personuppgifterna så länge de
            behövs i vår affärsrelation med kunden och raderas därefter. Har du frågor eller är missnöjd är du välkommen att
            höra av dig till oss eller till vårt dataskyddsombud <a href="mailto:dpo@kaddio.com">dpo@kaddio.com</a>.
        </p>
        
        
        <h4>Behandling av dina klienters personuppgifter</h4>
        <p>
            Kaddio har beträffande de personuppgifter avseende klienter som kund till Kaddio tillför systemet ansvar
            enligt "Personuppgiftsbiträdesavtal" (som finns att ladda ner när ditt konto har skapats).
        </p>
        
        <p>
            Du som kund ska själv vidta lämpliga organisatoriska åtgärder för att uppfylla GDPR såvitt avser
            behandlingen av personuppgifter. Varje enskild kund har att bestämma var i organisationen som ansvaret för
            dataskyddsfrågor skall ligga. Läs mer hos <a href="https://www.datainspektionen.se/dataskyddsreformen/dataskyddsombud/" rel="noreferrer" target="_blank">Datainspektionen</a>
            om när man måste eller bör ha ett dataskyddsombud och vad ett
            sådant ombud gör.
        </p>
        <p>
            Kaddio ger dig som kund tekniska förutsättningar att uppfylla kraven i GDPR.
        </p>
        
        
        <h4>Information vi samlar in</h4>
        
        <p>
            <strong>Information du uppger</strong>
        </p>
        
        <p> 
            När du skapar en ny organisation ber vi dig om personuppgifter, bl.a. förnamn, efternamn och e-post
        </p>
        
        <p>
            När du använder Kaddio sparar vi information om bl.a. vilka moduler du aktiverat. Vi sparar info om när du loggat in i våra serverloggar.
        </p>
        
        <h4>Så här används informationen</h4>
        
        <p>
            Den information vi samlar in används för att tillhandahålla, förbättra och skydda våra tjänster.
        </p>
        
        <p>
            Kaddio använder cookies för lastbalansering och säkerhet. Inget annat.
        </p>
        
        
        <h4>Valmöjlighet</h4>
        
        <p>
            Det är du som kund till Kaddio som väljer vilken information du vill dela med oss. De enda personuppgifter
            du måste dela med oss för att starta en organisation är för- och efternamn, e-post samt namnet på din
            organisation.
        </p>
        
        
        
        
        <h4>Personuppgifter som behandlas</h4>
        
        <div class="table-responsive">
            <table class="table">
                <caption>
                    <strong>x</strong> behandlare, student, administratör (hur Kaddio behandlar våra kunders
                    personuppgifter)<br />
                    <strong>p</strong> patient, klient (hur Kaddios kunder kan behandla sina patienters
                    personuppgifter)<br />
                </caption>
        
                <thead>
                    <th>Personuppgift</th>
                    <th>Identifikation i listor</th>
                    <th>Inloggning</th>
                    <th>SMS-påminnelser</th>
                    <th>Bokningsbekräftelse</th>
                    <th>Support</th>
                    <th>Journallogg</th>
                    <th>Fakturering</th>
                </thead>
        
                <tbody>
                    <tr>
                        <th>Namn</th>
                        <td>x p</td>
                        <td></td>
                        <td>x</td>
                        <td></td>
                        <td>x</td>
                        <td>x</td>
                        <td></td>
                    </tr>
        
                    <tr>
                        <th>Personnummer</th>
                        <td>x p</td>
                        <td>x<sup>1</sup> p<sup>1</sup></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>E-post</th>
                        <td>x</td>
                        <td>x p</td>
                        <td></td>
                        <td>x p</td>
                        <td>x</td>
                        <td></td>
                        <td></td>
                    </tr>
        
                    <tr>
                        <th>Telefonnummer</th>
                        <td></td>
                        <td>x<sup>2</sup> p<sup>2</sup></td>
                        <td>p</td>
                        <td></td>
                        <td>x</td>
                        <td></td>
                        <td></td>
                    </tr>
        
                    <tr>
                        <th>IP-adress</th>
                        <td></td>
                        <td>x</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>x</td>
                        <td></td>
                    </tr>
        
                    <tr>
                        <th>Adress</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>x</td>
                        <td></td>
                        <td></td>
                        <td>x p</td>
                    </tr>
        
                    <tr>
                        <th>Organisationsnummer</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>x</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <ol>
            <li>Endast med modulen Mobilt BankID</li>
            <li>Endast med modulen 2FA via SMS</li>
        </ol>
        
        <h4>Var personuppgifter hanteras</h4>
        <p> Dataskyddsförordningen (GDPR) gäller i hela EU/ESS och innebär att alla EU:s medlemsstater har ett
            likvärdigt skydd för personuppgifter och personlig integritet.
        </p>
        <ul>
            <li>Personuppgifter kan enligt GDPR behandlas fritt inom EU/EES utan begränsningar.</li>
            <li>Utanför EU/ESS får personuppgifter hanteras förutsatt att databehandlaren följer nödvändiga
                bestämmelser och har vidtagit lämpliga skyddsåtgärder. </li>
        </ul>
        
        <p>Samtliga företag som hanterar personuppgifter för Kaddios räkning utanför EU/ESS har vi avtal med som
            innehåller standardavtalsklausuler som EU-kommissionen har beslutat om, vilket uppfyller skyddsnivå
            enligt GDPR.</p>
        
        <p>Data för följande ändamål hanteras utanför EU/ESS (i USA):</p>
        
        <ul>
            <li>System för att skicka nyhetsbrev från Kaddio till våra kunder</li>
            <li>System för att leverera SMS till patienter som har en bokning i kalendern. (SMS-påminnelser)</li>
            <li>System för automatiska utskick av e-post för: fakturering, inbjudan av behandlare och patienter,
                kvitto vid bokning samt bokning- och avbokningsbekräftelse.</li>
        </ul>
        <p>Övrig data som innehåller personuppgifter hanteras inom EU/ESS. All lagring av data från Journal och
            Kommunikation sker alltså inom EU/ESS.
        </p>
        <br>
        
        <p>Sidan senast uppdaterad 2023-02-10.</p>
        
    </article>

    <article>
        <Subprocessors />        
    </article>

</main>
