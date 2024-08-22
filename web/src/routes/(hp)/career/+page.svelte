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
        <p class="mt-6 text-xl leading-8 text-gray-600">If you like being involved, influence and at the same time having a lot of freedom, you will enjoy working with us! We are a small team that works in close collaboration. We only work 6 hour days at our cosy office in central Göteborg, or remotely. We speak Swedish and English.</p>
        <img src="/img/david-arvid-kaffe.jpg" alt="" class="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]">
      </div>
      <div class="w-full lg:max-w-xl lg:flex-auto">
        <h3 class="sr-only">Job openings</h3>
        <ul class="-my-8 divide-y divide-gray-100">

          <li class="py-8">
            <dl class="relative flex flex-wrap gap-x-3">
              <dt class="sr-only">Role</dt>
              <dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                <a href="mailto:david@kaddio.com?subject=frontend%20dev&body=Hi! I found this job on your website and I'm interested...">
                  Senior developer
                  <span class="absolute inset-0" aria-hidden="true"></span>
                </a>
              </dd>
              <dt class="sr-only">Description</dt>
              <dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">You will manage and develop our product "Kaddio" that helps 1000+ helath care proffessionals in their daily work. Our stack includes Javascript/typescript, Angular.js, Svelte, Tailwind, Meteor, MongoDB.</dd>
              <dt class="sr-only">Salary</dt>
              <dd class="mt-4 text-base font-semibold leading-7 text-gray-900">50 000 + SEK</dd>
              <dt class="sr-only">Location</dt>
              <dd class="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                Göteborg, Sweden
              </dd>
            </dl>
          </li>
          <li class="py-8">
            <dl class="relative flex flex-wrap gap-x-3">
              <dt class="sr-only">Role</dt>
              <dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                <a href="mailto:david@kaddio.com?subject=frontend%20dev&body=Hi! I found this job on your website and I'm interested...">
                  Senior Frontend developer
                  <span class="absolute inset-0" aria-hidden="true"></span>
                </a>
              </dd>
              <dt class="sr-only">Description</dt>
              <dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">You have an eye for UI. You will help us move from old Angular and Bootstrap to new Svelte and Tailwind, among many things.</dd>
              <dt class="sr-only">Salary</dt>
              <dd class="mt-4 text-base font-semibold leading-7 text-gray-900">30 000 + SEK</dd>
              <dt class="sr-only">Location</dt>
              <dd class="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                Göteborg, Sweden
              </dd>
            </dl>
          </li>
          <li class="py-8">
            <dl class="relative flex flex-wrap gap-x-3">
              <dt class="sr-only">Role</dt>
              <dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                <a href="mailto:david@kaddio.com?subject=frontend%20dev&body=Hi! I found this job on your website and I'm interested...">
                  Sales
                  <span class="absolute inset-0" aria-hidden="true"></span>
                </a>
              </dd>
              <dt class="sr-only">Description</dt>
              <dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">Responsible for sales, finding new markets...</dd>
              <dt class="sr-only">Salary</dt>
              <dd class="mt-4 text-base font-semibold leading-7 text-gray-900">40 000 + SEK</dd>
              <dt class="sr-only">Location</dt>
              <dd class="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                Göteborg, Sweden
              </dd>
            </dl>
          </li>
        </ul>

        <!-- <div class="mt-8 flex border-t border-gray-100 pt-8">
          <a href="#" class="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">View all openings <span aria-hidden="true">&rarr;</span></a>
        </div> -->

      </div>
    </div>
  </div>
</div>

<Footer />