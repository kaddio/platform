<script lang="ts">
    export let icon: string;
</script>

<div class="flex gap-x-6">
    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-oldpink">
        <i class="fa fa-{icon} text-white"></i>
    </div>
    <div>
      <h3 class="text-base font-semibold leading-7 text-gray-900"><slot name="title" /></h3>
      <p class="mt-2 leading-7 text-gray-600"><slot name="body" /></p>
      <p class="mt-4">
        <slot name="link" />    
      </p>
    </div>
  </div>