<script lang="ts">
</script>



    <div class="pt-16 lg:px-8 lg:pt-0 xl:px-14">
      <h3 id="tier-essential" class="text-base font-semibold leading-7 text-gray-900"><slot name="title" /></h3>
      <!-- <p class="mt-6 flex items-baseline gap-x-1">
        <span class="text-5xl font-bold tracking-tight text-gray-900">$30</span>
        <span class="text-sm font-semibold leading-6 text-gray-600">/month</span>
      </p> -->
      <!-- <a href="#" aria-describedby="tier-essential" class="mt-10 block rounded-md bg-oldpink px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oldpink">Buy plan</a> -->
      <p class="mt-6 text-base leading-7 text-gray-600"><slot name="body" /></p>
      
      <ul role="list" class="mt-6 space-y-3 text-sm leading-6 text-gray-600">
        <slot />  
      </ul>
    </div>