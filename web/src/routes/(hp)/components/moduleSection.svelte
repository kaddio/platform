
<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
	  <div class="mx-auto max-w-2xl lg:mx-0">
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><slot name="title" /></h2>
		<p class="mt-6 text-lg leading-8 text-gray-600"><slot name="sub" /></p>
	  </div>
	  <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">

        <slot />

	  </dl>
	</div>
  </div>