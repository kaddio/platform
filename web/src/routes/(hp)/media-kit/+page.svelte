<script lang="ts">
	import Footer from "$components/footer.svelte";
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
	<span slot="title">Brand values <i class="fa-regular fa-heart"></i></span>
	<span slot="sub">
		Our brand reflects who we are and it defines what we do. Fluff warning ahead!
	</span>

	<ModuleFeature>
    
		<span slot="title">
      Flexibiliy
      <span class="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-oldpink ring-1 ring-inset ring-oldpink">Product value</span>
    </span>
		<span slot="body">
			Kaddio is flexible in a sense that it can be used in many ways for many different industries. It's a tool that can be used to solve many different problems. It's flexibility also means a user may use parts of the system and not others. Kaddio incorporates right into their business and should minimize steps needed to change system as a whole.
		</span> 
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">
      Wholeness
      <span class="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-oldpink ring-1 ring-inset ring-oldpink">Product value</span>
    </span>
		<span slot="body">
			But Kaddio may also be the only tool needed to fulfill all needs of a business. It's complete in that sense. Wholeness also means that Kaddio is a complete system, but not a collection of different tools glued together. It's a complete system that works together and where each part of the system seamlessly integrates with the other.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">
      Simplicity
      <span class="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-oldpink ring-1 ring-inset ring-oldpink">Product value</span>

    </span>
		<span slot="body">
			Every part of Kaddio is designed to be simple. Simple to use, simple to understand, Kaddio should also be simple to implement into an existing business.
		</span>
	</ModuleFeature>



	<ModuleFeature>
		<span slot="title">
			We're human!
			<span class="rounded-full bg-teal-500/10 px-3 py-1 text-sm font-semibold leading-6 text-teal-400 ring-1 ring-inset ring-teal-500/20">Company value</span>
		</span>

		<span slot="body">
			Kaddio as a company is human. We're an independent business and a small team of people who care about our customers, each other and our products.
		</span> 
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">
			We take responsibility!
			<span class="rounded-full bg-teal-500/10 px-3 py-1 text-sm font-semibold leading-6 text-teal-400 ring-1 ring-inset ring-teal-500/20">Company value</span>
		</span>

		<span slot="body">
			We use our own products and take responsibility for our products. We we make a mistake we own up to it and fix it. We're not afraid to admit we mess up, rather we see it as an opportunity to show who we are.
		</span> 
	</ModuleFeature>

</ModuleSection>


<ModuleSection>
	<span slot="title">Writing <i class="fa-regular fa-pen"></i></span>
	<span slot="sub">
		This section describes how we approach writing. It's a guide for how to write in a way that's consistent with our brand. Technical writing, marketing writing, social media writing, it's all here.
	</span>

	<ModuleFeature>
		<span slot="title">Help articles</span>
		<span slot="body">
		 	Should mainly communicate product values. Should be very much to the point, short and concise. Help articles should be easy to understand. Avoid specifics if possible and give the article a long life.
		</span> 
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Social media</span>
		<span slot="body">
			Writing for social media is more laid back, but must be consistent with our values, here it's the company values that are important. It's a way to show our human side.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Product copy</span>
		<span slot="body">
			Consistency is key here, being consistent to the very word helps us reuse sentences for translations. Avoid specifics and be as general as possible also ensures the copy will have a long life and that it's translations can be reused.
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Newsletters</span>
		<span slot="body">
			Newsletters are currently our main channel to customers. We communicate both product and company values. Newsletters should be easy to grasp and be written in a way that makes the recipient feel like they're talking to a friend.
		</span>
	</ModuleFeature>

</ModuleSection>





<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
    <div class="max-w-2xl">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Colors <i class="fa-regular fa-palette"></i></h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">kaddio.com is our living example of how we use colors. These are our main colors that we use throughout everything we do.</p>
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