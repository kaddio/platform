<script>
    import Stat from '$components/stat.svelte';
    import Person from '$components/person.svelte';
    import StatPiece from '$components/statPiece.svelte';
	import Nav from '$components/nav.svelte';
	import Footer from '$components/footer.svelte';
	import { setContext } from 'svelte';
	import BlogPost from '$components/blog-post.svelte';

    setContext('lang', 'en');

</script>

<Nav />
  
<div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Case</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">How other successful businesses use Kaddio.</p>
        <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">

        

        <BlogPost title="Osteopathic endeavours in Mallorca" name="Ana Casanovas practice" nameTitle="" location="Mallorca, Spain" tags={["Journal", "Booking"]} img="">
            Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.
        </BlogPost>

        <BlogPost title="An old approach to the new body" name="Mölndalskliniken" nameTitle="" location="Mölndal, Sweden" tags={["Journal"]} img="">
            Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.
        </BlogPost>
        
        </div>
      </div>
    </div>
  </div>


<Footer />