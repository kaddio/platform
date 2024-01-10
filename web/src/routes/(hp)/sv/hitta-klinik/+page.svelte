<script lang="ts">
    import type { PageData } from '../../$types';
    import { setContext } from 'svelte';
    import { beforeNavigate } from '$app/navigation';
    import AutocompletePlace from './components/AutocompletePlace.svelte';
    import FooterMarketplace from '../../../../components/footerMarketplace.svelte';
    import KeywordCard from './components/KeywordCard.svelte';
    import { keywords, keywordsByCategory } from './keywords';
    import AutocompleteKeyword from './components/AutocompleteKeyword.svelte';
    import Seo from '$components/seo.svelte';

    export let data: PageData;
    let keywordInput: string;

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
    let myCoords;
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

    myCoords || (selectedPlace ? encodeURIComponent(selectedPlace.name) : 'Sverige');

    const keywordPart = () => {
        if (selectedItem) {
            return encodeURIComponent(selectedItem.label);
        }
        if (keywordInput) {
            return encodeURIComponent(keywordInput);
        }
        return 'Alla';
    };

    const getUrl = () => `/sv/hitta-klinik/${keywordPart()}/${placePart()}`;

    const submit = function () {
        if (!searchForm) return;
        searchForm.action = getUrl();
        searchForm.submit();
    };

    beforeNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<Seo
    url="https://kaddio.com/sv/hitta-klinik"
    type="website"
    keywords="psykolog, terapi, behandlingar, skönhetsbehandling, massage"
    title="Boka hälsa på Kaddio"
    description="På Kaddio kan du hitta och boka allt inom hälsa över hela Sverige"
    images={[
        'https://kaddio.com/img/kaddio-fade.png',
        'https://kaddio.com/img/logotypes/Kaddio_Logga_Normal.svg'
    ]}
/>

<div class="w-sceen flex flex-col">
    <div class="w-full relative p-4 md:p-16">
        <div
            style="background-image: url('/img/man.jpg'); background-size: cover; background-position: center; "
            class="w-full top-0 absolute left-0 bottom-0 right-0"
        />
        <div
            class="mx-auto flex gap-5 align-middle justify-center items-center top-0 left-0 flex-col relative max-w-screen-lg py-16"
        >
            <h1 class="text-5xl flex gap-8 text-white">
                <img
                    src="https://kaddio.com/img/logotypes/Kaddio_Logga_Normal.svg"
                    alt="Kaddio"
                    class="h-24 invert"
                />
            </h1>

            <h2 class="text-lg mb-6 text-white">Sök och hitta rätt klinik för dina behov</h2>

            <form
                class="p-0 grid md:grid-cols-2 grid-cols-1 gap-5 w-full max-w-screen-sm"
                name="searchForm"
                bind:this={searchForm}
                method="GET"
                on:submit|preventDefault={() => {}}
                action={getUrl()}
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

    <div class="bg-gray-100 p-4 lg:p-12 pt-4 lg:pt-20 flex grow">
        <div class="gap-10 lg:w-full container mx-auto">
            <div class="flex flex-col h-full grow max-w-screen-lg mx-auto">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-16">
                    {#each keywords as keyword}
                        <a class="col-span-1" href="" on:click={() => (selectedItem = keyword)}>
                            <KeywordCard keyword={keyword.label} imgUrl={keyword.imgUrl} />
                        </a>
                    {/each}
                </div>
                <div class="mt-36 mb-24 columns-2 md:columns-6 gap-18 px-4">
                    {#each Object.entries(keywordsByCategory) as [category, keywords]}
                        <h3
                            class="text-sm uppercase text-gray-700 mb-2 font-semibold break-after-avoid"
                        >
                            {category}
                        </h3>
                        {#each keywords as keyword}
                            <a
                                class=" text-gray-600 mt-2 text-sm block"
                                href=""
                                on:click={() => (selectedItem = { label: keyword.name })}
                                >{keyword.name}</a
                            >
                        {/each}
                        <div class="mb-4" />
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>

<FooterMarketplace />

<style>
    .autocomplete-list-item.selected {
        @apply bg-purple-500;
    }

    /* :global(:root) {
        font-size: clamp(12px, 0.5711rem + 0.5725vw, 15px);
    } */

    :global(.purple-img) {
        filter: sepia(30%) hue-rotate(340deg) saturate(50%) brightness(80%);
    }
</style>
