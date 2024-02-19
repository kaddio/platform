<script lang="ts">
  export let actionEnabled: boolean;
</script>

<tr>
  <td class="relative py-4 pl-4 pr-3 text-sm sm:pl-6">
    <div class="font-medium text-gray-900"><slot name="name" /></div>
    <div class="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
      <span><slot name="slot2" /></span>
      <span class="hidden sm:inline">·</span>
      <span><slot name="slot4" /></span>
    </div>
  </td>
  <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"><slot name="slot2" /></td>
  <td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"><slot name="slot4" /></td>
  <td class="px-3 py-3.5 text-sm text-gray-500">
    <div class="sm:hidden"><slot name="slot3" /></div>
    
    <div class="hidden sm:block"><slot name="slot3" /></div>
  </td>
  <td class="relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
    <button type="button" class="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white">Läs mer</button>
    <button type="button" disabled={!actionEnabled} class="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white">Sök tid</button>
  </td>
</tr>