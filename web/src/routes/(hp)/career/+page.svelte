<script>
  import { setContext } from 'svelte';
  import Nav from '$components/nav.svelte';
  import Footer from '$components/footer.svelte';
  import LdTag from '$lib/components/LDTag.svelte';
  import { jobPostingSchema } from '$lib/json-ld';
  setContext('lang', 'en');
  setContext('hideLangBanner', true);
</script>

<LdTag schema={jobPostingSchema} />

<svelte:head>
<title>Work at Kaddio</title>
<meta name="description" content="See all job openings at Kaddio" />
</svelte:head>

<Nav />


<div class="bg-white py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
      <div class="w-full lg:max-w-lg lg:flex-auto">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We're always looking for awesome people</h2>
        <p class="mt-6 text-xl leading-8 text-gray-600">At Kaddio, we are a small team that works in close collaboration with each other. If you like being involved in the entire development process, being able to influence the end result and at the same time having great freedom with what and how you work, you will enjoy working with us!</p>
        <p class="mt-6 text-xl leading-8 text-gray-600">As a silverlining on our offer we only work 6 hour days at our cosy office in central Göteborg, or if you like we can work remotely some days
          .  We speak Swedish and English and as a bonus we get amazing coffee from Kafferäven.</p>
        <img src="/img/david-arvid-kaffe.jpg" alt="" class="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]">
      </div>
      <div class="w-full lg:max-w-xl lg:flex-auto">
        <h3 class="sr-only">Job openings</h3>
        <ul class="-my-8 divide-y divide-gray-100">
          <li class="py-8">
            <dl class="relative flex flex-wrap gap-x-3">
              <dt class="sr-only">Role</dt>
              <dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                <a href="mailto:camilla@kaddio.com?subject=frontend%20dev&body=Hi! I found this job on your website and I'm interested...">
                  Senior developer
                  <span class="absolute inset-0" aria-hidden="true"></span>
                </a>
              </dd>
              <dt class="sr-only">Description</dt>
              <dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">You will manage and develop our product "Kaddio" that helps 1000+ helath care proffessionals in their daily work. <br><br> Our stack includes Javascript/typescript, Angular.js, Svelte, Tailwind, Meteor, MongoDB. You should like to work both frontend and backend. 
                <br><br>...and if you have a good sense of rhythm we need a drummer for our office band!   </dd>
                <dt class="sr-only">Location</dt>
              <dd class="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                Göteborg, Sweden
              </dd>
            </dl>
          </li>
        </ul>



      </div>
    </div>
  </div>
</div>

<Footer />