<script>
	import BlogPost from '$components/blog-post.svelte';
	import { imageHandler } from '$lib/img';
  import BlogPosts from '$components/blog-posts.svelte';

</script>

<svelte:head>
  <title>Kaddio - kundberättelser</title>
  <meta name="" content="Läs om hur Kaddio har hjälpt organisationer nå sina mål" />
</svelte:head>

<BlogPosts>
  <span slot="pretitle">
      Kundberättelser
  </span>

  <span slot="title">
    Hur andra framgångsrika företag använder Kaddio.
  </span>

  <BlogPost type="Kundberättelse" href="/sv/case/afobia" title="Nyfikenhet som driver utveckling" name="Afobia" location="Stockholm" tags={["Journal", "Bokning", "Kommunikation"]} img={imageHandler('/img/jonas.jpg', {format: "auto", width: 640})}>
      Jonas är psykolog och psykoterapeut med ett stort intresse för affärsutveckling. Träffa Jonas på hans klinik i Stockholm där han använder Kaddio som en källa till inspiration för nya affärsidéer.
    </BlogPost>

    <BlogPost type="Kundberättelse" href="/sv/case/osteopatia-mallorca" title="Digital förändring" name="Osteopatía Mallorca" location="Palma, Spanien" tags={["Journal", "Bokning"]} img={imageHandler('/img/silvia.png', {format: "auto", width: 640})}>
      Silvia driver Osteopatía Mallorca i Palma. 2022 påbörjade hon övergången från papper och penna till digitala journaler med hjälp av Kaddio.
    </BlogPost>

    <BlogPost type="Kundberättelse" href="/sv/case/spanda-healthcare" title="Traditionellt möter modernt" name="Spanda Healthcare" location="Selva, Spanien" tags={["Journal"]} img={imageHandler('/img/ana.png', {format: "auto", width: 640})}>
      Ana är osteopat och fysioterapeut med över 20 års erfarenhet. Hon driver Spanda Healthcare i de vackra Tramuntana-bergen på Mallorca.
    </BlogPost>

    <BlogPost type="Kundberättelse" href="/sv/case/majornas-osteopati" title="Nya perspektiv" name="Majornas Osteopati" location="Göteborg" tags={["Journal", "Invoicing", "Kommunikation"]} img={imageHandler('/img/petter.jpg', {format: "auto", width: 640})}>
      Petter driver två osteopatikliniker i Göteborg. Där möter han alla typer av patienter vilket ger honom nya perspektiv varje dag.
    </BlogPost>

</BlogPosts>
  

