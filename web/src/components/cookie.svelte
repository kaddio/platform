<script lang="ts">
	import { _ } from "$lib/stores";
    import { browser } from '$app/environment';

    import { writable } from "svelte/store";

    export let cookiesAllow;

    const id = 'AW-871994954';

    if (browser) {
        cookiesAllow = writable<string>(window.localStorage.getItem('cookiesAllow') ?? "undefined");

        cookiesAllow.subscribe(
            (value) => (localStorage.cookiesAllow = value)
        );
    }

    $: {
        if(browser){

            
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag() {
                window.dataLayer!.push(arguments);
            }

            console.log($cookiesAllow)

            if ($cookiesAllow == true) {
                window.gtag('js', new Date());
                window.gtag('config', id);
            }

        }
    }

    // // /wZSKCK7esuUYEMqs5p8D
    // export function gtagReportConversion(conversionId: string) {
    //     window.gtag('event', 'conversion', {
    //         'send_to': id + conversionId
    //     });
    // }

</script>


{#if $cookiesAllow == "undefined"}
    <div class="fixed inset-x-0 bottom-0 flex flex-col justify-between gap-x-8 gap-y-4 bg-white p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8">
        <p class="max-w-4xl text-sm leading-6 text-gray-900">This website uses cookies. Accepting our cookies is optional but recommended. See our <a href="#" class="font-semibold text-gray-900">cookie policy</a>.</p>

        <div class="flex flex-none items-center gap-x-5">
            <button on:click={() => {$cookiesAllow = true}} type="button" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Accept all</button>
            <button on:click={() => {$cookiesAllow = false}} type="button" class="text-sm font-semibold leading-6 text-gray-900">Reject all</button>
        </div>
    </div>
{/if}

<svelte:head>
    <script async src="https://www.googletagmanager.com/gtag/js?id={id}"></script>
</svelte:head>
