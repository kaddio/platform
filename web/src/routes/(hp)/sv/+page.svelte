<script lang="ts">	
	import ModulesSv from './modulesSv.svelte';
	import QuotesSv from './quotesSv.svelte';
	import PricesSv from './pricesSv.svelte';
	import ReferencesSv from './referencesSv.svelte';
	import { setContext } from 'svelte';
	import Footer from '$components/footer.svelte';
	import SecuritySectionSv from './securitySectionSv.svelte';
	import Nav from '$components/nav.svelte';
	import CrmSv from './crmSv.svelte';
	import Testimonial from './testimonial.svelte';

	setContext('lang', 'sv');

	const scroll = function(id: string){
		const element = document.getElementById(id);
		element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
	}


	/*** Idea...


	src="https://kaddio.com/cdn-cgi/image/format=auto,metadata=none,anim=false/https://next.kaddio.com/img/man.jpg" 

srcset="
   https://kaddio.com/cdn-cgi/image/format=auto,metadata=none,anim=false,width=640/https://next.kaddio.com/img/man.jpg 640w,
	https://kaddio.com/cdn-cgi/image/format=auto,metadata=none,anim=false,width=960/https://next.kaddio.com/img/man.jpg 960w,
	https://kaddio.com/cdn-cgi/image/format=auto,metadata=none,anim=false,width=1920/https://next.kaddio.com/img/man.jpg 1920w,
	https://kaddio.com/cdn-cgi/image/format=auto,metadata=none,anim=false,width=2560/https://next.kaddio.com/img/man.jpg 2560w,
"

***/

</script>

<svelte:head>
	<title>Kaddio - framtidens journalsystem</title>
	<meta name="description" content="Kaddio - Webbaserat allt-i-allo-system för dig som hjälper andra" />
</svelte:head>

<div class="bg-white">
	<Nav darkHeader={true} />

	<div class="relative -mt-24 isolate overflow-hidden bg-gray-900 pt-14 pb-16 sm:pb-20">
		<img src="/img/man.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
			<div class="text-center">
				<h1 class="text-4xl font-normal tracking-tight text-white sm:text-6xl">Kaddio är allt du behöver</h1>
				<p class="mt-6 text-lg leading-8 font-light text-white">Webbaserat allt-i-allo-system för dig som hjälper andra.</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a href="https://demo.kaddio.com/login" target="_blank" rel="noreferrer" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-oldpink shadow-sm hover:bg-oldpink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400">Prova demo</a>
					<button on:click={() => (scroll('functions'))} class="text-sm font-semibold leading-6 text-white">Läs mer <span aria-hidden="true">→</span></button>
				</div>
			</div>

			<Testimonial />
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
</div>


<ModulesSv />
<!-- <CrmSv /> -->
<QuotesSv />
<PricesSv />
<SecuritySectionSv />

<ReferencesSv />
<Footer />
