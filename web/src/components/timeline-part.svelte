<div>
  <time datetime="2022-12" class="flex items-center text-sm font-semibold leading-6 text-oldpink">
    <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
      <circle cx="2" cy="2" r="2" fill="currentColor" />
    </svg>
    <slot name="date" />
    <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
  </time>
  <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900"><slot name="title"/></p>
  <p class="mt-1 text-base leading-7 text-gray-600"><slot name="sub" /></p>
</div>
