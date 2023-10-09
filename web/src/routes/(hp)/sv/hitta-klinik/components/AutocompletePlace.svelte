<script lang="ts">
    import AutoComplete from 'simple-svelte-autocomplete';
    import { apiUrl } from '$lib/apiUrl';

    export let onChange: (item: any) => void;
    export let selectedPlace: any;

    async function autocompletePlace(input: string) {
        const query = `
    query {
        autocompletePlace(query: "${input}") {
            name
            secondaryName
        }
    }
    `;
        const result = await fetch(`${apiUrl()}/graphqlmarketplace`, {
            method: 'POST',
            body: JSON.stringify({ query }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await result.json();

        return data.data.autocompletePlace;
    }
</script>

<AutoComplete
    showClear={true}
    dropdownClassName="rounded py-2 px-3 border-none shadow"
    {onChange}
    itemClass="p-5"
    labelFunction={(i) => i?.name}
    valueFunction={(i) => i?.name}
    noInputStyles={true}
    inputClassName="rounded py-2 px-3 border-none w-full text-black"
    minCharactersToSearch={0}
    placeholder="Sök plats"
    searchFunction={autocompletePlace}
    bind:selectedItem={selectedPlace}
    delay={200}
>
    <div slot="item" let:item let:label>
        <!-- {@html label} -->
        <!-- to render the default higliglighted item label -->
        <!-- render anything else -->
        <div class="py-1">
            <i class="fa fa-magnifying-glass text-gray-400 mr-4" /><span>{item.name}</span>
            <span class="text-gray-400">{item.secondaryName}</span>
        </div>
    </div>
</AutoComplete>
