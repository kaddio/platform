<script lang="ts">
    import { getContext } from 'svelte';
    import { countryCodeFromLang, getRegion } from '$lib/regions';
    import { _ } from '$lib/stores';
    import Toggle from './toggle.svelte';
    import { enhance } from '$app/forms';
    import { page } from '$app/stores';
    import { slugify } from '$lib/slugify';

    const lang = getContext('lang');

    let submitIsEnabled: boolean = true;

    let state: boolean;

    $: submitIsEnabled = state;

    let url: string = '';
    let urlToOrg: string;

    let orgName: string;

    $: url = slugify(orgName || '');

    $: urlToOrg = url ? `${url}.kaddio.com` : '';
    import { token } from '$lib/stores';

    const countries = [
        ['Sverige', 'SE'],
        ['Finland', 'FI'],
        ['Norge', 'NO'],
        ['Danmark', 'DK'],
        ['Spanien', 'ES'],
        ['Storbritannien', 'GB'],
        ['Någon annanstans', 'SE']
    ].map((c) => ({ label: c[0], name: c[1] }));

    const defaultCountryCode = getRegion(
        countryCodeFromLang(getContext('lang'))
    ).defaultCountryCode;

    $: if ($page.form?.success) {
        console.log('dataLayer push');

        window.dataLayer.push({
            event: 'formSubmission',
            formType: 'Create account'
        });
    }
</script>

<div class="isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
    <!-- <Cloud /> -->
    {#if $page.form?.success}
        <div id="account-created-successfully" class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {$_('Tack!')}
            </h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">
                {$_('Kontot är skapat, kolla din mail för att logga in.')}
            </p>
        </div>
    {:else}
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {$_('Anslut ditt företag')}
            </h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">
                {$_('Det tar bara några minuter att komma igång.')}
                {$_('Kostnadsfritt i 1 månad.')}
            </p>
      
        </div>

        <form method="POST" use:enhance class="mx-auto mt-16 max-w-xl sm:mt-20">
            <input type="hidden" name="coupon" value={$token?.token} />

            <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">


                <div class="sm:col-span-2">
                    <label for="orgname" class="block text-sm font-semibold leading-6 text-gray-900"
                        >{$_('Företagsnamn')}</label
                    >
                    <div class="mt-2.5">
                        <input
                            bind:value={orgName}
                            type="text"
                            name="orgname"
                            id="orgname"
                            autocomplete="organization"
                            class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oldpink sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <input type="hidden" name="create" value="" />

                <div class="rounded-md shadow-sm sm:col-span-2">
                    <label for="orgurl" class="block text-sm font-semibold leading-6 text-gray-900"
                        >URL</label
                    >
                    <div class="mt-2.5 flex">
                        <input
                            type="text"
                            bind:value={url}
                            name="orgurl"
                            id="orgurl"
                            autocomplete="url"
                            class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oldpink sm:text-sm sm:leading-6"
                        />
                        <span
                            class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm"
                            >.kaddio.com</span
                        >
                    </div>
                </div>

                <div>
                    <label
                        for="firstname"
                        class="block text-sm font-semibold leading-6 text-gray-900"
                        >{$_('Förnamn')}</label
                    >
                    <div class="mt-2.5">
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            autocomplete="given-name"
                            class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oldpink sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label
                        for="lastname"
                        class="block text-sm font-semibold leading-6 text-gray-900"
                        >{$_('Efternamn')}</label
                    >
                    <div class="mt-2.5">
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            autocomplete="family-name"
                            class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oldpink sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>                

                <div class="sm:col-span-2">
                    <label for="email" class="block text-sm font-semibold leading-6 text-gray-900"
                        >{$_('E-post')}</label
                    >
                    <div class="mt-2.5">
                        <input
                            value={$page.form?.email ?? ''}
                            type="email"
                            name="email"
                            id="email"
                            autocomplete="email"
                            class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oldpink sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div class="sm:col-span-2">
                    <label
                        for="telephone"
                        class="block text-sm font-semibold leading-6 text-gray-900"
                        >{$_('Telefon')}</label
                    >
                    <div class="mt-2.5">
                        <input
                            value={$page.form?.telephone ?? ''}
                            type="telephone"
                            name="telephone"
                            id="telephone"
                            autocomplete="telephone"
                            class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oldpink sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div class="sm:col-span-2">
                    <label
                        for="countrycode"
                        class="block text-sm font-semibold leading-6 text-gray-900"
                        >{$_('Land')}</label
                    >

                    <select
                        value={defaultCountryCode}
                        id="countrycode"
                        name="countrycode"
                        class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-oldpink sm:text-sm sm:leading-6"
                    >
                        {#each countries as country}
                            <option value={country.name}>{$_(country.label)}</option>
                        {/each}
                    </select>
                </div>

                <Toggle bind:state>
                    <span slot="label">
                        {$_('Jag godkänner')}
                        <a target="_blank" href="/legal/tos" class="font-semibold text-oldpink"
                            >{$_('Användarvillkor')}</a
                        >
                        {$_('och')}
                        <a target="_blank" href="/legal/privacy" class="font-semibold text-oldpink"
                            >{$_('Sekretesspolicy')}</a
                        >.

                    </span>
                </Toggle>
            </div>

            <div class="mt-10">
                <button
                    disabled={!submitIsEnabled}
                    type="submit"
                    class="disabled:opacity-75 block w-full rounded-md bg-oldpink px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-oldpinkdarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oldpink"
                    >{$_('Skapa företagskonto')}</button
                >
            </div>

            {#if $page.status !== 200}

                <div class="rounded-md bg-yellow-900 p-4 mt-10">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
                            </svg>
                        </div>

                        <div class="ml-3">
                            <h3 class="text-sm font-medium text-yellow-300">Kunde inte skapa konto</h3>

                            {#if $page.form?.urlUnavailable}
                                <div class="mt-2 text-sm text-yellow-300">
                                    <p>
                                        URL:en är upptagen, prova med en annan. 
                                    </p>
                                </div>                                           
                            {:else if $page.form?.urlTaken}
                                <div class="mt-2 text-sm text-yellow-300">
                                    <p>
                                        URL:en är upptagen och används av en befintlig organisation i Kaddio. 
                                    </p>
                                </div>

                                <div class="mt-4">
                                    <div class="-mx-2 -my-1.5 flex">
                                        <a href="{urlToOrg ? 'https://'+urlToOrg : ''}" type="button" class="rounded-md bg-yellow-900 px-2 py-1.5 text-sm font-medium text-yellow-300 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-50">Besök {urlToOrg} &nbsp;<i class="fa fa-external-link"></i></a>
                                        <button on:click={() => document.getElementById('orgurl')?.focus()} type="button" class="ml-3 rounded-md bg-yellow-900 px-2 py-1.5 text-sm font-medium text-yellow-300 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-50">Prova med annan URL</button>
                                    </div>
                                </div>                                                        
                            {:else if $page.form?.missingFields}
                                <div class="mt-2 text-sm text-yellow-300">
                                    <p>
                                        Fyll i alla fält och försök igen.
                                    </p>
                                </div>
   
                            {:else}
                                <div class="mt-2 text-sm text-yellow-300">
                                    <p>
                                        Kontrollera formuläret och försök igen. 
                                    </p>
                                </div>
                            {/if}

                        </div>
                    </div>
                </div>

            {/if}
        </form>
    {/if}
</div>
