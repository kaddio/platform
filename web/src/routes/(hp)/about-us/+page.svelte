<script>
    import Stat from '$components/stat.svelte';
    import Person from '$components/person.svelte';
    import StatPiece from '$components/statPiece.svelte';
	import Nav from '$components/nav.svelte';
	import Footer from '$components/footer.svelte';
	import { getContext, setContext } from 'svelte';
    import Seo from '$components/seo.svelte';

    setContext('lang', 'en');
    setContext('hideLangBanner', true);


    const quotes = [
        ['I sometimes have cream in my coffee', 'David', 'C3(P)O at Kaddio'],
        ['I sometimes have potato in my coffee', 'Arvid', 'Obi Wan CTObi at Kaddio'],
        ['I sometimes have nothing in my coffee', 'Lena', 'Darth CISO at Kaddio'],
    ];

    const show = quotes[Math.floor(Math.random() * quotes.length)];

    const what = {
        quote: show[0],
        name: show[1],
        title: show[2]
    };
</script>

<Seo
    lang={getContext('lang')} 
    type="website"
    title="About Kaddio"
    description="Kaddio provides health professionals with an effective way to manage their business securely in the cloud."
    images={["https://kaddio.com/img/kaddio-fade.png", "https://kaddio.com/img/logotypes/Kaddio_Logga_Normal.svg"]} 
/>

<Nav />

<div class="bg-white py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">We're a tight group of people, passionate and dedicated to delivering the best possible experience to our customers.</p>
      </div>
      <ul class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">

        <Person>
            <span slot="name">Arvid</span>
            <span slot="title">CTO, Co-founder, & Dev</span>
        </Person>

        <Person>
            <span slot="name">Karolina</span>
            <span slot="title">CFO, Strategy, Customer Support</span>
        </Person>

        <Person>
            <span slot="name">Ivanna</span>
            <span slot="title">Customer support</span>
        </Person>

        <Person>
            <span slot="name">Camilla</span>
            <span slot="title">Market, UX, Customer support</span>
        </Person>

        <Person>
          <span slot="name">Malin</span>
          <span slot="title">Sales</span>
        </Person>

        <Person>
            <span slot="name">David</span>
            <span slot="title">CEO, Co-founder & Dev</span>
        </Person>

        <Person>
            <span slot="name">Claes</span>
            <span slot="title">General Counsel</span>
        </Person>
    </ul>
    </div>
  </div>





<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
      <div>
        <time datetime="2021-08" class="flex items-center text-sm font-semibold leading-6 text-oldpink">
          <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </svg>
          Mar 2016
          <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
        </time>
        <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Company founded</p>
        <p class="mt-1 text-base leading-7 text-gray-600">Kaddio AB, at the time named ePsy is founded by Arvid and David.</p>
      </div>
      <div>
        <time datetime="2021-12" class="flex items-center text-sm font-semibold leading-6 text-oldpink">
          <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </svg>
          Dec 2016
          <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
        </time>
        <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">3rd employee</p>
        <p class="mt-1 text-base leading-7 text-gray-600">Ylva joins our team.</p>
      </div>
      <div>
        <time datetime="2022-02" class="flex items-center text-sm font-semibold leading-6 text-oldpink">
          <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </svg>
          Nov 2017
          <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
        </time>
        <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">1st paying customer</p>
        <p class="mt-1 text-base leading-7 text-gray-600">Until now, Kaddio was freeware. We wanted to start charging our users 6 months earlier but it took longer than we expected to "automate" the billing process :)</p>
      </div>
      <div>
        <time datetime="2022-12" class="flex items-center text-sm font-semibold leading-6 text-oldpink">
          <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </svg>
          Dec 2020
          <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
        </time>
        <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Black numbers!</p>
        <p class="mt-1 text-base leading-7 text-gray-600">Kaddio has been independent from external investors since the beginning, now we are also economically independent from our parent company.</p>
      </div>
    </div>
  </div>
</div>



<!-- 
<Stat>
  <span slot="title">Trusted by thousands of users worldwide</span>
  <span slot="body">Since 2016, users have trusted Kaddio to be The Heart of their digital operations, storing their most valuable assets.</span>

  <StatPiece>
      <span slot="title">Organizations</span>
      <span slot="body">1100+</span>
  </StatPiece>

  <StatPiece>
      <span slot="title">Countries</span>
      <span slot="body">14</span>
  </StatPiece>

  <StatPiece>
      <span slot="title">Historical uptime</span>
      <span slot="body">99.995%</span>
  </StatPiece>

  <StatPiece>
      <span slot="title">Geographical backup locations</span>
      <span slot="body">3</span>
  </StatPiece>
</Stat> -->



  <Footer />