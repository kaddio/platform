<script lang="ts">
	export let src: string;
	export let alt: string = '';
</script>

<div class="overflow-hidden bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
	  <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
		<div class="lg:pr-8 lg:pt-4">
		  <div class="lg:max-w-lg">
			<h1 class="text-base font-semibold leading-7 text-oldpink"><slot name="h1" /></h1>
			<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><slot name="title" /></p>
			<p class="mt-6 text-lg leading-8 text-gray-600"><slot name="sub" /></p>
			<dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
				<slot />
			</dl>
		  </div>
		</div>
		<img src={src} alt={alt} class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442">
	  </div>
	</div>
  </div>
  