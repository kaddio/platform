<script lang="ts">
    // export let iconClass: string = 'todo';
    export let href: string;
</script>

<div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
    <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
      <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    </div>
    <div class="flex-auto">
      <a href={href} class="block font-semibold text-gray-900">
        <slot name="title"></slot>
        <span class="absolute inset-0"></span>
      </a>
      <p class="mt-1 text-gray-600"><slot name="body" /></p>
    </div>
  </div>
