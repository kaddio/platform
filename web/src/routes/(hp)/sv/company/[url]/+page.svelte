<script lang="ts">
	import Card from "../../../../../components/card.svelte";
	import Kdbutton from "../../../../../components/kdButton.svelte";
	import type { Organization } from "../types";
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';
    import 'dayjs/locale/sv';
	import KdButton from "../../../../../components/kdButton.svelte";
	import { Color, Size, Variant } from "../../../../../components/common_types";
	import KdItem from "../../../../../components/kdItem.svelte";
	import { groupBy } from "lodash";
	import Gallery from "./components/gallery.svelte";
	
    export let data;
    const organization = data.organization;
    dayjs.locale("sv")
    dayjs.extend(relativeTime);

    const nextTime = dayjs(organization.nextFreeTime).fromNow()
    
    const bookingTypes = groupBy(organization.bookingTypes, 'categoryName');
</script>
<div class="w-screen h-full bg-gray-100">
    <div class="w-full h-60 sm:h-72 md:h-80 lg:h-96 relative p-8" style="background-image: url({organization.homepage?.headerImg}); background-size: cover; background-position: center;">
        <div class="max-w-screen-lg mx-auto mx-auto relative h-full">
            <div class="flex justify-between w-full">
                <div></div>
                <KdButton  variant={Variant.LIGHT} color={Color.DEFAULT}>Logga in</KdButton>
            </div>

            
        
        
            <h1 class="text-white absolute bottom-8 text-3xl">
                {organization.name}

            </h1>
        
        
    </div>
    </div>
    <div class="">
        <div class=" bg-white">
            <div class="max-w-screen-lg mx-auto flex flex-row justify-between w-full p-6">
            <a class="text-sm uppercase text-gray-500 font-semibold">Platser</a>
            <a class="text-sm uppercase text-gray-500 font-semibold">Behandlingar</a>
            <a class="text-sm uppercase text-gray-500 font-semibold">Behandlare</a>
            <a class="text-sm uppercase text-gray-500 font-semibold">
                Omdömen
                <span class="text-gray-800">{organization.stars?.toFixed(1)}</span>
                <i class="fa fa-star text-yellow-500"></i>
            </a>
        </div>
        </div>
        <div class="flex gap-8 mt-8 max-w-screen-lg mx-auto">
            <div>
            <Card className="grow max-w-prose ">
                <div class="prose line-clamp-6 p-8">
                    {@html organization.homepage?.presentation}
                    <a href="">Läs mer</a>
                </div>
                
                <Gallery imageSrcs={organization.homepage.pics}></Gallery>
            </Card>
            
        </div>
            <div class="flex flex-col gap-8">
            <Card className="flex flex-col gap-5 grow p-5 w-96 max-h-96 overflow-scroll">
                {#each organization.hosts as host} 
                    
                        <KdItem>
                            <img src={host.imgUrl} slot="avatar" />
                            <span slot="title">
                                {host.firstname} {host.lastname}
                            </span>
                            <span slot="subtitle">
                                {#if host.nextFreeTime}
                                    {dayjs(host.nextFreeTime).fromNow()}
                                {:else}
                                    Inga lediga tider
                                {/if}
                            </span>
                            <span slot="action">
                                <KdButton size="{Size.SM}" variant="{Variant.FLAT}">Boka</KdButton>
                            </span>
                        </KdItem>
                        
                 
                {/each}
            </Card>
            
            <Card className="flex flex-col gap-5 grow p-5 w-96 max-h-96 overflow-scroll">
                {#each Object.entries(bookingTypes) as [category, bookingTypesInCategory]} 
                    <span class="uppercase text-gray-400 text-sm font-semibold">{category || ""}</span>
                    {#each bookingTypesInCategory as bookingType}                         
                        <KdItem>
                            <span slot="title">
                                {bookingType.name}
                            </span>
                            <span slot="subtitle">
                                {bookingType.clientVisibleLength} min · {bookingType.price} kr
                                {#if bookingType.nextFreeTime}
                                    {dayjs(bookingType.nextFreeTime).fromNow()}
                                {:else}
                                    Inga lediga tider
                                {/if}
                            </span>
                            <span slot="action">
                                <KdButton size="{Size.SM}" variant="{Variant.FLAT}">Boka</KdButton>
                            </span>
                        </KdItem>
                    {/each}

                {/each}
            </Card>
        </div>
        </div>
    </div>
</div>
