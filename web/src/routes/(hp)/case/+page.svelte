<script>
	import Nav from '$components/nav.svelte';
	import Footer from '$components/footer.svelte';
	import { setContext } from 'svelte';
	import BlogPost from '$components/blog-post.svelte';

  setContext('lang', 'en');

</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

  
<div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Case studies</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">How other successful businesses use Kaddio.</p>
        <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">

        <BlogPost href="/case/ana-mallorca" title="Osteopathic endeavours in Mallorca" name="Ana Casanovas practice" nameTitle="" location="Mallorca, Spain" tags={["Medical record", "Booking"]} img="/img/ana.png">
            Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.
        </BlogPost>

        <BlogPost href="/case/majornas-osteopati" title="An old approach to the new body" name="Majornas Osteopati" nameTitle="" location="Göteborg, Sweden" tags={["Medical record"]}>
            Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.
        </BlogPost>
        
        <BlogPost href="/case/spine-clinic" title="Pain is only the beginning" name="Spine Clinic" nameTitle="" location="Hua Hin, Thailand" tags={["Medical record, Invoicing"]}>
            Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.
        </BlogPost>

    </div>
      </div>
    </div>
  </div>

