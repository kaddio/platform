<script lang="ts">	
	import ModulesSv from './modulesSv.svelte';
	import QuotesSv from './quotesSv.svelte';
	import PricesSv from './pricesSv.svelte';
	import ReferencesSv from './referencesSv.svelte';
	import { setContext } from 'svelte';
	import Footer from './footerSv.svelte';
	import NavSv from './navSv.svelte';
	import SecuritySectionSv from './securitySectionSv.svelte';
	import Cloud from '../components/cloud.svelte';
	import { token } from '../../../stores';

	setContext('lang', 'sv');

</script>

<svelte:head>
	<title>Kaddio - framtidens journalsystem</title>
	<meta name="description" content="Kaddio - Webbaserat allt-i-allo-system för dig som hjälper andra" />
</svelte:head>

<div class="bg-white">
	<NavSv darkHeader={true} />

	<!-- Hero section -->
	<div class="relative isolate overflow-hidden bg-gray-900 pt-14 pb-16 sm:pb-20">
		<!-- <Cloud /> -->
		<img src="/img/man.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
		<div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
		<svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
			<path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".2" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
			<defs>
			<linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
				<stop stop-color="#9089FC" />
				<stop offset="1" stop-color="#FF80B5" />
			</linearGradient>
			</defs>
		</svg>
		</div>
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
			<div class="hidden sm:mb-8 sm:flex sm:justify-center">

			<!-- <div class="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
				Snart lanserar vi funktionen X. <a href="#" class="font-semibold text-white"><span class="absolute inset-0" aria-hidden="true"></span>Läs mer <span aria-hidden="true">&rarr;</span></a>
			</div> -->
			
			</div>
			<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Kaddio är allt du behöver</h1>
			<p class="mt-6 text-lg leading-8 text-gray-300">Kaddio är ett webbaserat allt-i-allo-system för dig som hjälper andra. Kaddio är så enkelt att du slipper trötta ut frontalloben i onödan. Din hjärna kommer att älska det.</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<a href="https://demo.kaddio.com/login" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-oldpink shadow-sm hover:bg-oldpink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400">Prova demo</a>
				<a href="/hp/sv/create" target="_blank" rel="noreferrer" class="text-sm font-semibold leading-6 text-white">Skapa konto <span aria-hidden="true">→</span></a>
			</div>
			</div>

			{#if $token?.testimonial}
				<div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
					<figure class="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
					<blockquote class="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
						<p>“{$token.testimonial}”</p>
					</blockquote>
					<figcaption class="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
						{#if true}
							<img class="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80" alt="">
						{/if}
						<div class="flex-auto">
						<div class="font-semibold">{$token.fullname}</div>
						<div class="text-gray-600">{$token.title}, {$token.orgName}</div>
						</div>
					</figcaption>
					</figure>
				</div>	
			{/if}
		

		</div>

		
		</div>
		
		<div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
		<svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
			<path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".2" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
			<defs>
			<linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
				<stop stop-color="#9089FC" />
				<stop offset="1" stop-color="#FF80B5" />
			</linearGradient>
			</defs>
		</svg>
		</div>


	</div>


<ModulesSv />

	<div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
	  <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
		<svg viewBox="0 0 1024 1024" class="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2" aria-hidden="true">
		  <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
		  <defs>
			<radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
			  <stop stop-color="#7775D6" />
			  <stop offset="1" stop-color="#E935C1" />
			</radialGradient>
		  </defs>
		</svg>
		<div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
		  <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Förenkla kundkommunikationen</h2>
		  <p class="mt-6 text-lg leading-8 text-gray-300">Bjud in dina kunder till Kaddio för att dela dokument, chatta eller ha videosamtal. Kaddio är som ett säkert bankvalv där ni kan dela allt. Dina kunder kommer att älska det.</p>
		  <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
			<a href="/hp/sv/create" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Bli kund</a>
			<a href="https://demo.kaddio.com" target="_blank" rel="noreferrer" class="text-sm font-semibold leading-6 text-white">Live demo <span aria-hidden="true">→</span></a>
		  </div>
		</div>
		<div class="relative mt-16 h-80 lg:mt-8">
		  <img class="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="/img/screenshot.png" alt="App screenshot" width="1824" height="1080">
		</div>
	  </div>
	</div>
  </div>
  

<QuotesSv />
<PricesSv />
<SecuritySectionSv />

<ReferencesSv />
<Footer />
