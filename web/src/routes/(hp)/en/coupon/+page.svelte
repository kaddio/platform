<script lang="ts">
	import { setContext } from 'svelte';
	import { token } from '$lib/stores';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';
	import { imageHandler } from '$lib/img';
    setContext('lang', 'en');

</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

<Nav />

{#if $token}
<div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
        <div class="mx-auto w-full max-w-xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900">{$token.name} recommends Kaddio</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">With this coupon from {$token.name}, you can use Kaddio for free until {$token.debitFromISO}</p>
          <div class="mt-8 flex items-center gap-x-6">

            <a href="/en/create" class="rounded-md bg-oldpink px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-oldpinkdarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oldpink">Create account</a>
            <a href="/en" class="text-sm font-semibold text-gray-900">Learn more about Kaddio <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>

        {#if $token.img}            
            <div class="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                <img class="max-h-24 w-full object-contain object-left" src="{imageHandler($token.img, {format: 'auto', fit:'scale-down', width: 320})}" alt="{$token.name} logo" width="105">
            </div>
        {/if}
      </div>
    </div>
  </div>
  
  
{/if}

<Footer />