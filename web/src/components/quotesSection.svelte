<script>

</script>

<div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <!-- <h2 class="text-lg font-semibold leading-8 tracking-tight text-purple-600">Vad våra kunder säger</h2> -->
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><slot name="title" /></p>
      </div>
      <div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
        <div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">

            <slot />
            
        </div>
      </div>
    </div>
  </div>
  