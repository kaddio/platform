<script lang="ts">	
	import { setContext } from 'svelte';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';
	
	setContext('lang', 'en');

</script>

<svelte:head>
	<title>Kaddio - choose country or region</title>
	<meta name="description" content="Choose country or region" />
</svelte:head>

<Nav />

<div class="mt-20 bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
	  <div class="mx-auto max-w-2xl lg:text-center">
		<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Choose Your Country or Region</p>
		<p class="mt-6 text-lg leading-8 text-gray-600">Kaddio comes preconfigured for many countries and regions, choose country or region to see content specific to your location.</p>
	  </div>
	  <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
		<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
		  <div class="flex flex-col">
			<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
			  Sverige
			</dt>
			<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
			  <p class="flex-auto" lang="sv">Vår svenska sida för svenska och nordiska marknaden. Välj denna site om du är baserad i något av de nordiska länderna.</p>
			  <p class="mt-6">
				<a href="/sv" hreflang="sv" lang="sv" class="text-sm font-semibold leading-6 text-oldpink">kaddio.com/sv <span aria-hidden="true">→</span></a>
			  </p>
			</dd>
		  </div>
		  <div class="flex flex-col">
			<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
			  España
			</dt>
			<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
			  <p class="flex-auto" lang="es">Durante 2023 Kaddio se establece en España. Utiliza este sitio si resides en España o en otra región de habla hispana.</p>
			  <p class="mt-6">
				<a href="/es" hreflang="es" lang="es" class="text-sm font-semibold leading-6 text-oldpink">kaddio.com/es <span aria-hidden="true">→</span></a>
			  </p>
			</dd>
		  </div>
		  <div class="flex flex-col">
			<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
			  Global (English)
			</dt>
			<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
			  <p class="flex-auto" lang="en">Our global site is not bound to a region. If you want to start from a region which is "new to us", contact us and we'll set up currency, VAT, timezone etc. specific to your region</p>
			  <p class="mt-6">
				<a href="/en" hreflang="en" lang="en" class="text-sm font-semibold leading-6 text-oldpink">kaddio.com/en <span aria-hidden="true">→</span></a>
			  </p>
			</dd>
		  </div>
		</dl>
	  </div>
	</div>
  </div>



<Footer />
