
<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
    <div class="max-w-2xl">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><slot name="title" /></h2>
      <p class="mt-6 text-lg leading-8 text-gray-600"><slot name="subtitle" /></p>
    </div>
    <ul class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">

      <slot />

  </ul>
  </div>
</div>