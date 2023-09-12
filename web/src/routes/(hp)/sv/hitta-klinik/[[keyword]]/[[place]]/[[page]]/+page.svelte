<script lang="ts">
    import AutoComplete from 'simple-svelte-autocomplete';
    import type { PageData } from '../../../$types';
    import OrganizationCard from '../../../components/organizationCard.svelte';
    import { apiUrl } from '$lib/apiUrl';
    import Footer from '../../../../../../../components/footer.svelte';
    import { setContext } from 'svelte';
    import FooterMarketplace from '../../../../../../../components/footerMarketplace.svelte';
    import { loadData } from './load_data';

    export let data: PageData;
    let page = 0;
    let searchForm: HTMLFormElement;
    let selectedItem =
        data.keyword && data.keyword !== 'Alla'
            ? {
                  label: data.keyword
              }
            : undefined;
    setContext('lang', 'sv');
    const isLocation = data.place?.match(/[+-]?([0-9]*[.])?[0-9]+,[+-]?([0-9]*[.])?[0-9]+/);
    let myPlace;
    let selectedPlace = isLocation
        ? { name: 'Min plats' }
        : data.place && data.place !== 'Sverige'
        ? { name: data.place }
        : undefined;

    let loadingPlace = false;

    let defaultPlaces = ['Stockholm', 'Göteborg', 'Malmö'];
    let defaultKeywords = [
        'Psykolog',
        'Massage',
        'Vaccination',
        'Fysioterapi',
        'Kiropraktor',
        'Idrottsskador',
        'Fobibehandling',
        'Läkarintyg'
    ];

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

    async function loadMore() {
        page = page + 1;
        const { organizations } = await loadData({
            params: { page, keyword: data.keyword, place: data.place },
            fetch
        });
        data.organizations = data.organizations.concat(organizations);
        data = data;
        setTimeout(function scrollToNewOrgs() {
            const el = document.getElementsByClassName('organization');
            if (el.length) {
                el[el.length - 12].scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }

    const setMyLocation = function () {
        loadingPlace = true;
        navigator.geolocation.getCurrentPosition(
            function success(position) {
                loadingPlace = false;
                myPlace = [position.coords.longitude, position.coords.latitude].join(',');

                selectedPlace = {
                    name: 'Min plats'
                };
            },
            function error() {
                loadingPlace = false;
                alert('Fel');
            }
        );
    };
    const placePart = () =>
        myPlace || (selectedPlace ? encodeURIComponent(selectedPlace.name) : 'Sverige');
    const keywordPart = () => (selectedItem ? encodeURIComponent(selectedItem.label) : 'Alla');

    const getUrl = () => `/sv/hitta-klinik/${keywordPart()}/${placePart()}`;

    const submit = function () {
        if (!searchForm) return;
        searchForm.action = getUrl();
        searchForm.submit();
    };
</script>

<svelte:head>
    <meta name="robots" content="noindex" />
</svelte:head>

<div class="w-sceen flex flex-col">
    <div class="bg-purple-400 p-6">
        <div class="container mx-auto text-white text-xl flex flex-row gap-5 align-middle">
            <img src="https://kaddio.com/img/kaddio-logo.png" alt="" class="h-7" />
            Hitta klinik
            <h1>{[data.keyword, data.place].filter(Boolean).join(' › ')}</h1>
        </div>
    </div>

    <div class="bg-gray-100 p-4 lg:p-12 pt-4 lg:pt-20 flex grow">
        <div class="flex flex-col gap-10 lg:w-full lg:flex-row container mx-auto">
            <form
                class="p-0 grid grid-cols-2 gap-8 h-fit"
                name="searchForm"
                bind:this={searchForm}
                method="GET"
                action={getUrl()}
            >
                <div class="flex flex-col col-span-2 md:col-span-1 lg:col-span-2">
                    <label class="font-semibold mb-2 ml-3">Sök</label>
                    <AutoComplete
                        showClear={true}
                        dropdownClassName="rounded py-2 px-3 border-none shadow"
                        onChange={submit}
                        itemClass="p-5"
                        noInputStyles={true}
                        inputClassName="rounded py-2 px-3 border-none w-full"
                        minCharactersToSearch={0}
                        placeholder="Sök"
                        labelFunction={(i) => i?.label}
                        searchFunction={autocompleteSearch}
                        bind:selectedItem
                        delay={200}
                    >
                        <div slot="item" let:item let:label>
                            <div class="py-1">
                                {#if item.type == 'KEYWORD'}
                                    <i class="fa fa-magnifying-glass text-gray-400 mr-4" /><span
                                        >{item.label}</span
                                    >
                                {/if}
                                {#if item.type == 'FIND'}
                                    <i class="fa fa-magnifying-glass text-gray-400 mr-4" /><span
                                        >Sök {item.label}</span
                                    >
                                {/if}
                                {#if item.type == 'ORG'}
                                    <i class="fa fa-globe text-gray-400 mr-4" /><a
                                        href="/c/{item.url}?backbutton=1">{item.label}</a
                                    >
                                {/if}
                            </div>
                        </div>
                    </AutoComplete>
                    <div class="px-4 py-3 flex flex-wrap gap-2 hidden md:flex">
                        {#each defaultKeywords as keyword}
                            <a
                                class="text-xs text-gray-400"
                                href
                                on:click={() => (selectedItem = { label: keyword })}>{keyword}</a
                            >
                        {/each}
                    </div>
                </div>
                <div class="flex flex-col col-span-2 md:col-span-1 lg:col-span-2">
                    <div class="flex flex-row justify-between mb-2 ml-3 items-baseline">
                        <label class="font-semibold">Plats</label>
                        <a
                            class="text-xs text-gray-400 font-semibold"
                            href=""
                            on:click={setMyLocation}
                        >
                            Min plats
                            {#if loadingPlace}
                                <i class="fa-duotone fa-spinner-third fa-spin" />
                            {:else}
                                <i class="fa fa-location-arrow" />
                            {/if}
                        </a>
                    </div>

                    <AutoComplete
                        showClear={true}
                        dropdownClassName="rounded py-2 px-3 border-none shadow"
                        onChange={submit}
                        itemClass="p-5"
                        labelFunction={(i) => i?.name}
                        valueFunction={(i) => i?.name}
                        noInputStyles={true}
                        inputClassName="rounded py-2 px-3 border-none w-full"
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
                                <i class="fa fa-magnifying-glass text-gray-400 mr-4" /><span
                                    >{item.name}</span
                                > <span class="text-gray-400">{item.secondaryName}</span>
                            </div>
                        </div>
                    </AutoComplete>
                    <div class="px-4 py-3 md:flex md:flex-wrap gap-2 hidden">
                        {#each defaultPlaces as place}
                            <a
                                class="text-xs text-gray-400"
                                href
                                on:click={() => (selectedPlace = { name: place })}>{place}</a
                            >
                        {/each}
                    </div>
                </div>
            </form>

            <div class="flex flex-col h-full grow">
                {#if data.organizations.length}
                    <div class="flex justify-between">
                        <label class="font-semibold mb-2 ml-3"
                            >Sökresultat &nbsp;<span class="font-normal text-gray-500"
                                >{data.organizations.length} av {data.count}</span
                            ></label
                        >
                    </div>
                    <div class="lg:mt-0">
                        <div class="grid grid-cols-12 gap-7">
                            {#each data.organizations as organization}
                                <div class="col-span-12 sm:col-span-6 xl:col-span-4">
                                    <OrganizationCard {organization} />
                                </div>
                            {/each}
                        </div>
                    </div>

                    <div class="flex flex-row justify-start gap-8">
                        {#if data.organizations.length < data.count}
                            <a
                                href=""
                                class="text-gray-500 font-semibold mt-2 ml-3"
                                on:click={() => loadMore()}>Ladda fler</a
                            >
                        {/if}

                        <a
                            href=""
                            class="text-gray-500 mt-2 ml-3"
                            on:click={() => scrollTo({ top: 0, behavior: 'smooth' })}>Till toppen</a
                        >
                    </div>
                {:else}
                    <div
                        class="flex items-center justify-center flex-col gap-7 text-gray-400 h-full"
                    >
                        <i class="fa fa-magnifying-glass fa-3x" />
                        <h2 class="text-2xl font-semibold">Inga resultat</h2>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
<!-- <AutocompleteInput optionsFn={getData} placeholder="Sök..." on:selected={navigate}></AutocompleteInput> -->

<FooterMarketplace />

<style>
    .autocomplete-list-item.selected {
        @apply bg-purple-500;
    }

    :global(:root) {
        font-size: clamp(12px, 0.5711rem + 0.5725vw, 15px);
    }
</style>
