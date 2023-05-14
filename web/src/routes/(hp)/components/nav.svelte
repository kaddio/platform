<script lang="ts">
	import { getContext } from "svelte";
	import { _ } from "../../../stores";
	import Referral from "./referral-banner.svelte";
	import LangBanner from "./lang-banner.svelte";
  const lang = getContext('lang');

  let show = false;

  function clickOutside(node){
    const handleClick = (event) => {
      if(!node.contains(event.target)){
        node.dispatchEvent(new CustomEvent('outclick'));
      }
    }

    document.addEventListener("click", handleClick, true);
  }

  export let darkHeader: boolean = false;

</script>

<header class="relative inset-x-0 top-0 z-50">

  <LangBanner />
  <Referral />

  <nav class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
      <a href="/{lang}" class="-m-1.5 p-1.5">
        <span class="sr-only">Kaddio</span>
        <img class="h-8 w-auto" src={darkHeader ? '/img/kaddio-logo.png' : '/img/kaddio-svart.png'} alt="">
      </a>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
<!-- 
      <a class="{darkHeader ? 'text-white' : 'text-gray-900'} text-sm font-semibold leading-6">
        Marketplace <span class="inline-flex items-center rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800">Kommer snart</span>
      </a>      -->


      <a href="/{lang}/support" class="{darkHeader ? 'text-white' : 'text-gray-900'} text-sm font-semibold leading-6">{ $_('Kontakta oss')}</a>

      <a href="#price" class="{darkHeader ? 'text-white' : 'text-gray-900'}  text-sm font-semibold leading-6">{ $_('Pris')}</a>
    </div>
    <div class="flex flex-1 items-center justify-end gap-x-6">
      <a href="/{lang}/sign-in" class="{darkHeader ? 'lg:text-white' : 'lg:text-gray-900'} hidden lg:block lg:text-sm lg:font-semibold lg:leading-6">{ $_('Logga in')}</a>
      <a href="/{lang}/create" class="rounded-md bg-oldpink py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-oldpinkdarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">{ $_('Skapa konto')}</a>
    </div>
    <div class="flex lg:hidden">
      <button on:click={() => {show = true}} type="button" class="{darkHeader ? 'text-white' : 'text-gray-900'} -m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
        <span class="sr-only">Open main menu</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  </nav>
  <!-- Mobile menu, show/hide based on menu open state. -->
  <div use:clickOutside on:outclick={() => (show = false)} class="lg:hidden" class:hidden={!show} role="dialog" aria-modal="true">
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0 z-10"></div>
    <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center gap-x-6">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="/img/kaddio-svart.png" alt="">
        </a>
        <a href="/sv/create" class="ml-auto rounded-md bg-oldpink py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-oldpinkdarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">{ $_('Skapa konto')}</a>
        <button type="button" on:click={() => (show = false)} class="-m-2.5 rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <a href="/{lang}/support" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{ $_('Kontakta oss')}</a>

            <!-- <a class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
              Marketplace <span class="inline-flex items-center rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800">Kommer snart</span>
            </a> -->

            <a href="#price" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{ $_('Pris')}</a>
          </div>
          <div class="py-6">
            <a href="/{lang}/sign-in" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{ $_('Logga in')}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>