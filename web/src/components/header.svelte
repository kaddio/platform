<script lang="ts">
    import { page } from "$app/stores";
    import { _ } from "$lib/stores";
    import { getContext } from "svelte";
    const lang = getContext('lang');

    export let darkHeader: boolean = false;

    let navOpen = false;
	
	function handleNav() {
		navOpen = !navOpen;
	}

    $: lightText = darkHeader && !navOpen;

    let show = false;

function clickOutside(node){
    console.log('clickOutside');
  const handleClick = (event) => {
    if(!node.contains(event.target)){
      node.dispatchEvent(new CustomEvent('outclick'));
    }
  }

  document.addEventListener("click", handleClick, true);
}

function onKeyDown(event){
  if(event.repeat) return;

  if(event.key === 'Escape'){
    show = false;
    navOpen = false;
    event.preventDefault();
  }

  if(event.key === 'm'){
    navOpen = true;
    show = true;
    event.preventDefault();
  }

}

$: $page.url && (navOpen = false);

</script>

<svelte:window
    on:keydown={onKeyDown}
/>

<header class="relative isolate z-10">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/{lang}" class="-m-1.5 p-1.5">
          <span class="sr-only">Kaddio</span>
          <img class="h-8 w-auto" src={lightText ? '/img/kaddio-logo.png' : '/img/kaddio-black.png'} alt="">
        </a>
      </div>

      <div class="hidden lg:flex lg:gap-x-12">
        <div>
          <button on:click={handleNav} type="button" class="{lightText ? 'text-white' : 'text-gray-900'} flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false">
            Tjänster
            <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
  
          <!--
            'Product' flyout menu, show/hide based on flyout menu state.
  
            Entering: "transition ease-out duration-200"
              From: "opacity-0 -translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 -translate-y-1"
          -->
          <div class:invisible={!navOpen} class="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
            <div class="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
              <div class="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50">
                <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <i class="fal fa-fw fa-xl fa-heart"></i>
                </div>
                <a href="/{lang}/feature/log" class="mt-6 block font-semibold text-gray-900">
                    {$_('Journalsystem')}
                  <span class="absolute inset-0"></span>
                </a>
                <p class="mt-1 text-gray-600">
                    Kaddio Journal har allt du behöver för att dokumentera verksamheten och journalföra klienter.
                </p>
              </div>
              <div class="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50">
                <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <i class="fal fa-fw fa-xl fa-stopwatch"></i>
                </div>
                <a href="/{lang}/feature/cal" class="mt-6 block font-semibold text-gray-900">
                    {$_('Onlinebokning')}
                  <span class="absolute inset-0"></span>
                </a>
                <p class="mt-1 text-gray-600">
                    Komplett bokningssystem och onlinebetalning som gör allt du förväntar dig.                </p>
              </div>
              <div class="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50">
                <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <i class="fal fa-fw fa-xl fa-comments"></i>
                </div>
                <a href="/{lang}/feature/communication" class="mt-6 block font-semibold text-gray-900">
                    {$_('Kommunikation')}
                  <span class="absolute inset-0"></span>
                </a>
                <p class="mt-1 text-gray-600">
                    Kommunicera krypterat via chat eller video inom och utom organisationen.
                </p>
              </div>
              <div class="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50">
                <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <i class="fal fa-fw fa-xl fa-file-lines"></i>
                </div>
                <a href="/{lang}/feature/invoicing" class="mt-6 block font-semibold text-gray-900">
                  {$_('Fakturering')}
                  <span class="absolute inset-0"></span>
                </a>
                <p class="mt-1 text-gray-600">
                    Kaddio Fakturering är ett komplett faktureringsprogram för små och medelstora företag.
                </p>
              </div>
            </div>
            <div class="bg-gray-50">
              <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                  <a href="https://demo.kaddio.com/login-demo" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">

                    <i class="fal fa-fw fa-external-link fa-xl text-gray-400"></i>
                    Prova demo
                  </a>
                  <a href="tel:+46313204414" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                    <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
                    </svg>
                    Kontakta sälj +46 (0) 31-320 44 14
                  </a>
                  <a href="#functions" class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                    <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M2.5 3A1.5 1.5 0 001 4.5v4A1.5 1.5 0 002.5 10h6A1.5 1.5 0 0010 8.5v-4A1.5 1.5 0 008.5 3h-6zm11 2A1.5 1.5 0 0012 6.5v7a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0017.5 5h-4zm-10 7A1.5 1.5 0 002 13.5v2A1.5 1.5 0 003.5 17h6a1.5 1.5 0 001.5-1.5v-2A1.5 1.5 0 009.5 12h-6z" clip-rule="evenodd" />
                    </svg>
                    Visa alla tjänster
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- <a href="/case" class="{lightText ? 'text-white' : 'text-gray-900'} text-sm font-semibold leading-6">Case</a> -->
        <a href="/{lang}/sales" class="{lightText ? 'text-white' : 'text-gray-900'} text-sm font-semibold leading-6">Nyfiken på Kaddio?</a>
        <!-- <a href="/sv/hitta-klinik" class="{lightText ? 'text-white' : 'text-gray-900'} text-sm font-semibold leading-6"><i class="fa fa-magnifying-glass"></i> Hitta klinik</a> -->

        <a href="/{lang}/support" class="{lightText ? 'text-white' : 'text-gray-900'} text-sm font-semibold leading-6">Support</a>

    </div>


      <div class="flex flex-1 items-center justify-end gap-x-6">
        <a href="/{lang}/sign-in" class="{lightText ? 'lg:text-white' : 'lg:text-gray-900'} hidden lg:block lg:text-sm lg:font-semibold lg:leading-6">{ $_('Logga in')}</a>
        <a href="/{lang}/create" class="rounded-md bg-oldpink py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-oldpinkdarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">{ $_('Skapa konto')}</a>
      </div>

      <div class="flex lg:hidden">
        <button on:click={() => {show = true}} type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      


    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div on:click={() => (show = false)} class="lg:hidden" class:hidden={!show} role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-10"></div>
      <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Kaddio</span>
            <img class="h-8 w-auto" src="/img/kaddio-black.png" alt="">
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <div class="-mx-3">
                <button type="button" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
                  Product
                  <!--
                    Expand/collapse icon, toggle classes based on menu open state.
  
                    Open: "rotate-180", Closed: ""
                  -->
                  <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
                <!-- 'Product' sub-menu, show/hide based on menu state. -->
                <div class="mt-2 space-y-2" id="disclosure-1">
                  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Analytics</a>
                  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Engagement</a>
                  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Security</a>
                  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Integrations</a>
                  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Watch demo</a>
                  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact sales</a>
                  <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">View all products</a>
                </div>
              </div>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
            </div>
            <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  
