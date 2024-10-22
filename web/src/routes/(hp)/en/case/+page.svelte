<script>
	import { setContext } from 'svelte';
	import BlogPost from '$components/blog-post.svelte';
	import { imageHandler } from '$lib/img';
  import BlogPosts from '$components/blog-posts.svelte';

  setContext('lang', 'en');

</script>

<svelte:head>
  <title>Kaddio - Case studies</title>
  <meta name="" content="Learn how Kaddio has helped organizations achieve their business goals." />
</svelte:head>

<BlogPosts>
  <span slot="pretitle">
      Case studies
  </span>

  <span slot="title">
    How other successful businesses use Kaddio.
  </span>

    <BlogPost type="Case study" href="/en/case/afobia" title="Curiosity drives development" name="Afobia" location="Stockholm, Sweden" tags={["Medical record", "Booking", "Communication"]} img={imageHandler('/img/jonas.jpg', {format: "auto", width: 640})}>
      Jonas is a psychologist and psychotherapist with a passion for business development. Meet Jonas at his clinic in Stockholm where he uses Kaddio as a source of inspiration for new business ideas.
    </BlogPost>

    <BlogPost type="Case study" href="/en/case/osteopatia-mallorca" title="Digital transition" name="Osteopatía Mallorca" location="Palma, Spain" tags={["Medical record", "Booking"]} img={imageHandler('/img/silvia.png', {format: "auto", width: 640})}>
      Silvia and her husband run the center Osteopatía Mallorca in Palma, Mallorca. In 2022, Silvia started the transition from working with pen and paper to taking digital medical records, using Kaddio.
    </BlogPost>

    <BlogPost type="Case study" href="/en/case/spanda-healthcare" title="Traditional meets modern" name="Spanda Healthcare" location="Selva, Spain" tags={["Medical record"]} img={imageHandler('/img/ana.png', {format: "auto", width: 640})}>
      Ana is an osteopath and physiotherapist with more than 20 years of experience in the field. She runs Spanda Healthcare in the beautiful Tramuntana mountains of Mallorca.
    </BlogPost>

    <BlogPost type="Case study" href="/en/case/majornas-osteopati" title="New perspectives" name="Majornas Osteopati" location="Göteborg, Sweden" tags={["Medical record", "Invoicing", "Communication"]} img={imageHandler('/img/petter.jpg', {format: "auto", width: 640})}>
      Petter runs two osteopathy clinics in Gothenburg, Sweden. In his practice he meets all kinds of patients which gives him new perspectives every day.          
    </BlogPost>

</BlogPosts>
  

