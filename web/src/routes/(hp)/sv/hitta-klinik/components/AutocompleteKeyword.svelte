<script lang="ts">
    import AutoComplete from 'simple-svelte-autocomplete';
    import { apiUrl } from '$lib/apiUrl';

    export let onChange: (item: any) => void;
    export let selectedKeyword: any;

    async function autocompleteSearch(input: string) {
        const query = `
        query {
            autocompleteSearch(query: "${input}") {
                label,
                type,
                url
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
        const searchItem = input
            ? [
                  {
                      type: 'KEYWORD',
                      label: input
                  }
              ]
            : [];
        return [...searchItem, ...data.data.autocompleteSearch];
    }
</script>

<AutoComplete
    showClear={true}
    dropdownClassName="rounded py-2 px-3 border-none shadow"
    {onChange}
    itemClass="p-5"
    noInputStyles={true}
    inputClassName="rounded py-2 px-3 border-none w-full text-black"
    minCharactersToSearch={0}
    placeholder="Sök"
    labelFunction={(i) => i?.label}
    searchFunction={autocompleteSearch}
    bind:selectedItem={selectedKeyword}
    delay={200}
>
    <div slot="item" let:item let:label>
        <div class="py-1">
            {#if item.type == 'KEYWORD'}
                <i class="fa fa-magnifying-glass text-gray-400 mr-4" /><span>{item.label}</span>
            {/if}
            {#if item.type == 'FIND'}
                <i class="fa fa-magnifying-glass text-gray-400 mr-4" /><span>Sök {item.label}</span>
            {/if}
            {#if item.type == 'ORG'}
                <i class="fa fa-globe text-gray-400 mr-4" /><a href="/c/{item.url}?backbutton=1"
                    >{item.label}</a
                >
            {/if}
        </div>
    </div>
</AutoComplete>