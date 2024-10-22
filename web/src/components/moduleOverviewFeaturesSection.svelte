<script lang="ts">
</script>






<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-4xl sm:text-center">
      <h2 class="text-base font-semibold leading-7 text-oldpink"><slot name="pre" /></h2>
      <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"><slot name="title" /></p>
    </div>
    <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center"><slot name="body" /></p>
    <div class="mt-20 flow-root">
      <div class="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
        <slot />

      </div>
    </div>
  </div>
</div>
