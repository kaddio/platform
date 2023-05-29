<script lang="ts">	
	import { setContext } from 'svelte';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';
	import ModulesEs from './modulesEs.svelte';
	import PricesEs from './pricesEs.svelte';
	import { scroll } from '$lib/scroll';
	import SecuritySectionEs from '../es/securitySectionEs.svelte';

	setContext('lang', 'es');
</script>

<svelte:head>
	<title>Kaddio</title>
	<meta name="description" content="Kaddio - Sistema todo en uno basado en la web para usted que ayuda a otros" />
</svelte:head>

<div class="bg-white">
	<Nav darkHeader={true} />

	<div class="relative -mt-24  isolate overflow-hidden bg-gray-900 pt-14 pb-16 sm:pb-20">
		<img src="/img/man.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
			<div class="text-center">
				<h1 class="text-4xl font-normal tracking-tight text-white sm:text-6xl">Kaddio es todo lo que necesitas</h1>
				<p class="mt-6 text-lg leading-8 font-light text-white">Un sistema integral basado en la web diseñado para ti, que ayudas a otros.</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a href="https://demo-es.kaddio.com/login-demo" target="_blank" rel="noreferrer" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-oldpink shadow-sm hover:bg-oldpink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400">Probar demo</a>
					<button on:click={() => (scroll('functions'))} class="text-sm font-semibold leading-6 text-white">Aprende más <span aria-hidden="true">→</span></button>
				</div>
			</div>

			<!-- <Testimonial /> -->
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


<ModulesEs />

<!-- <CrmSv /> -->
<!-- <QuotesSv /> -->
<PricesEs />
<SecuritySectionEs />

<!-- <ReferencesSv /> -->
<Footer />
