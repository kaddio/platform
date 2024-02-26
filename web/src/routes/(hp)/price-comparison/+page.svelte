<script>
    import Yes from "$components/yes.svelte";
	import Yes2 from "$components/yes2.svelte";
    import No from "$components/no.svelte";

	let price = {
		free: "$0",
		pro: "159kr",
		enterprise: "199kr"
	};

</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-4xl text-center">
      <h2 class="text-base font-semibold leading-7 text-oldpink">Pricing</h2>
      <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Plans for teams of&nbsp;all&nbsp;sizes</p>
    </div>
    <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</p>

    <!-- xs to lg -->
    <div class="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
      <section class="p-8">
        <h3 id="tier-basic" class="text-sm font-semibold leading-6 text-gray-900">Free</h3>
        <p class="mt-2 flex items-baseline gap-x-1 text-gray-900">
          <span class="text-4xl font-bold">{price.free}</span>
          <span class="text-sm font-semibold">/month</span>
        </p>
        <a href="#" aria-describedby="tier-basic" class="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oldpink text-oldpink ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300">Buy plan</a>
        <ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-gray-900">
          <li>
            <ul role="list" class="space-y-4">
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Medical record </span>
              </li>
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Online booking and calendar </span>
              </li>
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Communication </span>
              </li>
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Invoicing </span>
              </li>
            </ul>
          </li>
			<li class="flex gap-x-3">
				<Yes2 />
				<span>
					1 team member
				</span>
			</li>

          <li>
            <ul role="list" class="space-y-4">
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Analytics </span>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" class="space-y-4">
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Basic email support </span>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section class="p-8 rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200">
        <h3 id="tier-essential" class="text-sm font-semibold leading-6 text-gray-900">Pro</h3>
        <p class="mt-2 flex items-baseline gap-x-1 text-gray-900">
          <span class="text-4xl font-bold">{price.pro}</span>
          <span class="text-sm font-semibold">/month</span>
        </p>
        <a href="#" aria-describedby="tier-essential" class="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oldpink bg-oldpink text-white hover:bg-indigo-500">Buy plan</a>
        <ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-gray-900">
          <li>
            <ul role="list" class="space-y-4">
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Integrations </span>
              </li>
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Medical record + 119kr / mo </span>
              </li>
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Online booking and calendar + 119kr / mo </span>
              </li>
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Chat and video + 119kr / mo </span>
              </li>
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Invoicing + 119kr / mo </span>
              </li>
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Exporting </span>
              </li>
              <li class="flex gap-x-3">
                <Yes2 />
                <span> File storage </span>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" class="space-y-4">
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Advanced analytics </span>
              </li>
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Free reports </span>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" class="space-y-4">
              <li class="flex gap-x-3">
                <Yes2 />
                <span> 24/7 online support </span>
              </li>
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Quarterly product workshops </span>
              </li>
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Priority email support </span>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section class="p-8">
        <h3 id="tier-premium" class="text-sm font-semibold leading-6 text-gray-900">Enterprise</h3>
        <p class="mt-2 flex items-baseline gap-x-1 text-gray-900">
          <span class="text-4xl font-bold">{price.enterprise}</span>
          <span class="text-sm font-semibold">/month</span>
        </p>
        <a href="#" aria-describedby="tier-premium" class="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oldpink text-oldpink ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300">Buy plan</a>
        <ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-gray-900">
          <li>
            <ul role="list" class="space-y-4">
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Integrations </span>
              </li>
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Shared links </span>
              </li>
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Exporting </span>
              </li>
              <li class="flex gap-x-3">
                <Yes2 />
                <span>
                  Team members
                  <span class="text-sm leading-6 text-gray-500">(Up to 50 users)</span>
                </span>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" class="space-y-4">
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Advanced analytics </span>
              </li>
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Free reports </span>
              </li>
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Professional reports </span>
              </li>
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Custom report builder </span>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" class="space-y-4">
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Priority email support </span>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" class="space-y-4">
              <li class="flex gap-x-3">
                <Yes2 />
                <span> Profiling and branding </span>
              </li>
            </ul>
          </li>		  
        </ul>
      </section>
    </div>

    <!-- lg+ -->
    <div class="isolate mt-20 hidden lg:block">
      <div class="relative -mx-8">
        <div class="absolute inset-x-4 inset-y-0 -z-10 flex">
          <div class="flex w-1/4 px-4" style="margin-left: 50%" aria-hidden="true">
            <div class="w-full rounded-t-xl border-x border-t border-gray-900/10 bg-gray-400/5"></div>
          </div>
        </div>
        <table class="w-full table-fixed border-separate border-spacing-x-8 text-left">
          <caption class="sr-only">
            Pricing plan comparison
          </caption>
          <colgroup>
            <col class="w-1/4">
            <col class="w-1/4">
            <col class="w-1/4">
            <col class="w-1/4">
          </colgroup>
          <thead>
            <tr>
              <td></td>
              <th scope="col" class="px-6 pt-6 xl:px-8 xl:pt-8">
                <div class="text-sm font-semibold leading-7 text-gray-900">Free</div>
              </th>
              <th scope="col" class="px-6 pt-6 xl:px-8 xl:pt-8">
                <div class="text-sm font-semibold leading-7 text-gray-900">Pro</div>
              </th>
              <th scope="col" class="px-6 pt-6 xl:px-8 xl:pt-8">
                <div class="text-sm font-semibold leading-7 text-gray-900">Enterprise</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><span class="sr-only">Price</span></th>
              <td class="px-6 pt-2 xl:px-8">
                <div class="flex items-baseline gap-x-1 text-gray-900">
                  <span class="text-4xl font-bold">{price.free}</span>
                  <span class="text-sm font-semibold leading-6">/month</span>
                </div>
                <a href="#" class="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oldpink text-oldpink ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300">Buy plan</a>
              </td>
              <td class="px-6 pt-2 xl:px-8">
                <div class="flex items-baseline gap-x-1 text-gray-900">
                  <span class="text-4xl font-bold">{price.pro}</span>
                  <span class="text-sm font-semibold leading-6">/month</span>
                </div>
                <a href="#" class="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oldpink bg-oldpink text-white hover:bg-indigo-500">Buy plan</a>
              </td>
              <td class="px-6 pt-2 xl:px-8">
                <div class="flex items-baseline gap-x-1 text-gray-900">
                  <span class="text-4xl font-bold">{price.enterprise}</span>
                  <span class="text-sm font-semibold leading-6">/month</span>
                </div>
                <a href="#" class="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oldpink text-oldpink ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300">Buy plan</a>
              </td>
            </tr>
            <tr>
              <th scope="colgroup" colspan="4" class="pb-4 text-sm font-semibold leading-6 text-gray-900 pt-8">
                Features
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/10"></div>
              </th>
            </tr>

			<tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                API
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Included in Pro</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Data retention
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <div class="text-center text-sm leading-6 text-gray-500">6 mos</div>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <div class="text-center text-sm leading-6 text-gray-500">Unlimited</div>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <div class="text-center text-sm leading-6 text-gray-500">Unlimited</div>
              </td>
            </tr>
					
            <tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Team members
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <div class="text-center text-sm leading-6 text-gray-500">1</div>

                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <div class="text-center text-sm leading-6 text-gray-500">Unlimited</div>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <div class="text-center text-sm leading-6 text-gray-500">Unlimited</div>
              </td>
            </tr>
			

            <tr>
              <th scope="colgroup" colspan="4" class="pb-4 text-sm font-semibold leading-6 text-gray-900 pt-16">
                Logs
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/10"></div>
              </th>
            </tr>

            <tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Audit logs
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Not included in Pro</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>	

			<tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Logs data retention
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <div class="text-center text-sm leading-6 text-gray-500">1 week</div>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <div class="text-center text-sm leading-6 text-gray-500">6 months</div>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <div class="text-center text-sm leading-6 text-gray-500">1 year</div>
              </td>
            </tr>		
			
			
			<tr>
              <th scope="colgroup" colspan="4" class="pb-4 text-sm font-semibold leading-6 text-gray-900 pt-16">
                Electronic Medical record
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/10"></div>
              </th>
            </tr>

			<tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Electronic Medical record
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <div class="text-center text-sm leading-6 text-gray-500">+ $11</div>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <div class="text-center text-sm leading-6 text-gray-500">+ $11</div>
              </td>
            </tr>			
			<tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Exporting
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Pro</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>

			<tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                File upload
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Pro</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>			
			<tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Diagnosis
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Pro</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th scope="colgroup" colspan="4" class="pb-4 text-sm font-semibold leading-6 text-gray-900 pt-16">
                Communication
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/10"></div>
              </th>
            </tr>
            <tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Chat and Video
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <div class="text-center text-sm leading-6 text-gray-500">Chat only</div>
                <span class="sr-only">Included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <div class="text-center text-sm leading-6 text-gray-500">+$11</div>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <div class="text-center text-sm leading-6 text-gray-500">+$11</div>
              </td>
            </tr>
            <tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Video
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Pro</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Pro</span>
              </td>
            </tr>			

			<tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Video participants
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <div class="text-center text-sm leading-6 text-gray-500">20</div>
                <span class="sr-only">Included in Pro</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <div class="text-center text-sm leading-6 text-gray-500">500</div>
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>			

			<tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Video recording
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Pro</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>	

            <tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Video screen sharing
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Pro</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>			


			<tr>
              <th scope="colgroup" colspan="4" class="pb-4 text-sm font-semibold leading-6 text-gray-900 pt-16">
                Profiling and branding
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/10"></div>
              </th>
            </tr>
            <tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Your colors
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Included in Pro</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>
            <tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Name in SMS sender
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Included in Pro</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>
            <tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Name in BankID
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Included in Pro</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>			

            <tr>
              <th scope="colgroup" colspan="4" class="pb-4 text-sm font-semibold leading-6 text-gray-900 pt-16">
                Reporting
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/10"></div>
              </th>
            </tr>
            <tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Analytics
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Pro</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Custom report builder
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Pro</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>


            <tr>
              <th scope="colgroup" colspan="4" class="pb-4 text-sm font-semibold leading-6 text-gray-900 pt-16">
                Support
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/10"></div>
              </th>
            </tr>

            <tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Email support
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <div class="text-center text-sm leading-6 text-gray-500">
					Basic
				</div>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <div class="text-center text-sm leading-6 text-gray-500">Standard</div>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <div class="text-center text-sm leading-6 text-gray-500">Priority</div>
              </td>
            </tr>

            <tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Key Account
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Included in Pro</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>
			
			<tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Help center
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Not included in Pro</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th scope="colgroup" colspan="4" class="pb-4 text-sm font-semibold leading-6 text-gray-900 pt-16">
                Billing
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/10"></div>
              </th>
            </tr>

            <tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Automatic card payment
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Not included in Pro</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
                Invoicing, bank transfer
                <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
              </th>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Not included in Free</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <No />
                <span class="sr-only">Not included in Pro</span>
              </td>
              <td class="px-6 py-4 xl:px-8">
                <Yes />
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
