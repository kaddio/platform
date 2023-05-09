<script>
	import Customer from "../components/customer.svelte";
</script>



<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
      <div class="mx-auto w-full max-w-xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">Välj ett system som skalar med din verksamhet</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">Kaddio används av fler än 1500 företag, från den lilla mottagningen till multinationella aktörer. Vi bryr oss om dina behov, oavsett verksamhetens storlek. </p>
        <div class="mt-8 flex items-center gap-x-6">
          <a href="/hp/sv/create" class="rounded-md bg-oldpink px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-oldpinkdarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">OK jag är helt såld, nu kör vi!</a>
          <a href="/hp/sv/support" class="text-sm font-semibold text-gray-900">Jag har något jag vill fråga <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div class="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
        <Customer src="/customer-logos/malmo.png" alt="Malmö Universitet"></Customer>
        <Customer src="/customer-logos/rfsl.png" alt="RFSL"></Customer>
        <Customer src="/customer-logos/Twitch.png" alt="Twitch"></Customer>
        <Customer src="/customer-logos/storasyster_ny.png" alt="Storasyster"></Customer>
        <Customer src="/customer-logos/sveakbt.png" alt="Svea KBT"></Customer>
        <Customer src="/customer-logos/dinpsykolog.png" alt="Din Psykolog"></Customer>
        <Customer src="/customer-logos/IKSU Orange 2019 (kopia).png" alt="IKSU"></Customer>
      </div>
    </div>
  </div>
</div>


  