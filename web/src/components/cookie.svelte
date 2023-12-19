<script lang="ts">
	import { _ } from "$lib/stores";
    import { browser } from '$app/environment';

    import { writable } from "svelte/store";
    import { getContext } from "svelte";

    let cookiesAllow;

    if (browser) {
        cookiesAllow = writable<string>(window.localStorage.getItem('cookiesAllow') ?? "undefined");

        cookiesAllow.subscribe(
            (value) => (localStorage.cookiesAllow = value)
        );
    }

    const lang = getContext("lang");

</script>

{#if $cookiesAllow == "undefined"}
    <div class="fixed z-10 inset-x-0 bottom-0 flex flex-col justify-between gap-x-8 gap-y-4 bg-white p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8">
        <p class="max-w-4xl text-sm leading-6 text-gray-900">This website uses cookies. Accepting our cookies is optional but recommended. See our <a href="/{lang}/legal/privacy" class="font-semibold text-gray-900">cookie policy</a> for fine print, have a great day!</p>

        <div class="flex flex-none items-center gap-x-5">
            <button on:click={() => {$cookiesAllow = true}} type="button" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Accept</button>
            <button on:click={() => {$cookiesAllow = false}} type="button" class="text-sm font-semibold leading-6 text-gray-900">Reject</button>
        </div>
    </div>
{/if}

<svelte:head>
    {#if $cookiesAllow == true}

        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PM82HWFT');</script>
        <!-- End Google Tag Manager -->
    {/if}
</svelte:head>

{#if $cookiesAllow == true}
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe title="googletagmanager" src="https://www.googletagmanager.com/ns.html?id=GTM-PM82HWFT"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
{/if}
