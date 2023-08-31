<script lang="ts">
	import Card from "../../../../components/card.svelte";
	import type { Organization } from "../types";
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';
    import 'dayjs/locale/sv';

    import { Color, Size, Variant } from "../../../../components/common_types";
	import KdItem from "../../../../components/kdItem.svelte";
	import { groupBy, size } from "lodash";
	import Gallery from "./components/gallery.svelte";
    import { websiteSchema } from "$lib/json-ld";
	import LdTag from "$lib/components/LDTag.svelte";
	import { json } from "@sveltejs/kit";
	import BookingTypes from "./components/booking_types.svelte";
	import Hosts from "./components/hosts.svelte";
	import Link from "./components/link.svelte";
	import KdLinkButton from "../../../../components/kdLinkButton.svelte";
	import KdButton from "$components/kd-button.svelte";
	import { page } from "$app/stores";
	import Footer from "../../../../components/footer.svelte";
	import { setContext } from "svelte";
	import Reviews from "./components/reviews.svelte";
	import FooterMarketplace from "../../../../components/footerMarketplace.svelte";
	import { imageHandler } from "../../../../lib/img";
    export let data;
    dayjs.locale("sv")
    dayjs.extend(relativeTime);
    const organization = data.organization;


    setContext('lang', 'sv');
    
    let showBackButton = !!$page.url.searchParams.get('backbutton');

</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

<div class="w-screen h-full bg-gray-100 pb-8">
    <div class="w-full h-60 sm:h-72 md:h-80 lg:h-96 relative p-8" style="background-image: url({imageHandler(organization.homepage?.headerImg, {format: "auto", width: 1280})}); background-size: cover; background-position: center;">
        <div class="overlay"></div>
        <div class="max-w-screen-lg mx-auto mx-auto relative h-full">
            <div class="flex justify-between w-full">
                    <div class="flex gap-5">
                        <img src="/img/kaddio-logo.png" alt="" class="h-7">
                        {#if showBackButton}
                            <a href="javascript:history.back()" class="text-white text-lg"><i class="fa fa-arrow-left"></i> Tillbaka till sökresultat </a>
                        {/if}
                    </div>

                    <KdLinkButton variant={Variant.LIGHT} color={Color.DEFAULT} href="https://{organization.url}.kaddio.com/login">Logga in</KdLinkButton>
            </div>

            
        
            <div class="flex justify-between w-full">
                <h1 class="text-white absolute bottom-8 text-3xl">
                    {organization.name}
                </h1>
                
                <div class="absolute bottom-8 right-0">
                    <KdLinkButton variant={Variant.FLAT} color={Color.PRIMARY} size={Size.XL} href="https://{organization.url}.kaddio.com/booking">Sök tid</KdLinkButton>
                </div>
            </div>
        
        
    </div>
    </div>
    <div class="">
        {#if organization.hasBooking}
            <div class="bg-white">
                <div class="max-w-screen-lg mx-auto flex flex-row justify-between w-full p-6">
                    {#if organization.homepage?.showPlaces}
                        <a class="text-sm uppercase text-gray-500 font-semibold" href="#places">Platser</a>
                    {/if}
                    <a class="text-sm uppercase text-gray-500 font-semibold" href="#booking-types">Behandlingar</a>
                    {#if organization.homepage?.showUs}
                        <a class="text-sm uppercase text-gray-500 font-semibold" href="#hosts">Personal</a>
                    {/if}
                    <a class="text-sm uppercase text-gray-500 font-semibold">
                        Omdömen
                        <span class="text-gray-800">{organization.stars?.toFixed(1)}</span>
                        <i class="fa fa-star text-yellow-500"></i>
                    </a>
                </div>
            </div>
        {/if}
        <div class="gap-8 mt-8 max-w-screen-lg mx-auto grid grid-cols-5">
            <Card className="grow col-span-5 md:col-span-3 ">
                <div class="prose p-8">
                    {@html organization.homepage?.presentation || "Välkommen!"}
                    <!-- <a href="">Läs mer</a> -->
                </div>    
            </Card>
        
            <Card className="flex flex-col gap-4 col-span-5 md:col-span-2">
                <h3 class="text-bold text-lg px-8 mt-8">{organization.name}</h3>
                <div class="text-gray-500 px-8">{organization.address} {organization.city}</div>
                <div class="flex flex-col gap-4 my-8 mx-8">
                    {#each organization.homepage?.links as link}
                        <Link href="{link.url}" type="{link.type}"></Link>
                    {/each}
                </div>
                <Gallery imageSrcs={organization.homepage?.pics || []}></Gallery>
                {#if organization.hasBooking && organization.homepage?.showPlaces}
                    <div class="flex flex-col gap-4  p-8 " id="places">
                        {#each organization.places as place} 
                            <KdItem>
                                <span slot="title">
                                    {place.name} <small class="text-gray-500">{place.address}</small>
                                </span>
                                
                                <span slot="action">
                                    <KdLinkButton size={Size.SM} variant={Variant.OUTLINE} href="">Sök tid</KdLinkButton>
                                </span>
                            </KdItem>
                        {/each}
                    </div>
                {/if}
                
            </Card>
        </div>
    </div>
    <div class="mx-auto max-w-screen-lg mt-8 ">
        <Reviews reviews={organization.reviews}></Reviews>
    </div>
    <div class="max-w-screen-lg mx-auto grid grid-cols-2 gap-8 mt-8 ">
        {#if organization.homepage?.showUs}
            <Card className="flex flex-col gap-5  p-5 col-span-2 md:col-span-1 md:max-h-screen overflow-scroll" id="hosts">
                <a class="text-sm uppercase text-gray-500 font-semibold">Personal</a>
                <Hosts hosts={organization.hosts}></Hosts>
            </Card>
        {/if}
        {#if organization.hasBooking}
            <Card className="flex flex-col gap-5 p-5 md:max-h-screen overflow-scroll col-span-2 md:col-span-1 " id="booking-types">
                <!-- <a class="text-sm uppercase text-gray-500 font-semibold">Tjänster</a> -->
                <BookingTypes bookingTypes={organization.bookingTypes}></BookingTypes>
            </Card>
        {/if}
    </div>
</div>

<!-- <footer class="bg-gray-200">
    <div class="max-w-screen-lg mx-auto py-8">
        Kaddio
    </div>
</footer> -->
<style>
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgb(255,255,255);
background: linear-gradient(180deg in oklab, rgba(255,255,255,0) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,.05) 70%, rgba(0,0,0,0.5567620798319328) 100%);
}
</style>

<FooterMarketplace></FooterMarketplace>