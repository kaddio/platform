
<script>
	import QuotesSection from "$components/quotesSection.svelte";
    import QuoteSvKim from "../routes/(hp)/sv/quote-sv-kim.svelte";
    import QuoteEnAmanda from "./quoteEnAmanda.svelte";
    import QuoteEnJimmy from "./quoteEnJimmy.svelte";
    import QuoteEnJonas from "./quoteEnJonas.svelte";
    import QuoteEnRamzi from "./quoteEnRamzi.svelte";
    import QuoteEnSofia from "./quoteEnSofia.svelte";
    import QuoteEnUlrika from "./quoteEnUlrika.svelte";
</script>

<QuotesSection>
    <span slot="title">
        Testimonials from some of our 2200 customers        
    </span>

    <QuoteEnRamzi />
    <QuoteEnUlrika />
    <QuoteEnJimmy />
    <QuoteEnJonas />   
    <QuoteEnAmanda />
    <QuoteEnSofia />
    <QuoteSvKim />

</QuotesSection>