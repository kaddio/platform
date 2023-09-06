<script>
  import { setContext } from 'svelte';
  import Nav from '$components/nav.svelte';
  import Footer from '$components/footer.svelte';
  import LdTag from '$lib/components/LDTag.svelte';
  import { jobPostingSchema } from '$lib/json-ld';
  setContext('lang', 'en');
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
        <p class="mt-6 text-xl leading-8 text-gray-600">At Kaddio, we have a lot of freedom with flexible weeks. We have a super cosy office in central Göteborg, Sweden. We all speak English and Swedish, some speak Spanish.</p>
        <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80" alt="" class="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]">
      </div>
      <div class="w-full lg:max-w-xl lg:flex-auto">
        <h3 class="sr-only">Job openings</h3>
        <ul class="-my-8 divide-y divide-gray-100">
          <li class="py-8">
            <dl class="relative flex flex-wrap gap-x-3">
              <dt class="sr-only">Role</dt>
              <dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                <a href="mailto:david@kaddio.com?subject=Marketer&body=Hi! I found this job on your website and I'm interested...">
                  Marketer
                  <span class="absolute inset-0" aria-hidden="true"></span>
                </a>
              </dd>
              <dt class="sr-only">Description</dt>
              <dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">You are a proactive strategic mind and a doer. You run our marketing division and you have good technical knowledge of SEO, Social media, Adwords, Linkedin etc.</dd>
              <dt class="sr-only">Salary</dt>
              <dd class="mt-4 text-base font-semibold leading-7 text-gray-900">40 000 SEK</dd>
              <dt class="sr-only">Location</dt>
              <dd class="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                Anywhere in the Universe
              </dd>
            </dl>
          </li>
          <li class="py-8">
            <dl class="relative flex flex-wrap gap-x-3">
              <dt class="sr-only">Role</dt>
              <dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                <a href="mailto:david@kaddio.com?subject=backend%20dev&body=Hi! I found this job on your website and I'm interested...">
                  Senior backend developer
                  <span class="absolute inset-0" aria-hidden="true"></span>
                </a>
              </dd>
              <dt class="sr-only">Description</dt>
              <dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">Tech stack is Javascript (Typescript) Meteor, Svelte, Angular, Node, MongoDB, GraphQL. You are the architect of external integrations. Perhaps you are also good at Docker, OAuth and idP</dd>
              <dt class="sr-only">Salary</dt>
              <dd class="mt-4 text-base font-semibold leading-7 text-gray-900">60 000 SEK</dd>
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
                  Senior frontend developer
                  <span class="absolute inset-0" aria-hidden="true"></span>
                </a>
              </dd>
              <dt class="sr-only">Description</dt>
              <dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">You are transforming Angular into Svelte, among many things.</dd>
              <dt class="sr-only">Salary</dt>
              <dd class="mt-4 text-base font-semibold leading-7 text-gray-900">50 000 SEK</dd>
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