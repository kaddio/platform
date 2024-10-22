<script lang="ts">
    import { imageHandler } from "$lib/img";
    export let src;
    export let alt;
</script>

<div class="overflow-hidden bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="lg:ml-auto lg:pl-4 lg:pt-4">
        <div class="lg:max-w-lg">
          <h2 class="text-base font-semibold leading-7 text-oldpink"><slot name="pre" /></h2>
          <h3 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><slot name="title" /></h3>
          <p class="mt-6 text-lg leading-8 text-gray-600"><slot name="body" /></p>

        </div>
      </div>
      <div class="flex items-start justify-end lg:order-first">
        <img src={imageHandler(src, {format: "auto"})} loading="lazy" alt={alt} class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]">
      </div>
    </div>
  </div>
</div>
