<script lang="ts">
    import Quote from "$components/quote.svelte";

    export let lang: "eng" | "sv" | "es" = "eng"; 

    const texts: Record<"eng" | "sv" | "es", { quote: string; quoted: string; author: string }> = {
        eng: {
            quote: "At Din Psykolog, we have had great help from Kaddio in our work with developing digital healthcare for the future, and they have been most accommodating with developing specific functions for our needs. We warmly recommend Kaddio!",
            quoted: "Ramzi Jelassi",
            author: 'Founder, <a href="https://dinpsykolog.se" target="_blank" rel="noreferrer">Din Psykolog</a>'
        },
        sv: {
            quote: "På Din Psykolog har vi haft stor hjälp av Kaddio i vårt arbete med att utveckla framtidens digitala vård, och de har varit mycket tillmötesgående med att utveckla specifika funktioner för våra behov. Vi rekommenderar varmt Kaddio!",
            quoted: "Ramzi Jelassi",
            author: 'Grundare, <a href="https://dinpsykolog.se" target="_blank" rel="noreferrer">Din Psykolog</a>'
        },
        es: {
            quote: "En Din Psykolog, hemos recibido una gran ayuda de Kaddio en nuestro trabajo para desarrollar la atención médica digital del futuro, y han sido muy complacientes al desarrollar funciones específicas para nuestras necesidades. ¡Recomendamos calurosamente a Kaddio!",
            quoted: "Ramzi Jelassi",
            author: 'Fundador, <a href="https://dinpsykolog.se" target="_blank" rel="noreferrer">Din Psykolog</a>'
        }
    };
</script>

<Quote>
    {texts[lang].quote}
    <span slot="quoted">
        {@html texts[lang].quoted}
    </span>
    <span slot="author">
        {@html texts[lang].author}
    </span>
</Quote>