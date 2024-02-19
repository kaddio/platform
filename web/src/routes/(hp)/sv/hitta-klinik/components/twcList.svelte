<div class="px-4 sm:px-6 lg:px-8">
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-base font-semibold leading-6 text-gray-900">Behandlingar</h1>
      <p class="mt-2 text-sm text-gray-700">Demokliniken erbjuder 15 olika <strong class="font-semibold text-gray-900">behandlingar</strong> plan. The next payment of $80 will be due on August 4, 2022.</p>
    </div>
    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update credit card</button>
    </div>
  </div>
  <div class="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
    <table class="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Behandling</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Tid</th>
          <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Pris</th>
          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Nästa tid</th>
          <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span class="sr-only">Boka</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <slot />

        <!-- More plans... -->
      </tbody>
    </table>
  </div>
</div>
