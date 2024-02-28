<script lang="ts">
	import Footer from "$components/footer.svelte";
    import Img from "$components/img.svelte";
    import ImgSection from "$components/imgSection.svelte";
	import LegalLi from "$components/legalLi.svelte";
	import LegalUl from "$components/legalUl.svelte";
import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import Nav from "$components/nav.svelte";
	import Person from "$components/person.svelte";
	import { setContext } from "svelte";

  setContext('lang', 'en');
  setContext('hideLangBanner', true);

</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>



<Nav />

<div class="overflow-hidden bg-white py-32">
  <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
      <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Media kit</h2>
        <p class="mt-6 text-xl leading-8 text-gray-600">Logos, product screenshots, brand values, tonality. It's all here.</p>
        <p class="mt-6 text-base leading-7 text-gray-600">If you're missing something here or would like to use our content in a way not covered here. Please let us know.</p>
        <div class="mt-10 flex">
          <a href="/en/support" class="rounded-md bg-oldpink px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-oldpink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oldpink-600">Get in touch <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
        <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
          <img src="/img/arvid-david-fika.jpg" alt="" class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover">
        </div>
      </div>
    </div>
  </div>
</div>



<ModuleSection>
	<span slot="title">Brand values <i class="fa-regular fa-heart text-oldpink"></i></span>
	<span slot="sub">
		Our brand reflects who we are and it helps define what we do. Fluff warning ahead!
	</span>

	<ModuleFeature>
		<span slot="title">
			Flexibility
		</span>
		<span slot="body">
			Kaddio is flexible, thus it can be used in many ways for many different industries. Flexibility also means our customers may use parts of the system and not others, then the other parts of the system should not be distracting. Kaddio incorporates right into our customers business and we always strive to make a move to Kaddio as seamless as it could possibly be.
		</span> 
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">
      		Wholeness
		</span>
		
		<span slot="body">
			Kaddio is whole and capable to fulfill all needs of a business. Wholeness means that Kaddio is a complete system but not a collection of different tools juxtaposed. It's a complete system that works as one body and where each part of the system seamlessly integrates with the other.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">
			Simplicity
		</span>
	
		<span slot="body">
			Every part of Kaddio is and should be designed to be simple. Simple to use, simple to understand, Kaddio should also be simple to implement into an existing business. It should also be easy to understand what Kaddio is and what problems it solves.
		</span>
	</ModuleFeature>
</ModuleSection>





<ModuleSection>
	<span slot="title">Writing <i class="fa-regular fa-pen"></i></span>
	<span slot="sub">
		This is how we approach writing so that it's consistent with our brand. Our tone is professional, warm and humane. We aim to be clear and consistent, and we avoid being vague and ambiguous. Use "Don't make me think" as a guideline. The key takeaway should begin a sentence, one word (the first word) is often enough.
	</span>

	<ModuleFeature>
		<span slot="title">Help articles</span>
		<span slot="body">
		 	Should mainly communicate product values. Should be very much to the point, short and concise. Help articles should be easy to understand. Avoid specifics to give the article a long life.
		</span> 
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Social media</span>
		<span slot="body">
			Writing for social media is more laid back, but still consistent with our values, more focus on company values. It's a way to show our human side.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Product copy</span>
		<span slot="body">
			Consistency is key, being consistent to the very word helps us reuse sentences for translations. Avoiding specifics and being as general as possible also ensures the copy will have a long life and that it's translations can be reused. All product copy is written in Swedish and then translated.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Newsletters</span>
		<span slot="body">
			Today, Newsletters are our main channel to customers. We communicate both product and company values. Newsletters should be easy to grasp and be written in such a way that it makes the reader feel like a friend is talking to them.
		</span>
	</ModuleFeature>

  <ModuleFeature>
		<span slot="title">Dashboard news</span>
		<span slot="body">
			The dashboard is where all of our users start their sessions. The message here should be short and up-to-date. 3-5 items in total and 1-2 sentences per item. News is about the now so avoid using the word "now". Any news must not be older than 4 weeks.
		</span>
	</ModuleFeature>

  <ModuleFeature>
		<span slot="title">Don't ✨ with 🙃</span>
		<span slot="body">
      <strong>Avoid</strong> emojis/icons <i>and</i> <strong><i>mixing <i style="text-decoration: underline">of styles</i></strong>. When used, it must have a well defined purpose. 
		</span>
	</ModuleFeature>

</ModuleSection>


<ImgSection>
    <Img src="/img/logotypes/Kaddio_Logga_Normal.svg" name="Kaddio_Logga_Normal.svg" />
    <Img src="/img/logotypes/Kaddio_Logga_Normal.png" name="Kaddio_Logga_Normal.png" />
    <Img src="/img/logotypes/Kaddio_Logga_Symbol.svg" name="Kaddio_Logga_Symbol.svg" />
    <Img src="/img/logotypes/Kaddio_Logga_Symbol.png" name="Kaddio_Logga_Symbol.png" />  
    <Img src="/img/man.jpg" name="man.png" />  
</ImgSection>

<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
    <div class="max-w-2xl">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Colors <i class="fa-regular fa-palette"></i></h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">Our colors communicate warmth and kaddio.com should be our living example of how we use colors. These are the main colors we use throughout everything (most) we do.</p>
    </div>
    <ul class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        <Person color="bg-oldpink">
            <span slot="name">Oldpink</span>
            <span slot="title">Website links</span>
        </Person>

        <Person color="bg-oldpinkdarker">
          <span slot="name">Oldpink darker</span>
          <span slot="title">Hover state for oldpink etc.</span>
		</Person>

        <Person color="bg-yellow-500">
            <span slot="name">Yellow</span>
        </Person>

        <Person color="bg-red-500">
			<span slot="name">Red</span>
        </Person>		

		<Person color="bg-teal-500">
            <span slot="name">Teal</span>
        </Person>		

	</ul>
  </div>
</div>


<Footer />