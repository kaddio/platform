<script lang="ts">
    import Person from "./person.svelte";

    export let hosts: any[];
    const version = 2;
    export let aboutUs = "Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.";


</script>

{#if version == 1}
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Träffa vår personal</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">{aboutUs}</p>
      </div>
      <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">

          {#each hosts as host}
              <Person {host} />
          {/each}

      </ul>
    </div>
  </div>
{:else}
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Träffa vår personal</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">{aboutUs}</p>
      </div>
      <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {#each hosts as host}
              <Person {host} />
          {/each}
      </ul>
    </div>
  </div>  
{/if}

