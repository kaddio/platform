<script>
	import Nav from '$components/nav.svelte';
	import Footer from '$components/footer.svelte';
	import { setContext } from 'svelte';
	import BlogPost from '$components/blog-post.svelte';
	import { imageHandler } from '$lib/img';

  setContext('lang', 'en');

</script>
  
<div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Case studies</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">How other successful businesses use Kaddio.</p>
        <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">

        <BlogPost href="/case/spanda-healthcare" title="Traditional meets modern" name="Spanda Healthcare" nameTitle="" location="Selva, Spain" tags={["Medical record"]} img={imageHandler('/img/ana.png', {format: "auto", width: 640})}>
          Ana is an osteopath and physiotherapist with more than 20 years of experience in the field. She runs Spanda Healthcare in the beautiful Tramuntana mountains of Mallorca.
        </BlogPost>

        <BlogPost href="/case/majornas-osteopati" title="New perspectives" name="Majornas Osteopati" nameTitle="" location="Göteborg, Sweden" tags={["Medical record"]} img={imageHandler('/img/petter.jpg', {format: "auto", width: 640})}>
          Petter runs two clinics in Sweden. In his daily practice he meets all kinds of patients which gives him new perspectives every day.          
        </BlogPost>

        <BlogPost href="/case/osteopatia-mallorca" title="Digital transition" name="Osteopatía Mallorca" nameTitle="" location="Palma, Spain" tags={["Medical record", "Booking"]} img={imageHandler('/img/silvia.png', {format: "auto", width: 640})}>
          Silvia and her husband run the center Osteopatía Mallorca in Palma, Mallorca. In 2022, Silvia started the transition from working with pen and paper to taking digital medical records, using Kaddio.
        </BlogPost>



        <!-- <BlogPost href="/case/majornas-osteopati" title="An old approach to the new body" name="Majornas Osteopati" nameTitle="" location="Göteborg, Sweden" tags={["Medical record"]}>
            Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.
        </BlogPost> -->
        
    </div>
      </div>
    </div>
  </div>

