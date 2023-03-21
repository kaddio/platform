<script lang="ts">
	import PriceModule from "./priceModule.svelte";


    type Module = {
        price: number,
        name: string,
        selected?: boolean,
        disabled?: boolean,
    }

    export let modules : Module[];
    export let currency: string;

    $: total = modules.filter(m => m.selected).map(m=> m.price).reduce((a,b) => a+b, 0);
</script>


<table class="table">
    <tbody>
        <tr><th>Modul</th><th>Pris</th><th></th></tr>
        {#each modules as module}
            <tr>
                <td><label for={module.name}>{module.name}</label></td>
                <td>{module.price}</td>
                <td><input type="checkbox" bind:checked={module.selected} on:change={()=>modules = modules} id={module.name} disabled={module.disabled}></td>
            </tr>
        {/each}
    </tbody>
    <tfoot>
        <tr>
            <th>
                Månadspris / behandlare
            </th>
            <th>
                {total} {currency}
            </th>
            <th></th>
        </tr>
    </tfoot>
</table>


<style>
    label {
        font-weight: normal;
    }
</style>










<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <div>
        <h2 class="text-base font-semibold leading-7 text-indigo-600">Pris</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Betala precis för vad du använder</p>
        <p class="mt-6 text-base leading-7 text-gray-600">Kôste re nåt? Ja det gör det - se själv och klicka i och ur moduler i våran fräcka komponent</p>
      </div>
      <dl class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
      </dl>
    </div>
  </div>
</div>










<div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Pris</h1>
        <p class="mt-2 text-sm text-gray-700">Klicka i för att se vad Kaddio kostar.</p>
      </div>
    </div>
    <div class="-mx-4 mt-8 flow-root sm:mx-0">
      <table class="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Modul</th>
            <th scope="col" class="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">Pris</th>
          </tr>
        </thead>
        <tbody>
            {#each modules as module}
                <PriceModule module={module}>
                </PriceModule>
                <!-- <tr>
                    <td><label for={module.name}>{module.name}</label></td>
                    <td>{module.price}</td>
                    <td><input type="checkbox" bind:checked={module.selected} on:change={()=>modules = modules} id={module.name} disabled={module.disabled}></td>
                </tr> -->
            {/each}

        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colspan="2" class="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0">Total</th>
            <th scope="row" class="pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden">Total</th>
            <td class="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">{total}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  