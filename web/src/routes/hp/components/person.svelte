<script lang="ts">
  export let src: string;
</script>

<li>
    <div class="flex items-center gap-x-6">

      <img class="h-16 w-16 rounded-full bg-gray-100" src={src} alt="">

      <div>
        <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900"><slot name="name"></slot></h3>
        <p class="text-sm font-semibold leading-6 text-oldpink"><slot name="title"></slot></p>
      </div>
    </div>
  </li>