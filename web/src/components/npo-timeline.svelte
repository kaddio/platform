<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
      <div>
        <time datetime="2021-08" class="flex items-center text-sm font-semibold leading-6 text-oldpink">
          <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </svg>
          <slot name="date-one" />
          <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
        </time>
        <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900"><slot name="title-one"/></p>
        <p class="mt-1 text-base leading-7 text-gray-600"><slot name="sub-one" /></p>
      </div>
      <div>
        <time datetime="2021-12" class="flex items-center text-sm font-semibold leading-6 text-oldpink">
          <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </svg>
          <slot name="date-two" />
          <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
        </time>
        <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900"><slot name="title-two"/></p>
        <p class="mt-1 text-base leading-7 text-gray-600"><slot name="sub-two" /></p>
      </div>
      <div>
        <time datetime="2022-02" class="flex items-center text-sm font-semibold leading-6 text-oldpink">
          <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </svg>
          <slot name="date-three" />
          <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
        </time>
        <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900"><slot name="title-three"/></p>
        <p class="mt-1 text-base leading-7 text-gray-600"><slot name="sub-three" /></p>
      </div>
      <div>
        <time datetime="2022-12" class="flex items-center text-sm font-semibold leading-6 text-oldpink">
          <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </svg>
          <slot name="date-four" />
          <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
        </time>
        <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900"><slot name="title-four"/></p>
        <p class="mt-1 text-base leading-7 text-gray-600"><slot name="sub-four" /></p>
      </div>
      <!-- <div>
        <time datetime="2022-12" class="flex items-center text-sm font-semibold leading-6 text-oldpink">
          <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </svg>
          <slot name="date-five" />
          <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
        </time>
        <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900"><slot name="title-five"/></p>
        <p class="mt-1 text-base leading-7 text-gray-600"><slot name="sub-five" /></p>
      </div> -->
    </div>
  </div>
</div>