<script lang="ts">
	import { goto } from "$app/navigation";
	import { getContext } from "svelte";
	import { countryCodeFromLang, getRegion } from "$lib/regions";
	import { _ } from "$lib/stores";
    import Toggle from "./toggle.svelte";

    let submitIsEnabled: boolean = false;

    let state: boolean;

    $: submitIsEnabled = state && !!email;

    const submit = async function(e: SubmitEvent) {
        const formData = new FormData(e.target);

        try {
            const response = await fetch('https://api.kaddio.com/api/org', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Object.fromEntries(formData.entries()))
            });

            const json = await response.json();

            console.log(json);
           
            if(json.status == 'success'){
                orgCreated = true;
                goto('#top')
            }

            else{
                fail = true;
                urlUnavailable = ["URL är upptagen, prova med en annan", "URL är inte tillgänglig, prova med en annan"].includes(json.msg)
            }

        } catch(e) {
            console.log(e)
            fail = false;
        }
    }

    let showCoupon: boolean = false;
    let orgCreated: boolean = false
    let fail: boolean = false;
    let urlUnavailable: boolean = false;
    let url: string = '';

    let orgName: string;
    let email: string;

    const slugify = function(str: string){
        return str.toLowerCase()
            .replace(/ /g, '') // Remove whitespace
            .replace(/-*$/, '') // Cannot end with -
            .replace(/^-*/, '') // Cannot begin with -
            .replace(/Ã¥/g, 'a') // Ã¥ -> a
            .replace(/Ã¤/g, 'a') // Ã¤ -> a
            .replace(/Ã¶/g, 'o') // Ã¶ -> o
            .replace(/http(s)?/g, '') // Ã¶ -> o
            .replace(/[^\w-]+/g, ''); // Remove non alphanumeric characters            
    }

    $: url = slugify(orgName || '');

    const countries = [
        ['Sverige', 'se'],
        ['Finland', 'fi'],
        ['Norge', 'no'],
        ['Danmark', 'dk'],
        ['Spanien', 'es'],
        ['Någon annanstans', 'se'],
    ].map(c => ({label: c[0], name: c[1]}))

    let country = getRegion(countryCodeFromLang(getContext('lang'))).defaultCountryCode;
</script>


    <div class="isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
        <!-- <Cloud /> -->
        {#if orgCreated}
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{ $_('Tack!')}</h2>
                <p class="mt-2 text-lg leading-8 text-gray-600">{ $_('Kontot är skapat, kolla din mail för att logga in.')}</p>
            </div>
        {:else}
        

        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{ $_('Skapa konto')}</h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">{ $_('Det tar bara några minuter att komma igång.')} { $_('Kostnadsfritt i 1 månad.')}</p>
        </div>

        
        <form on:submit|preventDefault={submit}  method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
            <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                <div>
                <label for="firstname" class="block text-sm font-semibold leading-6 text-gray-900">{ $_('Förnamn')}</label>
                <div class="mt-2.5">
                    <input type="text" name="firstname" id="firstname" autocomplete="given-name" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oldpink sm:text-sm sm:leading-6">
                </div>
                </div>
                <div>
                <label for="lastname" class="block text-sm font-semibold leading-6 text-gray-900">{ $_('Efternamn')}</label>
                <div class="mt-2.5">
                    <input type="text" name="lastname" id="lastname" autocomplete="family-name" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oldpink sm:text-sm sm:leading-6">
                </div>
                </div>

                <div class="sm:col-span-2">
                    <label for="orgname" class="block text-sm font-semibold leading-6 text-gray-900">{ $_('Företagsnamn')}</label>
                    <div class="mt-2.5">
                        <input bind:value={orgName} type="text" name="orgname" id="orgname" autocomplete="organization" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oldpink sm:text-sm sm:leading-6">
                    </div>
                </div>

                <input type="hidden" name="create" value="">


                <div class="rounded-md shadow-sm sm:col-span-2">
                    <label for="orgurl" class="block text-sm font-semibold leading-6 text-gray-900">URL</label>
                    <div class="mt-2.5 flex">
                        <input type="text" bind:value={url} name="orgurl" id="orgurl" autocomplete="url" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oldpink sm:text-sm sm:leading-6">
                        <span class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">.kaddio.com</span>
                    </div>
                </div>
        

                <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">{ $_('E-post')}</label>
                <div class="mt-2.5">
                    <input bind:value={email} type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oldpink sm:text-sm sm:leading-6">
                </div>
                </div>

                <div class="sm:col-span-2">

                    <label for="countrycode" class="block text-sm font-semibold leading-6 text-gray-900">{ $_('Land')}</label>

                    <select bind:value={country} id="countrycode" name="countrycode" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-oldpink sm:text-sm sm:leading-6">
                        {#each countries as country}
                            <option value={country.name}>{$_(country.label)}</option>
                        {/each}
                    </select>
                </div>

                <Toggle bind:state>
                    <span slot="label">
                        Jag godkänner 
                        <a href="/sv/legal/tos" class="font-semibold text-oldpink">Användarvillkor</a> och <a href="/sv/legal/privacy" class="font-semibold text-oldpink">Sekretesspolicy</a>.          
                    </span>
                </Toggle>

            </div>

            <div class="mt-10">
                <button disabled={!submitIsEnabled} type="submit" class="disabled:opacity-75 block w-full rounded-md bg-oldpink px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-oldpinkdarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oldpink">{ $_('Skapa konto')}</button>
            </div>

            {#if fail}
                <div class="rounded-md bg-red-50 p-4 mt-10">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
                            </svg>
                        </div>

                        <div class="ml-3">
                            {#if urlUnavailable}
                            <h3 class="text-sm font-medium text-red-800">URL är upptagen, prova med en annan.</h3>
                            {:else}
                                <h3 class="text-sm font-medium text-red-800">Kontrollera formuläret</h3>
                            {/if}
                        </div>
                    </div>
                </div>
            {/if}
        </form>
    {/if}
    </div>
