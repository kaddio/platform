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
	import { groupBy, size } from "lodash";
	import Gallery from "./components/gallery.svelte";
    import { websiteSchema } from "$lib/json-ld";
	import LdTag from "$lib/components/LDTag.svelte";
	import { json } from "@sveltejs/kit";
	import BookingTypes from "./components/booking_types.svelte";
	import Hosts from "./components/hosts.svelte";
	import Link from "./components/link.svelte";
	import KdLinkButton from "../../../../../components/kdLinkButton.svelte";
    export let data;
    dayjs.locale("sv")
    dayjs.extend(relativeTime);
    const organization = data.organization;

    // if(data.orgData){
    //     schema = {
    //         ...websiteSchema,
    //         name: "Kaddio ...",
    //         description: `This is Kadd`
    //     }
    // }
    
    const nextTime = dayjs(organization.nextFreeTime).fromNow()
    
    const bookingTypes = groupBy(organization.bookingTypes, 'categoryName');
    
    let schema = websiteSchema;

</script>

<div class="w-screen h-full bg-gray-100 pb-8">
    <div class="w-full h-60 sm:h-72 md:h-80 lg:h-96 relative p-8" style="background-image: url({organization.homepage?.headerImg}); background-size: cover; background-position: center;">
        <div class="overlay"></div>
        <div class="max-w-screen-lg mx-auto mx-auto relative h-full">
            <div class="flex justify-between w-full">
                <div>
                    <img src="/img/kaddio-logo.png" alt="" class="h-7">
                </div>
                <KdButton  variant={Variant.LIGHT} color={Color.DEFAULT}>Logga in</KdButton>
            </div>

            
        
        
            <h1 class="text-white absolute bottom-8 text-3xl">
                {organization.name}

            </h1>
        
        
    </div>
    </div>
    <div class="">
        <div class="bg-white">
            <div class="max-w-screen-lg mx-auto flex flex-row justify-between w-full p-6">
                <a class="text-sm uppercase text-gray-500 font-semibold">Platser</a>
                <a class="text-sm uppercase text-gray-500 font-semibold">Behandlingar</a>
                <a class="text-sm uppercase text-gray-500 font-semibold">Personal</a>
                <a class="text-sm uppercase text-gray-500 font-semibold">
                    Omdömen
                    <span class="text-gray-800">{organization.stars?.toFixed(1)}</span>
                    <i class="fa fa-star text-yellow-500"></i>
                </a>
            </div>
        </div>
        <div class="gap-8 mt-8 max-w-screen-lg mx-auto grid grid-cols-5 px-5">
            <Card className="col-span-5 sm:col-span-3">
                <div class="prose p-8 max-h-96">
                    {@html organization.homepage?.presentation}
                    <a href="">Läs mer</a>
                </div>    
            </Card>
        
            <Card className="flex flex-col gap-4 col-span-5 sm:col-span-2">
                <h3 class="text-bold text-lg px-8 mt-8">{organization.name}</h3>
                <div class="flex flex-col gap-4 my-8 mx-8">
                    <Link href="http://insta.com" type="instagram"></Link>
                    <Link href="http://external.com" type="external"></Link>
                    <Link href="http://fb.com" type="facebook"></Link>
                </div>
                <Gallery imageSrcs={organization.homepage.pics}></Gallery>
                <div class="flex flex-col gap-4  p-8 max-h-96 overflow-scroll">
                    {#each organization.places as place} 
                        <KdItem>
                            <span slot="title">
                                {place.name} <small class="text-gray-500">{place.address}</small>
                            </span>
                            
                            <span slot="action">
                                <KdLinkButton size={Size.SM} variant={Variant.OUTLINE} href="">Boka</KdLinkButton>
                            </span>
                        </KdItem>
                    {/each}
                </div>
                
            </Card>
        </div>
    </div>
    <div class="max-w-screen-lg mx-auto grid grid-cols-2 gap-8 mt-8 px-5">
        <div class="col-span-2 sm:col-span-1">
            <div class="text-sm uppercase text-gray-500 font-semibold ml-5 mb-3">Personal</div>
            <Card className="flex flex-col gap-5  p-5  ">
                <Hosts hosts={organization.hosts}></Hosts>
            </Card>
        </div>
        <div class="col-span-2 sm:col-span-1">
            <div class="text-sm uppercase text-gray-500 font-semibold ml-5 mb-3">Tjänster</div>
            <Card className="flex flex-col gap-5  p-5  max-h-96 overflow-scroll  ">
                <BookingTypes bookingTypes={organization.bookingTypes}></BookingTypes>
            </Card>
        </div>
    </div>
</div>

<footer class="bg-gray-200">
    <div class="max-w-screen-lg mx-auto py-8">
        Kaddio
    </div>
</footer>
<style>
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 60%, rgba(0,0,0,0.5567620798319328) 100%);
}

:global(:root) {
    font-size: clamp(.9rem, 1vw, 1.2rem);
}

</style>