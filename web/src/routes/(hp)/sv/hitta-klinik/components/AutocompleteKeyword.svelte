<script lang="ts">
    import AutoComplete from 'simple-svelte-autocomplete';
    import { apiUrl } from '$lib/apiUrl';
    import { onMount } from 'svelte';

    export let onChange: (item: any) => void;
    export let selectedKeyword: any;
    export let keywordInput;

    const debounce = (fn, delay) => {
        let timeoutID;
        return function (...args) {
            if (timeoutID) {
                clearTimeout(timeoutID);
            }
            timeoutID = setTimeout(() => {
                fn(...args);
            }, delay);
        };
    };

    let loadedItems = [];
    let items = [];
    const loadAutocompleteResults = debounce(async function (input: string) {
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
        console.log(data);
        loadedItems = data.data.autocompleteSearch;
    }, 200);

    async function autocompleteSearch(input: string) {
        keywordInput = input;
        await loadAutocompleteResults(input);
        return items;
    }

    $: searchItem = keywordInput
        ? {
              type: 'FIND',
              label: keywordInput
          }
        : {
              type: 'SHOW_ALL',
              label: undefined
          };
    $: items = [searchItem, ...loadedItems];

    //this is a hack to let links in the dropdown to work as ordinary links
    const onChangeLocal = function () {
        if (selectedKeyword?.type == 'ORG') {
            return;
        }
        onChange(selectedKeyword);
    };

    autocompleteSearch('');

    $: showClear = !!selectedKeyword;
    $: if (selectedKeyword?.type == 'SHOW_ALL') {
        selectedKeyword = undefined;
    }
</script>

<AutoComplete
    {showClear}
    dropdownClassName="rounded py-2 px-3 border-none shadow"
    onChange={onChangeLocal}
    itemClass="p-5"
    noInputStyles={true}
    inputClassName="rounded py-2 px-3 border-none w-full text-black"
    minCharactersToSearch={0}
    placeholder="Sök"
    noResultsText="Inga träffar"
    showLoadingIndicator={true}
    hideArrow={true}
    labelFunction={(i) => i?.label}
    searchFunction={autocompleteSearch}
    {items}
    bind:selectedItem={selectedKeyword}
    delay={0}
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
                <i class="fa fa-globe text-gray-400 mr-4" /><a href="/c/{item.url}">{item.label}</a>
            {/if}
            {#if item.type == 'SHOW_ALL'}
                <i class="fa fa-times text-gray-400 mr-4" /><a href="/c/{item.url}">Visa alla</a>
            {/if}
        </div>
    </div>
</AutoComplete>
