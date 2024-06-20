<script lang="ts">
    import { imageHandler } from "$lib/img";

  export let host;

  let src = host.imgUrl || '/img/kaddio-vit.png';
  let name = `${host.firstname} ${host.lastname}`;
  let title = host.title || "";
  let presentation = host.presentation || "";

  const version = 2;
</script>

{#if version == 1}
  <li class="flex flex-col gap-6 xl:flex-row">
    <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={imageHandler(src, {format: "auto"})} alt="" loading="lazy">  

    <div class="flex-auto">
      <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">{name}</h3>
      <p class="text-base leading-7 text-gray-600">{title}</p>
      <p class="mt-6 text-base leading-7 text-gray-600">{presentation}</p>
    </div>
  </li>
{:else}

  <li>
    <div class="flex items-center gap-x-6">
      <img class="h-16 w-16 rounded-full" src={imageHandler(src, {format: "auto"})} loading="lazy" alt="">
      <div>
        <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">{name}</h3>
        <p class="text-sm font-semibold leading-6 text-oldpink">{title}</p>
      </div>
    </div>
  </li>

{/if}

  