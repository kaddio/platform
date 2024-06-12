<script lang="ts">
    import type { PageData } from '../../../$types';
    import OrganizationCard from '../../../components/organizationCard.svelte';

    import { setContext } from 'svelte';
    import FooterMarketplace from '../../../../../../../components/footerMarketplace.svelte';
    import { loadData } from './load_data';

    import AutocompleteKeyword from '../../../components/AutocompleteKeyword.svelte';
    import AutocompletePlace from '../../../components/AutocompletePlace.svelte';
    import { onMount, prevent_default } from 'svelte/internal';
    import { descFromKeywordAndPlace } from "$lib/keywords";
    import Seo from '$components/seo.svelte';
    import OrganizationCard2 from '../../../components/organizationCard2.svelte';
    import { browser } from '$app/environment';

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
    let myCoords = isLocation ? data.place : undefined;
    let selectedPlace = isLocation
        ? { name: 'Min plats' }
        : data.place && data.place !== 'Sverige'
        ? { name: data.place }
        : undefined;

    let loadingPlace = false;
    const setMyLocation = function () {
        loadingPlace = true;
        navigator.geolocation.getCurrentPosition(
            function success(position) {
                loadingPlace = false;
                myCoords = [position.coords.longitude, position.coords.latitude].join(',');

                selectedPlace = {
                    name: 'Min plats'
                };
            },
            function error() {
                loadingPlace = false;
                alert('Du måste aktivera platstjänster i din webbläsare');
            }
        );
    };

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

    const placePart = () => {
        if (!selectedPlace) {
            return 'Sverige';
        }
        if (myCoords) {
            return encodeURIComponent(myCoords);
        }

        if (!myCoords) {
            return encodeURIComponent(selectedPlace.name);
        }
    };

    const keywordPart = () => (selectedItem ? encodeURIComponent(selectedItem.label) : 'Alla');

    const getUrl = () => `/sv/hitta-klinik/${keywordPart()}/${placePart()}`;

    const submit = function () {
        if (!searchForm) return;
        searchForm.action = getUrl();

        searchForm.submit();
    };

    onMount(() => {
        window.sessionStorage && window.sessionStorage.setItem('searchUrl', getUrl());
    });

    const titleMarketplace = function(keyword: string, place: string): string{
        if(!keyword || keyword == 'Alla'){
            keyword = 'Vård och hälsa'
        }

        if(place == 'Sverige'){
            place = "hela Sverige";
        }

        if(keyword && place) return `${keyword} ${place}`;

        return `${keyword} hela Sverige`
    }

    const addKaddio = function(str: string): string{
        if(str){
            return `${str} - Kaddio`;
        }

        else{
            return 'Kaddio';
        }
    }

    const h1ForMarketplace = (keyword: string, place: string) => {
        if(!keyword || keyword == 'Alla'){
            keyword = 'Vård och hälsa'
        }

        if(place == 'Sverige'){
            place = "hela Sverige";
        }

        if(keyword && place) return `${keyword} ${place}`;

        return `${keyword} hela Sverige`
    }

    $: title = addKaddio(titleMarketplace(data.keyword, data.place));

    const hits = function(count: number){
        if(count == 1){
            return `${count} träff`;
        }

        return `${count} träffar`;
    }

    // $: console.log(`keyword "${data.keyword}" exists: ${keywordExists(data.keyword)}. Should show meta: ${shouldShowMetaForPage(data.keyword, data.organizations.length)} Matches: ${data.organizations?.length}`);
    // $: console.log("desc: ", descFromKeywordAndPlace(data.keyword, data.place));

    const possibleResultView = (browser && window.localStorage.getItem('resultView'));
    const resultView = possibleResultView || 'v1';

    
</script>


<Seo
    url="https://kaddio.com/sv/hitta-klinik"
    type="website"
    keywords="psykolog, terapi, behandlingar, skönhetsbehandling, massage"
    title={title}
    description={descFromKeywordAndPlace(data.keyword, data.place)}
    images={["https://kaddio.com/img/kaddio-fade.png", "https://kaddio.com/img/logotypes/Kaddio_Logga_Normal.svg"]} 
/>

<div class="w-sceen flex flex-col">
    <div class="w-full relative p-4">
        <div
            style="background-image: url('/img/man.jpg'); background-size: cover; background-position: center; "
            class="w-full top-0 absolute left-0 bottom-0 right-0"
        />
        <div
            class="mx-auto flex sm:gap-12 items-center md:items-end top-0 left-0 relative max-w-screen-lg flex-col p-0 pb-2 pt-0 md:flex-row justify-between"
        >
            <a href="/sv/hitta-klinik">
                <img
                    src="https://kaddio.com/img/logotypes/Kaddio_Logga_Normal.svg"
                    alt="Kaddio"
                    class="h-14 invert"
                />
            </a>

            <form
                class="p-0 grid md:grid-cols-2 grid-cols-1 gap-6 w-full max-w-screen-sm"
                name="searchForm"
                bind:this={searchForm}
                method="GET"
                on:submit={prevent_default}
            >
                <div class="flex flex-col col-span-2 md:col-span-1">
                    <label class="font-semibold mb-2 ml-3 text-white">Sök</label>
                    <AutocompleteKeyword onChange={submit} bind:selectedKeyword={selectedItem} />
                </div>
                <div class="flex flex-col col-span-2 md:col-span-1">
                    <div class="flex flex-row justify-between mb-2 ml-3 items-baseline text-white">
                        <label class="font-semibold">Plats</label>
                        <a
                            class="text-sm text-white font-semibold"
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
                    <AutocompletePlace onChange={submit} bind:selectedPlace />
                </div>
            </form>
        </div>
    </div>
</div>


{#if resultView == 'v2'}
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
                {#if data.organizations.length}
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data.keyword} {data.place}</h2>
                    <p class="mt-2 text-lg leading-8 text-gray-600">Visar {data.organizations.length} av {data.count}</p>

                {:else}
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Inga resultat</h2>
                    <p class="mt-2 text-lg leading-8 text-gray-600">Prova att söka på något annat</p>
                {/if}

            </div>

            <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {#each data.organizations as organization}
                    <OrganizationCard2 {organization} />
                {/each}

            </div>

            {#if data.organizations.length < data.count}




            <div class="mt-16 text-center">
                    <a
                        href=""
                        class="text-gray-500"
                        on:click|preventDefault={() => loadMore()}>Ladda in fler</a
                    >
                </div>
            {/if}


        </div>
    </div>

{:else}
    <div class="w-sceen flex flex-col">

        <div class="bg-gray-100 p-4 sm:p-8 lg:p-12 pt-4 lg:pt-20 flex grow">
            <div class="flex flex-col gap-10 lg:w-full lg:flex-row container mx-auto">
                <div class="flex flex-col h-full grow max-w-screen-lg mx-auto">
                    {#if data.organizations.length}
                        <div class="flex justify-between">
                            <div class="font-semibold mb-2 ml-3">
                                <h1 class="inline">{titleMarketplace(data.keyword, data.place)}</h1>
                                &nbsp;
                                <span class="font-normal text-gray-500"
                                    > · {hits(data.count)}</span
                                >
                            </div>
                        </div>
                        <div class="lg:mt-0">
                            <div class="grid grid-cols-6 gap-12">
                                {#each data.organizations as organization}
                                    <div class="col-span-6 sm:col-span-3 xl:col-span-2">
                                        <OrganizationCard {organization} />
                                    </div>
                                {/each}
                            </div>
                        </div>

                        <div class="flex flex-row justify-center gap-8 mt-12 relative">
                            {#if data.organizations.length < data.count}
                                <a
                                    href=""
                                    class="text-gray-500 font-semibold mt-2 ml-3"
                                    on:click|preventDefault={() => loadMore()}>Ladda fler</a
                                >
                            {/if}

                            <a
                                href=""
                                class="text-gray-500 mt-2 ml-3 absolute bottom-0 right-0"
                                on:click={() => scrollTo({ top: 0, behavior: 'smooth' })}>Till toppen</a
                            >
                        </div>
                    {:else}
                        <div class="flex items-center justify-center flex-col gap-7 text-gray-400 h-96">
                            <i class="fa fa-magnifying-glass fa-3x" />
                            <h2 class="text-2xl font-semibold">Inga resultat</h2>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
    
{/if}



<FooterMarketplace />

<style>
    .autocomplete-list-item.selected {
        @apply bg-purple-500;
    }

    /* :global(:root) {
        font-size: clamp(12px, 0.5711rem + 0.5725vw, 15px);
    } */
</style>
