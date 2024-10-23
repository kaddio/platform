<script>
    import No from "./no.svelte";
    import Yes from "./yes.svelte";

</script>

<tr>
    <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900">
    <slot name="title" />
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
    <div class="text-center text-sm leading-6 text-gray-500">Paid add-on</div>
    </td>
</tr>