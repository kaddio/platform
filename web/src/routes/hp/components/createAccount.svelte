<script lang="ts">
	import Cloud from "./cloud.svelte";
    import Toggle from "./toggle.svelte";
	import { getContext } from "svelte";

    let submitIsEnabled: boolean = false;

    let state: boolean;

    let defaultCountry;
    const selectedLang = getContext('lang');


    console.log(selectedLang)


    $: submitIsEnabled = state && !!email;
    
    const submit = async function(e: SubmitEvent) {
        const formData = new FormData(e.target);

        try {
            // 'https://api.kaddio.com/api/org';
            const response = await fetch('http://localhost:3000/api/org', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Object.fromEntries(formData.entries()))
            });

            orgCreated = true;
        } catch(e) {
            
        }
    }

    let showCoupon: boolean = false;
    let orgCreated: boolean = false
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
        ['Elsewhere', 'se'],
    ].map(c => ({label: c[0], name: c[1]}))

</script>



{#if !orgCreated}
    <div class="isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
        <Cloud />
        <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Skapa konto</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Det tar bara några minuter att komma igång och du betalar bara för vad du använder. Kostnadsfritt i 1 månad.</p>
        </div>
        <form on:submit|preventDefault={submit}  method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
        <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div>
            <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Förnamn</label>
            <div class="mt-2.5">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6">
            </div>
            </div>
            <div>
            <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Efternamn</label>
            <div class="mt-2.5">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6">
            </div>
            </div>

            <div class="sm:col-span-2">
                <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Företag</label>
                <div class="mt-2.5">
                    <input bind:value={orgName} type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6">
                </div>
            </div>

            <div class="sm:col-span-2">
                <label for="url" class="block text-sm font-semibold leading-6 text-gray-900">URL</label>
                <div class="mt-2.5">
                    <input bind:value={url} type="text" name="url" id="url" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6">
                </div>
            </div>

            <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">E-post</label>
            <div class="mt-2.5">
                <input bind:value={email} type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6">
            </div>
            </div>

            <div class="sm:col-span-2">

                <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Land</label>

                <select id="country" name="country" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6">
                    {#each countries as country}
                        <option value={country.name}>{country.label}</option>
                    {/each}
                </select>
            </div>

            <Toggle bind:state>
                <span slot="label">
                    Jag godkänner 
                    <a href="/hp/sv/page/tos" class="font-semibold text-purple-600">Användarvillkor</a> och <a href="/hp/sv/page/privacy" class="font-semibold text-purple-600">Sekretesspolicy</a>.          
                </span>
            </Toggle>

        </div>
        <div class="mt-10">
            <button disabled={!submitIsEnabled} type="submit" class="disabled:opacity-75 block w-full rounded-md bg-purple-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">Skapa konto</button>
        </div>
        </form>
    </div>
{/if}