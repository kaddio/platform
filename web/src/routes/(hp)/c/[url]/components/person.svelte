<script lang="ts">
  export let host;

  let src = "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80";
  let name = `${host.firstname} ${host.lastname}`;
  let title = host.title || "";
  let presentation = host.presentation || "";

</script>

<li class="flex flex-col gap-6 xl:flex-row">
  <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" {src} alt="">
  <div class="flex-auto">
    <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">{name}</h3>
    <p class="text-base leading-7 text-gray-600">{title}</p>
    <p class="mt-6 text-base leading-7 text-gray-600">{presentation}</p>
  </div>
</li>