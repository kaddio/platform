<script>
	import Person from '../../../../hp/components/person.svelte';
    import Header from '../../../sv/headerSv.svelte';
</script>

<Header />


<div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-y-16 gap-x-8 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-4">
          <div class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
            <img class="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0" src="https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80" alt="">
            <div class="absolute inset-0 bg-gray-900 mix-blend-multiply"></div>
            <svg viewBox="0 0 1097 845" aria-hidden="true" class="absolute top-1/2 left-1/2 -ml-16 w-[68.5625rem] -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl">
              <path fill="url(#e7ccf164-908d-46dd-9194-2f8a16ad5a93)" fill-opacity=".4" d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z" />
              <defs>
                <linearGradient id="e7ccf164-908d-46dd-9194-2f8a16ad5a93" x1="1097.04" x2="-141.165" y1=".22" y2="363.075" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#776FFF" />
                  <stop offset="1" stop-color="#FF4694" />
                </linearGradient>
              </defs>
            </svg>
            <figure class="relative isolate">
              <svg viewBox="0 0 162 128" fill="none" aria-hidden="true" class="absolute -top-4 -left-2 -z-10 h-32 stroke-white/20">
                <path id="0ef284b8-28c2-426e-9442-8655d393522e" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z" />
                <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x="86" />
              </svg>
              <img src="/img/kaddio-logo.png" alt="" class="h-12 w-auto">
              <blockquote class="mt-6 text-xl font-semibold leading-8 text-white">
                <p>“I sometimes have cream in my coffee”</p>
              </blockquote>
              <figcaption class="mt-6 text-sm leading-6 text-gray-300"><strong class="font-semibold text-white">David,</strong> C3(P)O at Kaddio</figcaption>
            </figure>
          </div>
        </div>
        <div>
          <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
            <p class="text-base font-semibold leading-7 text-indigo-600">Company values</p>
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We like to do things our way</h1>
            <div class="max-w-xl">
              <p class="mt-6">We have backgrounds from Architechture, Ostheopathy, Physics, City planning, Chemistry and Music, we unite in that we all love Kaddio. We believe our backgrounds provides us with broad perspectives in day-to-day decisions, and perspetive is what it's all about. </p>
              <p class="mt-8">Vi använder själva Kaddio.</p>
            </div>
          </div>
          <dl class="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
            <div>
              <dt class="text-sm font-semibold leading-6 text-gray-600">Founded</dt>
              <dd class="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">2016</dd>
            </div>
  
            <div>
              <dt class="text-sm font-semibold leading-6 text-gray-600">Employees</dt>
              <dd class="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">9</dd>
            </div>
  
            <div>
              <dt class="text-sm font-semibold leading-6 text-gray-600">Office</dt>
              <dd class="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">1</dd>
            </div>
  
            <div>
              <dt class="text-sm font-semibold leading-6 text-gray-600">Meetings/week</dt>
              <dd class="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">1</dd>
            </div>
          </dl>
          <!-- <div class="mt-10 flex">
            <a href="#" class="text-base font-semibold leading-7 text-indigo-600">Learn more about our company <span aria-hidden="true">&rarr;</span></a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
  


  <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80&blend=111827&blend-mode=multiply&sat=-100&exp=15" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover">
    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <svg viewBox="0 0 1266 975" aria-hidden="true" class="absolute -bottom-8 -left-96 -z-10 w-[79.125rem] transform-gpu blur-3xl sm:-left-40 sm:-bottom-64 lg:left-8 lg:-bottom-32 xl:-left-10">
        <path fill="url(#05f95398-6ec0-404d-8f7d-a69a4504684d)" fill-opacity=".2" d="M347.52 746.149 223.324 974.786 0 630.219l347.52 115.93 223.675-411.77c1.431 190.266 49.389 498.404 229.766 208.829C1026.43 181.239 966.307-135.484 1129.51 59.422c130.55 155.925 143.15 424.618 133.13 539.473L936.67 429.884l23.195 520.539L347.52 746.149Z" />
        <defs>
          <linearGradient id="05f95398-6ec0-404d-8f7d-a69a4504684d" x1="1265.86" x2="-162.888" y1=".254" y2="418.947" gradientUnits="userSpaceOnUse">
            <stop stop-color="#776FFF" />
            <stop offset="1" stop-color="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
        <h2 class="text-base font-semibold leading-8 text-indigo-400">Our track record</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by thousands of users worldwide</p>
        <p class="mt-6 text-lg leading-8 text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
      </div>
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        <div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
          <dt class="text-sm leading-6">Users on the platform</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight">8,000+</dd>
        </div>
  
        <div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
          <dt class="text-sm leading-6">Flat platform fee</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight">3%</dd>
        </div>
  
        <div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
          <dt class="text-sm leading-6">Historical uptime</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight">99.995%</dd>
        </div>
  
        <div class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
          <dt class="text-sm leading-6">Backup locations</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight">2</dd>
        </div>
      </dl>
    </div>
  </div>
  


<div class="bg-white py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
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

        <Person>
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
      </ul>
    </div>
  </div>

  




  <div class="bg-gray-900 py-24 sm:py-32">
    <div class="relative isolate">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 py-16 px-6 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
          <img class="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm" src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="">
          <div class="w-full flex-auto">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join our team</h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">We always have a chair available</p>
            <ul role="list" class="mt-10 grid grid-cols-1 gap-y-3 gap-x-8 text-base leading-7 text-white sm:grid-cols-2">
              <li class="flex gap-x-3">
                <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                7 hour work days
              </li>
  
              <li class="flex gap-x-3">
                <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                Flexible work hours
              </li>
  
              <li class="flex gap-x-3">
                <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                30+ days of paid vacation
              </li>
  
              <li class="flex gap-x-3">
                <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                Annual trips to Spain
              </li>
  
              <li class="flex gap-x-3">
                <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                Benefits for ya
              </li>
  
              <li class="flex gap-x-3">
                <svg class="h-7 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                Wonderful office with music room
              </li>
            </ul>
            <div class="mt-10 flex">
              <a href="/hp/en/career" class="text-sm font-semibold leading-6 text-indigo-400">See our job postings <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
        <svg viewBox="0 0 1318 752" class="w-[82.375rem] flex-none" aria-hidden="true">
          <path fill="url(#ee394704-5802-4a27-9451-3d29bf7415a3)" fill-opacity=".25" d="m279.655 479.549-211.511-96.46L.638 751.469l279.017-271.92 380.928 173.723c-77.415-137.198-159.845-384.186 129.758-274.555C1152.34 515.756 1226.88 775.51 1299.76 547.101c58.31-182.726-41.07-382.222-98.04-459.13L964.951 386.243 771.295.416 279.655 479.55Z" />
          <defs>
            <linearGradient id="ee394704-5802-4a27-9451-3d29bf7415a3" x1="1452.56" x2="-101.59" y1="515.446" y2="760.592" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4F46E5" />
              <stop offset="1" stop-color="#80CAFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
  