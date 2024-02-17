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
    $: showClear = !!selectedPlace;
</script>

<AutoComplete
    {showClear}
    dropdownClassName="rounded py-2 px-3 border-none shadow"
    {onChange}
    itemClass="p-5"
    labelFunction={(i) => i?.name}
    valueFunction={(i) => i?.name}
    noInputStyles={true}
    noResultsText="Inga träffar"
    showLoadingIndicator={true}
    hideArrow={true}
    inputClassName="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-oldpink-darker sm:text-sm sm:leading-6"
    minCharactersToSearch={0}
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
            <span class="text-gray-400">{item.secondaryName || ''}</span>
        </div>
    </div>
</AutoComplete>
