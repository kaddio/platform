<script lang="ts">

    import AutoComplete from "simple-svelte-autocomplete"

	
  
	import type { PageData } from "../../$types";
	import OrganizationCard from "../../components/organizationCard.svelte";

    export let data: PageData;
    let searchForm: HTMLFormElement;
    let selectedItem = {
        label: data.keyword
    }

    let selectedPlace = {
        name: data.place
    }; 

    let defaultPlaces = ["Stockholm", "Göteborg", "Malmö"];
    
    async function autocompleteSearch(input:string) {
            const query = `
        query {
            autocompleteSearch(query: "${input}") {
                label,
                type,
                url
            }
        }
        `;
        const result = await fetch("http://127.0.0.1:3000/graphqlmarketplace", {
            method: 'POST',
            body: JSON.stringify({query}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        
        const data = await result.json();
        const searchItem = input ? [{
            type: 'KEYWORD',
            label: input
        }] : []
        return [...searchItem, ...data.data.autocompleteSearch];
    }
    
    async function autocompletePlace(input:string) {
            const query = `
        query {
            autocompletePlace(query: "${input}") {
                name
                secondaryName
            }
        }
        `;
        const result = await fetch("http://127.0.0.1:3000/graphqlmarketplace", {
            method: 'POST',
            body: JSON.stringify({query}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        
        const data = await result.json();
        
        return data.data.autocompletePlace;
    }

    
    const getUrl = ()=> `/sv/hitta-klinik/${selectedItem ? encodeURIComponent(selectedItem.label) :  ""}/${selectedPlace ? encodeURIComponent(selectedPlace.name) :  ""}`;
    
    const submit = function() {
        if(!searchForm) return;
        searchForm.action = getUrl();
        searchForm.submit()
    }
</script>
<div class="w-sceen h-screen flex flex-col">
<div class="bg-purple-400 p-6 text-white">
    Kaddio
</div>
<div class="bg-gray-100 p-4 sm:p-12 pt-4 sm:pt-20 flex grow">
    <div class="flex-col gap-10 w-full sm:flex-row" >
        <form method="get" class="p-0 w-80 shrink-0 flex flex-row sm:flex-col gap-5" bind:this={searchForm}>
            <label class="font-semibold mb-2 ml-3 hidden md:visible">Sök</label>
            <AutoComplete showClear={true} dropdownClassName="rounded py-2 px-3 border-none shadow" onChange={submit} itemClass="p-5" noInputStyles={true} inputClassName="rounded py-2 px-3 border-none w-full" minCharactersToSearch={0} placeholder="Sök" labelFunction={i => i.label} searchFunction={autocompleteSearch} bind:selectedItem={selectedItem} delay={200}>
                <div slot="item" let:item let:label>
                    <!-- {@html label} -->
                    <!-- to render the default higliglighted item label -->
                    <!-- render anything else -->
                    <div class="py-1">
                        {#if item.type=='KEYWORD'}
                            <i class="fa fa-magnifying-glass text-gray-400 mr-4"></i><span >{item.label}</span>
                        {/if}
                        {#if item.type=='FIND'}
                            <i class="fa fa-magnifying-glass text-gray-400 mr-4"></i><span >Sök {item.label}</span>
                        {/if}
                        {#if item.type=='ORG'}
                            <i class="fa fa-globe text-gray-400 mr-4"></i><a href="http://{item.url}.kaddio.com">{item.label}</a>
                        {/if}
                    </div>
                </div>
            </AutoComplete>
            <div class="px-4 py-3 flex flex-wrap gap-3 hidden md:visible">
                <span class="text-xs text-gray-400 font-semibold">Psykolog</span>
                <span class="text-xs text-gray-400 font-semibold">Osteopat</span>
                <span class="text-xs text-gray-400 font-semibold">Massage</span>
            </div>
            <label class="font-semibold mb-2 ml-3 hidden md:visible">Plats</label>
            <AutoComplete showClear={true} dropdownClassName="rounded py-2 px-3 border-none shadow" onChange={submit} itemClass="p-5" labelFunction="{i => i.name }" valueFunction="{i => i.name}"noInputStyles={true} inputClassName="rounded py-2 px-3 border-none w-full" minCharactersToSearch={0} placeholder="Sök plats" searchFunction={autocompletePlace} bind:selectedItem={selectedPlace} delay={200}>
                <div slot="item" let:item let:label>
                    <!-- {@html label} -->
                    <!-- to render the default higliglighted item label -->
                    <!-- render anything else -->
                    <div class="py-1">
                        <i class="fa fa-magnifying-glass text-gray-400 mr-4"></i><span >{item.name}</span> <span class="text-gray-400">{item.secondaryName}</span>
                    </div>
                </div>
            </AutoComplete>
            <div class="px-4 py-3 flex flex-wrap gap-3 hidden md:visible">
                <span class="text-xs text-gray-400 font-semibold">Min plats <i class="fa fa-pin"></i></span>
                {#each defaultPlaces as place}
                    <a class="text-xs text-gray-400 font-semibold" href on:click={()=>selectedPlace = {name:place}}>{place}</a>
                {/each}
            </div>
        </form>
        <div class="flex flex-col h-full grow">
            
            {#if data.organizations.length}
            <div class="flex justify-between">
                <label class="font-semibold mb-2 ml-3 hidden sm:visible">Resultat</label>
                <!-- <label class="font-semibold mb-2 mr-3">Sortera</label> -->
            </div>        
                <div class="flex gap-8 flex-wrap mt-8">
                    
                    {#each data.organizations as organization}
                    <OrganizationCard organization={organization}></OrganizationCard>    
                    {/each}
                    
                </div>
            {:else}
                <div class="flex items-center justify-center flex-col gap-7 text-gray-400 h-full">
                    <i class="fa fa-magnifying-glass fa-3x"></i>
                    <h2 class="text-2xl font-semibold">Inga resultat</h2>
                </div>
            {/if} 
        
        </div>
    </div>
</div>
</div>
<!-- <AutocompleteInput optionsFn={getData} placeholder="Sök..." on:selected={navigate}></AutocompleteInput> -->


<style>
   .autocomplete-list-item.selected {
    @apply bg-purple-500;
  }
   
</style>