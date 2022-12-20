<script lang="ts">

    type Module = {
        price: number,
        name: string,
        selected?: boolean,
        disabled?: boolean,
    }

    export let modules : Module[];
    export let currency: string;

    $: total = modules.filter(m => m.selected).map(m=> m.price).reduce((a,b) => a+b, 0);
</script>


<table class="table">
    <tbody>
        <tr><th>Modul</th><th>Pris</th><th></th></tr>
        {#each modules as module}
            <tr>
                <td><label for={module.name}>{module.name}</label></td>
                <td>{module.price}</td>
                <td><input type="checkbox" bind:checked={module.selected} on:change={()=>modules = modules} id={module.name} disabled={module.disabled}></td>
            </tr>
        {/each}
    </tbody>
    <tfoot>
        <tr>
            <th>
                Månadspris / behandlare
            </th>
            <th>
                {total} {currency}
            </th>
            <th></th>
        </tr>
    </tfoot>
</table>


<style>
    label {
        font-weight: normal;
    }
</style>