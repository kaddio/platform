<script>
  import Legal from "$components/legal.svelte";
	import LegalParagraph from "$components/legalParagraph.svelte";
  import { hrefLangAlternates } from "$lib/stores";
</script>

<svelte:head>
  {@html hrefLangAlternates('case/afobia', 'en')}
</svelte:head>

<Legal>
    <span slot="pretitle">
        Kaddio Case study @ Stockholm, Sweden
    </span>
    
    <span slot="title">Meet Jonas</span>
    <span slot="subtitle">
      "The common goal with all my businesses is to help people improve their mental health."
    </span>

    <span slot="intro">
        Jonas Evander is a psychologist, psychotherapist and business developer who runs several clinics in Stockholm: <a class="font-semibold text-gray-900" href="https://afobia.se">Afobia</a> that specializes in CBT for phobia and fear, the web-based clinic <a class="font-semibold text-gray-900" href="https://amedo.se">Amedo</a> for neuropsychiatric evaluations, and PsykologA for therapy and coaching.
    </span>


    <LegalParagraph>
        Jonas uses Kaddio for all three businesses. The idea for Amedo was triggered by a specific feature he found in Kaddio. "As Kaddio develops, I find new opportunities to develop my businesses".
    </LegalParagraph>

    <LegalParagraph>
    What Jonas likes the most is the stability of Kaddio and the responsiveness of the team. "The world changes, the business changes and therefore, we need a flexible system", Jonas concludes.
    </LegalParagraph>

    <figure class="mt-16">
      <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/877785631?h=48a4ba7452" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Jonas Evander, Psychologist"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
    </figure>


</Legal>


