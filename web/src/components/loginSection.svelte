<script lang="ts">
	import { getContext } from "svelte";
	import { _ } from "$lib/stores";
    import { imageHandler } from "$lib/img";
    const lang = getContext('lang');

    let cannotFind: boolean = false;
    let url: string;
    let region: string;

    $: loginSupportedInRegion = [".kaddio.com"].includes(region);

    $: submitIsEnabled = !cannotFind && (url && url.length !== 0) && loginSupportedInRegion;
    const submit = async function(e: SubmitEvent) {
        const formData = new FormData(e.target);

        try {
            // 'https://api.kaddio.com/api/org';
            const response = await fetch('https://api.kaddio.com/api/find-organization', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Object.fromEntries(formData.entries()))
            });

             const data = await response.json();
             if(data.status == 'success'){
                window.location.href = data.data.url + '/login';
             }
             else{
                cannotFind = true;
             }
        } catch(e) {
            console.error('err')
        }
    }        
</script>

<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src={imageHandler("/img/kaddio-black.png", {format: "auto"})} alt="Your Company">
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">{ $_('Logga in')}</h2>

        <p class="mt-2 text-center text-sm text-gray-600">
          { $_('Eller')}
          <a href="/{lang}/create" class="font-medium text-oldpink hover:text-oldpinkdarker">{ $_('skapa konto')}</a>
        </p>
      </div>
      <form on:submit|preventDefault={submit} class="mt-8 space-y-6" action="#" method="POST">

        <div class="relative mt-2 rounded-md shadow-sm">
            <input type="text" name="url" bind:value={url} on:input={() => cannotFind = false} class="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oldpink sm:text-sm sm:leading-6" placeholder="subdomain">
            <div class="absolute inset-y-0 right-0 flex items-center">
                <label for="region" class="sr-only">Currency</label>
                <select id="region" name="region" bind:value={region} class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                    <option>.kaddio.com</option>
                    <option>.kaddio.se</option>
                    <option>.kaddio.de</option>
                </select>
            </div>
        </div>

        <!-- <p class="mt-3 text-sm leading-6 text-gray-600">Vald region: EU</p> -->

        <div>
            <button type="submit" disabled={!submitIsEnabled} class="disabled:opacity-75 group relative flex w-full justify-center rounded-md bg-oldpink py-2 px-3 text-sm font-semibold text-white hover:bg-oldpinkdarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oldpink">
                { $_('Gå dit')}
            </button>
        </div>
      </form>

    {#if !loginSupportedInRegion }
        <div class="rounded-md bg-yellow-50 p-4">
            <div class="flex">
                <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
                </div>
                <div class="ml-3">
                <h3 class="text-sm font-medium text-indigo-400">{ $_('Inloggning till vald region stöds ej ännu.')}</h3>
                </div>
            </div>
        </div>
    {/if}      


    {#if cannotFind }
        <div class="rounded-md bg-yellow-50 p-4">
            <div class="flex">
                <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
                </div>
                <div class="ml-3">
                <h3 class="text-sm font-medium text-indigo-400">{ $_('Organisationen kunde inte hittas')}</h3>
                <div class="mt-2 text-sm text-yellow-700">
                    <p>{ $_('Kontrollera vilken URL du skrivit in. Du kan hitta din URL i det första mail du fick ifrån Kaddio när du skapat konto')}</p>
                </div>
                </div>
            </div>
        </div>
    {/if}      

    </div>
  </div>
  