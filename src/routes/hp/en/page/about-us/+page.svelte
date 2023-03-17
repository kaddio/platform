<script>
	import Person from '../../../../hp/components/person.svelte';
    import Header from '../../../sv/headerSv.svelte';
</script>

<Header />

<div class="bg-white py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Vi som är Kaddio</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
      </div>
      <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">

        <Person>
            <span slot="name">Arvid</span>
            <span slot="title">Co-Founder / CTO</span>
        </Person>

        <Person>
            <span slot="name">Karolina</span>
            <span slot="title">CFO</span>
        </Person>

        <Person>
            <span slot="name">Daniel</span>
            <span slot="title">HR / Market</span>
        </Person>

        <Person>
            <span slot="name">Lena</span>
            <span slot="title">ISO</span>
        </Person>

        <Person>
            <span slot="name">Jesper</span>
            <span slot="title">Dev</span>
        </Person>

        <Person>
            <span slot="name">Marina</span>
            <span slot="title">Support</span>
        </Person>

        <Person>
            <span slot="name">Agustin</span>
            <span slot="title">Technical Support</span>
        </Person>
      </ul>
    </div>
  </div>
   