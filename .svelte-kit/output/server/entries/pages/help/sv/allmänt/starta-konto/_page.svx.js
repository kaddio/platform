import { c as create_ssr_component } from "../../../../../../chunks/index3.js";
let title = "Logga in";
let category = "Allmänt";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Samlingsräkning</h1>
<p>Med samlingsräkning rapporterar du enkelt till regioner.
Kaddio har idag stöd för export till följande regioner: </p>
<ul><li>Region Gävleborg</li>
<li>Region Jönköpings län</li>
<li>Region Sörmland (fd Södermanlands läns landsting)</li>
<li>Region Uppsala</li>
<li>Västra Götalandsregionen</li>
<li>Region Östergötland</li>
<li>Region Jämtland Härjedalen</li>
<li>Region Örebro</li>
<li>Region Värmland</li>
<li>Region Västernorrland</li></ul>
<p>Kom igång</p>
<p>Aktivera modulen Samlingsräkning under Inställningar &gt; Moduler. (Du behöver också aktivera modulen Journal)
Gör sedan dina förberedande inställningar under Inställningar för samlingsräkning och på behandlarnas profiler.
Inställningar för samlingsräkning
Här ställer du in vilken region du arbetar inom, samt vilket format på exportfil som ska användas. Du kan också ställa in vissa förvalda uppgifter.
Under Inställningar för samlingsräkning &gt; Åtgärder lägger du upp de olika åtgärderna som är aktuella för din verksamhet.
Behandlarens profil
De behandlare som ska rapportera till regionen behöver fylla i aktuella uppgifter under sina respektive profiler under rubriken Samlingsräkning.
Vilka fält som ska fyllas i beror på region och verksamhet, så kontakta regionen du arbetar mot ifall du är osäker på vad du ska fylla i här. </p>
<p>Under Standardåtgärd kan du om du vill, ange en av dina Åtgärder som ska vara förvald på de journalanteckningar du skapar.</p>
<p>Rapportera besök</p>
<p>För varje klient som ska kopplas till samlingsräkningen behöver du under Personuppgifter fylla i personnummer och stad. I samlingsräkningen omvandlas staden sedan till en kommunkod. Du kan också fylla i frikortsnummer om så önskas.
I varje journalanteckning väljer du om den ska synas i exporten genom att aktivera “Samlingsräkning” under “Mer &gt; Fakturering”.
Längst ner i anteckningen dyker då kompletterande uppgifter upp för just det specifika besöket upp som du behöver fylla i.</p>
<p>Under Inställningar för Journal &gt; Kontakttyper kan du för vardera kontakttyp ställa in Samlingsräkning som förval, under knappen “Fakturering”.</p>
<p>Exportera samlingsräkning</p>
<p>När det är dags att skicka filen till regionen går du till Rapporter &gt; Samlingsräkning. </p>
<p>Välj datumintervall samt om du vill välja ut en viss behandlare</p>
<p>Kontrollera att tabellen stämmer.</p>
<p>Varningstrianglar visas framför den rad och de uppgifter som inte stämmer. Klicka på klientens namn för att komma till aktuell journalanteckning för att fylla i de uppgifter som saknas. Triangel under personnummer kan bero på att personnummer saknas eller att personnumret är fel. </p>
<p>Klicka på “Exportera fil” när allt ser bra ut och du är redo att ladda ner filen till din dator. Sedan är det bara att ladda upp filen till regionen.</p>`;
});
export {
  category,
  Page as default,
  title
};
