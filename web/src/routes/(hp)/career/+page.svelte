<script>
  import { setContext } from 'svelte';
  import Nav from '$components/nav.svelte';
  import Footer from '$components/footer.svelte';
  import LdTag from '$lib/components/LDTag.svelte';
  import { jobPostingSchema } from '$lib/json-ld';
    import JobOpening from '$components/job-opening.svelte';
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
        <p class="mt-6 text-xl leading-8 text-gray-600">At Kaddio, we have a lot of freedom with 6 hour work days and flexible working hours. We have a super cosy office in central Göteborg, Sweden. We speak English and Swedish.</p>
        <img src="/img/david-arvid-kaffe.jpg" alt="" class="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]">
      </div>
      <div class="w-full lg:max-w-xl lg:flex-auto">
        <h3 class="sr-only">Job openings</h3>
        <ul class="-my-8 divide-y divide-gray-100">
          <JobOpening>
            <span slot="desc">You have an eye for UI. You will help us move from old Angular and Bootstrap to new Svelte and Tailwind, among many things.</span>
            <span slot="salary">50 000 SEK</span>
            <span slot="place">Göteborg, Sweden</span>
          </JobOpening>
        </ul>

        <!-- <div class="mt-8 flex border-t border-gray-100 pt-8">
          <a href="#" class="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">View all openings <span aria-hidden="true">&rarr;</span></a>
        </div> -->

      </div>
    </div>
  </div>
</div>

<Footer />