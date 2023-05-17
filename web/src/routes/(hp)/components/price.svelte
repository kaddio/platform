<script lang="ts">
	import { getContext } from "svelte";
	import { _ } from "$lib/stores";

  const lang = getContext('lang');

    type Module = {
        price: number,
        name: string,
        selected?: boolean,
        disabled?: boolean,
    }

    export let modules : Module[];
    export let currency: string;

    $: total = Math.floor(modules.filter(m => m.selected).map(m=> m.price).reduce((a,b) => a+b, 0));
</script>


<div class="bg-white py-24 sm:py-32" id="price">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
      <div class="mx-auto w-full max-w-xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900"><slot name="title" /></h2>
        <p class="mt-6 text-lg leading-8 text-gray-600"><slot name="sub" /></p>
        <div class="mt-8 flex items-center gap-x-6">
          <a href="/{lang}/create" class="rounded-md bg-oldpink px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-oldpinkdarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">{$_('Skapa konto')}</a>
          <a href="/{lang}/support" class="text-sm font-semibold text-gray-900">{$_('Kontakta oss')} <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div class="mx-auto grid w-full max-w-xl items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
        <div class="-mx-4 mt-8 flow-root sm:mx-0">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th></th>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">{$_('Modul')}</th>
                <th scope="col" class="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">{$_('Pris')}</th>
              </tr>
            </thead>
            <tbody>
                {#each modules as module}
                    <tr class="border-b border-gray-200">
                      <td class="py-4 pl-4 pr-3 text-sm sm:pl-0">
                        <input type="checkbox" bind:checked={module.selected} class="h-4 w-4 rounded border-gray-300 text-oldpink focus:ring-oldpink" id={module.name} disabled={module.disabled}>
                      </td>
                        
                        <td class="py-4 pl-4 pr-3 text-sm sm:pl-0">
                          <div class="font-medium text-gray-900">{module.name}</div>
                          <div class="mt-0.5 text-gray-500 sm:hidden">{module.price}</div>
                      </td>
                  
                      <td class="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">{module.price}</td>
                  </tr>
                {/each}
    
            </tbody>
            <tfoot>
              <tr>
                <th scope="row" colspan="2" class="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0">{$_('Månadspris / användare')}</th>
                <th scope="row" class="pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden">{$_('Månadspris / användare')}</th>
                <td class="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">{total} {currency} {$_('(ex moms)')}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

