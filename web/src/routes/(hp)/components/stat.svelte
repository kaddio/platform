
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
        <!-- <h2 class="text-base font-semibold leading-8 text-purple-400"><slot name="pre" /></h2> -->
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"><slot name="title" /></p>
        <p class="mt-6 text-lg leading-8 text-gray-300"><slot name="body" /></p>
      </div>
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">

        <slot />

      </dl>
    </div>
  </div>
  