<script lang="ts">
	import { getContext } from "svelte";
	import { _ } from "$lib/stores";
    const lang = getContext('lang');

    let cannotFind: boolean = false;
    let url: string;

    $: submitIsEnabled = !cannotFind && (url && url.length !== 0);

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
        <img class="mx-auto h-12 w-auto" src="/img/kaddio-black.png" alt="Your Company">
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">{ $_('Logga in')}</h2>

        <p class="mt-2 text-center text-sm text-gray-600">
          { $_('Eller')}
          <a href="/{lang}/create" class="font-medium text-oldpink hover:text-oldpinkdarker">{ $_('skapa konto')}</a>
        </p>
      </div>
      <form on:submit|preventDefault={submit} class="mt-8 space-y-6" action="#" method="POST">
        <div class="flex max-w-lg rounded-md shadow-sm">
            <input placeholder="url" type="text" bind:value={url} on:input={() => cannotFind = false} name="url" autocomplete="url" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oldpink sm:text-sm sm:leading-6">
            <span class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">.kaddio.com</span>
        </div>

        <div>
            <button type="submit" disabled={!submitIsEnabled} class="disabled:opacity-75 group relative flex w-full justify-center rounded-md bg-oldpink py-2 px-3 text-sm font-semibold text-white hover:bg-oldpinkdarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oldpink">
                { $_('Gå dit')}
            </button>
        </div>
      </form>

      {#if cannotFind }
        <div class="rounded-md bg-yellow-50 p-4">
            <div class="flex">
                <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
                </div>
                <div class="ml-3">
                <h3 class="text-sm font-medium text-indigo-400">Organisationen kunde inte hittas</h3>
                <div class="mt-2 text-sm text-yellow-700">
                    <p>Kontrollera vilken URL du skrivit in. Du kan hitta din URL i det första mail du fick ifrån Kaddio när du skapat konto</p>
                </div>
                </div>
            </div>
        </div>
    {/if}      

    </div>
  </div>
  