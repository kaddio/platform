<script lang="ts">

    type Module = {
        price: number,
        name: string,
        selected: boolean
    }

    export let modules : Module[];
    export let currency: string;

    $: total = modules.filter(m => m.selected).map(m=> m.price).reduce((a,b) => a+b, 0);
</script>

<table>
    {#each modules as module}
        <tr>
            <td>{module.name}</td>
            <td>{module.price}</td>
            <td><input type="checkbox" bind:checked={module.selected} on:change={()=>modules = modules}></td>
        </tr>
    {/each}
    <tfoot>
        <tr>
            <td colspan="2">
                
            </td>
            <td>
                {total} {currency}
            </td>
        </tr>
    </tfoot>
</table>


<slot name="MånadsprisLabel">
    Månadspris / behandlare
</slot>
