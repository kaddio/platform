<script lang="ts">
    import ModulesSv from './modulesSv.svelte';
    import QuotesSv from './quotesSv.svelte';
    import PricesSv from './pricesSv.svelte';
    import ReferencesSv from './referencesSv.svelte';
    import { setContext } from 'svelte';
    import Footer from '$components/footer.svelte';
    import SecuritySectionSv from './securitySectionSv.svelte';
    import Nav from '$components/nav.svelte';
    import ContactDanielSv from './contactDanielSv.svelte';
    import Hero from '$lib/components/hero.svelte';

    setContext('lang', 'sv');
</script>

<svelte:head>
    <title>Journalsystem, onlinebokning, kommunikation, fakturering</title>
</svelte:head>

<div class="bg-white">
  <Nav darkHeader={true} />

  <Hero manAlt="Bakgrundsbild för Kaddio, en person som sitter med en kaffekopp i handen" demoLink="https://demo.kaddio.com/login-demo">
    <span slot="title">Kaddio är allt du behöver</span>
    <span slot="subtitle">Onlinebokning, journalsystem, chat, video och fakturering i samma system.</span>

  </Hero>

</div>

<ModulesSv />
<!-- <CrmSv /> -->
<QuotesSv />
<PricesSv />
<SecuritySectionSv />

<ReferencesSv />
<ContactDanielSv />
<Footer />

<!-- 
<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
	  <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-5">
		<div>
		  <time datetime="2021-08" class="flex items-center text-sm font-semibold leading-6 text-oldpink">
			<svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
			  <circle cx="2" cy="2" r="2" fill="currentColor" />
			</svg>
			Bli hittad
			<div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
		  </time>
		  <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">... med Hitta klinik</p>
		  <p class="mt-1 text-base leading-7 text-gray-600">
			Kaddio Hitta klinik hjälper dig på ett enkelt sätt att bli hittad 
		  </p>
		</div>
		<div>
		  <time datetime="2021-12" class="flex items-center text-sm font-semibold leading-6 text-oldpink">
			<svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
			  <circle cx="2" cy="2" r="2" fill="currentColor" />
			</svg>
			Få bokning
			<div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
		  </time>
		  <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">... med Onlinebokning</p>
		  <p class="mt-1 text-base leading-7 text-gray-600">Ylva joins our team.</p>
		</div>
		<div>
		  <time datetime="2022-02" class="flex items-center text-sm font-semibold leading-6 text-oldpink">
			<svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
			  <circle cx="2" cy="2" r="2" fill="currentColor" />
			</svg>
			Journalför
			<div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
		  </time>
		  <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Journalsystem</p>
		  <p class="mt-1 text-base leading-7 text-gray-600">Until now, Kaddio was freeware. We wanted to start charging our users 6 months earlier but it took longer than we expected to "automate" the billing process :)</p>
		</div>
		<div>
		  <time datetime="2022-12" class="flex items-center text-sm font-semibold leading-6 text-oldpink">
			<svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
			  <circle cx="2" cy="2" r="2" fill="currentColor" />
			</svg>
			Ta betalt
			<div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
		  </time>
		  <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Onlinebetalning & fakturering</p>
		  <p class="mt-1 text-base leading-7 text-gray-600">Kaddio has been independent from external investors since the beginning, now we are also economically independent from out parent company.</p>
		</div>		<div>
		  <time datetime="2022-12" class="flex items-center text-sm font-semibold leading-6 text-oldpink">
			<svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
			  <circle cx="2" cy="2" r="2" fill="currentColor" />
			</svg>
			Utvärdera
			<div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
		  </time>
		  <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Autoformulär & statistik</p>
		  <p class="mt-1 text-base leading-7 text-gray-600">Kaddio has been independent from external investors since the beginning, now we are also economically independent from out parent company.</p>
		</div>
	  </div>
	</div>
  </div>
   -->
