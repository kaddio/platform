
<script>
	import Quote from "$components/quote.svelte";
	import QuotesSection from "$components/quotesSection.svelte";
    import QuoteSvRamzi from "./quote-sv-ramzi.svelte";
    import QuoteSvUlrika from "./quote-sv-ulrika.svelte";
</script>


<QuotesSection>
    <span slot="title">
        Läs vad några av våra 2300 kunder tycker om Kaddio        
    </span>

    <QuoteSvRamzi />
    
    <QuoteSvUlrika />
    
    <Quote>
        Kaddio är användarvänligt, funktionellt och passar vår verksamhet perfekt!
        <span slot="quoted">
            Jimmy Lundqvist
        </span>
        <span slot="author">
            Chef, IKSU fysio <a href="https://iksu.se" target="_blank" rel="noreferrer">IKSU</a>
        </span>
    </Quote>
    
    <Quote>
        Jag har samma krav på mitt journalföringssystem som mina behandlingar: effektivitet. Därför använder jag Kaddio.
        <span slot="quoted">
            Jonas Evander
        </span>
        <span slot="author">
            Leg Psykolog, <a href="https://afobia.se" target="_blank" rel="noreferrer">Afobia</a>            
        </span>
    </Quote>
    <Quote>
        Kaddio är det journalprogram jag valt pga enkelheten. Programmet är enkelt att navigera och fungerar smidigt att anpassa efter mina behov, både i journalföring och tidsbokning.
        <span slot="quoted">
            Amanda Follin
        </span>
        <span slot="author">
            Certifierad massageterapeut, <a href="https://www.endorfinkliniken.com" target="_blank" rel="noreferrer">Endorfinkliniken</a>
        </span>
    </Quote>
    <Quote>
        Programmet har allt jag behöver och det är lätt att använda och anpassa efter mina behov. Jag kan verkligen rekommendera detta journalsystem.
        <span slot="quoted">
            Sofia Viotti
        </span>
        <span slot="author">
            Leg Psykolog, Compassionfocus
        </span>
    </Quote>
    <Quote>
        Ett funktionellt och enkelt journalsystem, med snabb och proffsig support. Fungerar perfekt med samlingsräkning.
        <span slot="quoted">
            Kim Olausson
        </span>
        <span slot="author">
            Leg Fysioterapeut, <a href="https://fysiokompassen.se" target="_blank" rel="noreferrer">Fysiokompassen</a>
        </span>
    </Quote>    
</QuotesSection>