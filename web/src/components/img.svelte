<script lang="ts">
  export let src: string;
  export let name: string;
</script>

<li class="relative">
    <div class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-oldpink focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
      <img src={src} alt="" class="pointer-events-none object-cover group-hover:opacity-75">
      <a href={src} class="absolute inset-0 focus:outline-none">
        <span class="sr-only">View details for image</span>
	  </a>
    </div>
    <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{name}</p>
  </li>