<script>
  import Legal from "$components/legal.svelte";
	import LegalParagraph from "$components/legalParagraph.svelte";

</script>

<svelte:head>
  <title>Kaddio Case study @ Mallorca, Spain</title>
</svelte:head>

<Legal>
    <span slot="pretitle">
        Kaddio Case study @ Mallorca, Spain
    </span>
    
    <span slot="title">Meet Ana</span>
    <span slot="subtitle">
      "I have always been attracted to methods that are natural or traditional, both in my work and in my hobbies."
    </span>

    <span slot="intro">
      Ana has more than 20 years of experience in the fields of osteopathy and physiotherapt. "I really like working with everything that is a bout the mind-body relationship, to help people understand that it is not only biology."
    </span>

    <LegalParagraph>
      While Ana's interests are strongly rooted in traditional crafts, she also has a constant lookout for the new and modern.
      "I was looking for a way to make my medical records more efficient, and that is when I found Kaddio."
    </LegalParagraph>


    <figure class="mt-16">
      <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/838791658?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Ana Casanovas"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
    </figure>

</Legal>
