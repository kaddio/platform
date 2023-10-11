<script lang="ts">
	import IconMap from "./iconMap.svelte";

    export let title: string;
    export let name: string;
    export let location: string;
    export let tags;
    export let href: string;
    export let img: string = 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80';
</script>


<article class="relative isolate flex flex-col gap-8 lg:flex-row">
    <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
      <img src={img} alt="" class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover">
      <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
    </div>
    <div>
      <div class="flex items-center gap-x-4 text-xs">
        <time datetime="2020-03-16" class="text-gray-500">Case study</time>
        {#each tags as tag}
            <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                {tag}
            </span>            
        {/each}
      </div>
      <div class="group relative max-w-xl">
        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href={href}>
            <span class="absolute inset-0"></span>
            {title}
          </a>
        </h3>
        <p class="mt-5 text-sm leading-6 text-gray-600">
            <slot />
        </p>
      </div>
      <div class="mt-6 flex border-t border-gray-900/5 pt-6">
        <div class="relative flex items-center gap-x-4">
          <!-- <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full bg-gray-50"> -->
          <div class="text-sm leading-6">
            <p class="font-semibold text-gray-900">
                <span class="absolute inset-0"></span>
                {name}
            </p>
            <p class="text-gray-600">{location}</p>
          </div>
        </div>
      </div>
    </div>
  </article>