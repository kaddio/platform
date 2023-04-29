<script type="ts">
  export let src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
</script>

<li>
    <div class="flex items-center gap-x-6">

      <img class="h-16 w-16 rounded-full" src={src} alt="">

      <div>
        <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900"><slot name="name"></slot></h3>
        <p class="text-sm font-semibold leading-6 text-purple-600"><slot name="title"></slot></p>
      </div>
    </div>
  </li>