<script lang="ts">
  export let src: string = '';
  export let alt: string = 'A great image of an employee';
  export let color: string = 'bg-white';
  export let emoji: string = '👩‍💻';
</script>

<li>
    <div class="flex items-center gap-x-6">

      <!-- <img class="h-16 w-16 rounded-full {color}" loading="lazy" src={src} alt={alt}> -->
       <span class="h-16 w-16 rounded-full text-6xl flex flex-col justify-center items-center {color}" >{emoji}</span>

      <div>
        <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900"><slot name="name" /></h3>
        <p class="text-sm font-semibold leading-6 text-oldpink"><slot name="title" /></p>
      </div>
    </div>
  </li>