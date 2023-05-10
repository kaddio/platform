<script lang="ts">
  export let icon: string = "puzzle";
  export let href: string;
</script>

<div class="relative pl-16">
  <dt class="text-base font-semibold leading-7 text-gray-900">
    <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-oldpink">

      <slot name="icon" />

    </div>
    <slot name="title" />
  </dt>
  <dd class="mt-2 text-base leading-7 text-gray-600"><slot name="body" /></dd>

  <p class="mt-1">
    <a href={href} class="text-sm font-semibold leading-6 text-oldpink">Läs mer <span aria-hidden="true">→</span></a>
  </p>  
</div>
