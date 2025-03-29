<script>
	import Customer from "$components/customer.svelte";
    import { imageHandler } from "$lib/img";

</script>



<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
      <div class="mx-auto w-full max-w-xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">Elige un sistema que se adapte al crecimiento de tu negocio</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">Kaddio es utilizado por más de 1300 empresas, desde pequeñas clínicas hasta actores multinacionales. Nos preocupamos por tus necesidades, sin importar el tamaño de tu negocio. </p>
        <div class="mt-8 flex items-center gap-x-6">
          <!-- <a href="/sv/create" class="rounded-md bg-oldpink px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-oldpinkdarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">OK jag är helt såld, nu kör vi!</a> -->
          <a href="/es/support" class="text-sm font-semibold text-gray-900">Tengo algo que quiero preguntar <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div class="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
        <Customer src={imageHandler("/customer-logos/rfsl.png", {format: "auto"})} alt="RFSL"></Customer>
        <Customer src={imageHandler("/customer-logos/Twitch.png", {format: "auto"})} alt="Twitch"></Customer>
        <Customer src={imageHandler("/customer-logos/storasyster_ny.png", {format: "auto"})} alt="Storasyster"></Customer>
        <Customer src={imageHandler("/customer-logos/sveakbt.png", {format: "auto"})} alt="Svea KBT"></Customer>
        <Customer src={imageHandler("/customer-logos/dinpsykolog.png", {format: "auto"})} alt="Din Psykolog"></Customer>
        <Customer src={imageHandler("/customer-logos/IKSU Orange 2019 (kopia).png", {format: "auto"})} alt="IKSU"></Customer>
      </div>
    </div>
  </div>
</div>


  