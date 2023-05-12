<script>
    import Stat from '../../../components/stat.svelte';
    import Person from '../../../components/person.svelte';
    import StatPiece from '../../../components/statPiece.svelte';
	import Nav from '../../../components/nav.svelte';

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

<Nav />
  


<div class="bg-white py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
        <!-- <p class="mt-6 text-lg leading-8 text-gray-600">We are a happy team, loving what we do -  most of time anyways..</p> -->
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
            <span slot="title">Security and Incident Manager</span>
        </Person>

        <Person>
            <span slot="name">Jesper</span>
            <span slot="title">Dev</span>
        </Person>

        <Person>
            <span slot="name">Camilla</span>
            <span slot="title">Support</span>
        </Person>

        <Person src="/img/david.png">
            <span slot="name">David</span>
            <span slot="title">Co-Founder / CEO</span>
        </Person>

        <Person>
            <span slot="name">Marina</span>
            <span slot="title">Support</span>
        </Person>

        <Person>
            <span slot="name">Agustin</span>
            <span slot="title">Technical Support</span>
        </Person>

        <Person>
            <span slot="name">Carl</span>
            <span slot="title">Kaddio Lectures</span>
        </Person>

        <Person>
            <span slot="name">Claes</span>
            <span slot="title">General counsel</span>
        </Person>
    </ul>
    </div>
  </div>

  