<script lang="ts">
	import Footer from "$components/footer.svelte";
import ModuleFeature from "$components/moduleFeature.svelte";
	import ModuleSection from "$components/moduleSection.svelte";
	import Nav from "$components/nav.svelte";
	import { setContext } from "svelte";

  setContext('lang', 'en');

</script>

<Nav />

<div class="overflow-hidden bg-white py-32">
  <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
      <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Media kit</h2>
        <p class="mt-6 text-xl leading-8 text-gray-600">Logos, product screenshots, brand values, tonality. It's all here.</p>
        <p class="mt-6 text-base leading-7 text-gray-600">Pleas use this with caution</p>
        <div class="mt-10 flex">
          <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Join our team <span aria-hidden="true">&rarr;</span></a>
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
		Our brand reflects who we are and it defines what we do. Fluff warning ahead.
	</span>

	<ModuleFeature>
		<span slot="title">Flexibiliy</span>
		<span slot="body">
			Journalför på ett säkert sätt, där och när du vill. Slipp pappershantering, pärmar och backup.
		</span> 
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Complete</span>
		<span slot="body">
			Utforma mallar för journalanteckningar utifrån verksamhetens behov. 
			<!-- Spara tid genom att sätta upp mallar med malltexter, lägg in egna bilder att rita på samt egna kortkommandon för dina vanliga fraser. -->
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Simplicity</span>
		<span slot="body">
			Styr åtkomst till klienter och journaler. Du bestämmer själv vem som kommer åt vad.
			<!-- Följ aktivitet i journaler genom Kaddios log för spårbarhet och regelefterlevnad. -->
		</span>
	</ModuleFeature>

</ModuleSection>



<ModuleSection>
	<span slot="title">Copy <i class="fa-regular fa-pen"></i></span>
	<span slot="sub">
		Our brand reflects who we are and it defines what we do. Fluff warning ahead.
	</span>

	<ModuleFeature>
		<span slot="title">Flexibiliy</span>
		<span slot="body">
			Journalför på ett säkert sätt, där och när du vill. Slipp pappershantering, pärmar och backup.
		</span> 
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Complete</span>
		<span slot="body">
			Utforma mallar för journalanteckningar utifrån verksamhetens behov. 
			<!-- Spara tid genom att sätta upp mallar med malltexter, lägg in egna bilder att rita på samt egna kortkommandon för dina vanliga fraser. -->
		</span>
	</ModuleFeature>

	<ModuleFeature>
		<span slot="title">Simplicity</span>
		<span slot="body">
			Styr åtkomst till klienter och journaler. Du bestämmer själv vem som kommer åt vad.
			<!-- Följ aktivitet i journaler genom Kaddios log för spårbarhet och regelefterlevnad. -->
		</span>
	</ModuleFeature>

</ModuleSection>

<Footer />