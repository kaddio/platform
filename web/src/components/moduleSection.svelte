
<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">

		<!-- <div class="">
			<a href="../#modules" class="inline-flex space-x-6">
				<span class="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">Modul</span>

				<span class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
					<span>Visa alla moduler</span>
					<svg class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
					</svg>
				</span>
			</a>
		</div>		 -->


		<div class="mt-4 mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><slot name="title" /></h2>
			<p class="mt-6 text-lg leading-8 text-gray-600"><slot name="sub" /></p>
		</div>

		<dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
			<slot />
		</dl>
	</div>
</div>