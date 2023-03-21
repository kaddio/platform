<script lang="ts">
    export let module: any;
</script>

<tr class="border-b border-gray-200">
    <td class="py-4 pl-4 pr-3 text-sm sm:pl-0">
        <div class="font-medium text-gray-900">{module.name}</div>
        <div class="mt-0.5 text-gray-500 sm:hidden">{module.price}</div>
    </td>

    <td class="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">{module.price}</td>
</tr>
