<script lang="ts">
    import Card from '../../../../components/card.svelte';
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';
    import 'dayjs/locale/sv';
    import KdItem from '../../../../components/kdItem.svelte';

    import Gallery from './components/gallery.svelte';
    import BookingTypes from './components/booking_types.svelte';
    import Hosts from './components/hosts.svelte';
    import Link from './components/link.svelte';
    import KdLinkButton from '../../../../components/kdLinkButton.svelte';

    import { page } from '$app/stores';

    import { onDestroy, onMount, setContext } from 'svelte';
    import Reviews from './components/reviews.svelte';
    import FooterMarketplace from '../../../../components/footerMarketplace.svelte';
    import { imageHandler } from '../../../../lib/img';
    import Map from '../../../../components/map.svelte';
    export let data;
    dayjs.locale('sv');
    dayjs.extend(relativeTime);
    const organization = data.organization;

    setContext('lang', 'sv');

    let showBackButton = !!$page.url.searchParams.get('backbutton');
    onMount(() => {
        const r = document.querySelector(':root');
        organization.cssVars.forEach((c) => {
            r.style.setProperty(`${c.name}`, c.value);
        });
    });
    onDestroy(() => {
        if (typeof document === 'undefined') return;
        const r = document.querySelector(':root');
        organization.cssVars.forEach((c) => {
            r.style.removeProperty(`${c.name}`);
        });
    });

    const addresses = [
        `${organization.address} ${organization.city}`,
        ...organization.places.map((p) => `${p.address} ${p.city}`)
    ];
</script>

<svelte:head>
    <meta name="robots" content="noindex" />
    <!--keywords for search engines-->
    <meta name="keywords" content={organization.keywords?.join(', ')} />
    <title>{organization.name} - {organization.keywords?.join(', ')} - {organization.city}</title>
    <meta
        name="description"
        content="{organization.name} - {organization.keywords?.join(', ')} - {organization.city}"
    />
</svelte:head>

<div class="w-screen h-full bg-gray-100 pb-8">
    <div
        class="w-full h-60 sm:h-72 md:h-80 lg:h-96 relative p-8"
        style="background-image: url({imageHandler(organization.homepage?.headerImg, {
            format: 'auto',
            width: 1280
        })}); background-size: cover; background-position: center; "
    >
        <div class="overlay" />
        <div class="max-w-screen-lg mx-auto mx-auto relative h-full">
            <div class="flex justify-between w-full">
                <div class="flex gap-5">
                    <a href="/sv/hitta-klinik">
                        <img src="/img/kaddio-logo.png" alt="" class="h-7" />
                    </a>
                    {#if showBackButton}
                        <a href="javascript:history.back()" class="text-white text-lg"
                            ><i class="fa fa-arrow-left" /> Tillbaka till sökresultat
                        </a>
                    {/if}
                </div>

                <KdLinkButton
                    variant="light"
                    color="default"
                    href="https://{organization.url}.kaddio.com/login">Logga in</KdLinkButton
                >
            </div>

            <div class="flex justify-between w-full">
                <h1 class="text-white absolute bottom-4 text-3xl">
                    {organization.name}
                </h1>

                {#if organization.showBooking}
                    <div class="absolute bottom-4 right-0">
                        <KdLinkButton
                            variant="flat"
                            color="theme-primary"
                            size="xl"
                            href="https://{organization.url}.kaddio.com/booking"
                            >Sök tid</KdLinkButton
                        >
                    </div>
                {/if}
            </div>
        </div>
    </div>
    <div class="">
        {#if organization.showBooking}
            <div class="bg-white">
                <div class="max-w-screen-lg mx-auto flex flex-row gap-7 w-full p-6">
                    {#if organization.homepage?.showPlaces && organization.hasPlaces}
                        <a class="text-sm uppercase text-gray-500 font-semibold" href="#places"
                            >Platser</a
                        >
                    {/if}
                    <a class="text-sm uppercase text-gray-500 font-semibold" href="#booking-types"
                        >Behandlingar</a
                    >
                    {#if organization.homepage?.showUs}
                        <a class="text-sm uppercase text-gray-500 font-semibold" href="#hosts"
                            >Personal</a
                        >
                    {/if}
                    {#if organization.useReviews}
                        <a class="text-sm uppercase text-gray-500 font-semibold" href="#reviews">
                            Omdömen
                            <span class="text-gray-800"
                                >{organization.stars && organization.stars.toFixed(1)}</span
                            >
                            <i class="fa fa-star text-yellow-500" />
                        </a>
                    {/if}
                </div>
            </div>
        {/if}
        <div class="gap-8 mt-8 max-w-screen-lg mx-auto grid grid-cols-5">
            <Card className="grow col-span-5 md:col-span-3 ">
                <div class="prose p-8">
                    {@html organization.homepage?.presentation || 'Välkommen!'}
                    <!-- <a href="">Läs mer</a> -->
                </div>
            </Card>

            <Card className="flex flex-col gap-4 col-span-5 md:col-span-2">
                <h2 class="text-bold text-lg px-8 mt-8">{organization.name}</h2>

                {#if organization.homepage?.links.length}
                    <div class="flex flex-col gap-4 my-8 mx-8">
                        {#each organization.homepage?.links as link}
                            <Link href={link.url} type={link.type} />
                        {/each}
                    </div>
                {/if}
                {#if organization.hasContactForm}
                    <KdLinkButton
                        href="https://{organization.url}.kaddio.com/contact-us"
                        color="theme-primary"
                        class="m-8"
                        variant="flat">Kontakta oss</KdLinkButton
                    >
                {/if}
                <Gallery imageSrcs={organization.homepage?.pics || []} />
                <Map {addresses} />
                {#if organization.showBooking && organization.homepage?.showPlaces}
                    <div
                        class="flex flex-col gap-4 p-8 md:max-h-screen overflow-scroll"
                        id="places"
                    >
                        {#each organization.places as place}
                            <KdItem>
                                <span slot="title">
                                    {place.name}
                                    <small class="text-gray-500">{place.address}</small>
                                </span>

                                <span slot="action">
                                    <KdLinkButton
                                        size="sm"
                                        variant="outline"
                                        href="https://{organization.url}.kaddio.com/booking/{place.name.toLowerCase()}"
                                        >Sök tid</KdLinkButton
                                    >
                                </span>
                            </KdItem>
                        {/each}
                    </div>
                {/if}
                {#if !organization.hasPlaces}
                    <div
                        class="text-gray-500 px-8 mb-8"
                        itemscope
                        itemtype="http://schema.org/PostalAddress"
                    >
                        <span itemprop="streetAddress">{organization.address || ''}</span>
                        <span itemprop="addressLocality">{organization.city || ''}</span>
                    </div>
                {/if}
            </Card>
        </div>
    </div>
    {#if organization.useReviews}
        <div class="mx-auto max-w-screen-lg mt-8" id="reviews">
            <Reviews
                reviews={organization.reviews}
                histogram={organization.starsHistogram}
                reviewCount={organization.reviewCount}
                stars={organization.stars}
            />
        </div>
    {/if}

    <div class="max-w-screen-lg mx-auto grid grid-cols-2 gap-8 mt-8">
        {#if organization.homepage?.showUs}
            <Card
                className="flex flex-col gap-5  p-5 col-span-2 md:col-span-1 md:max-h-screen overflow-scroll"
                id="hosts"
            >
                <a class="text-sm uppercase text-gray-500 font-semibold">Personal</a>
                <Hosts hosts={organization.hosts} />
            </Card>
        {/if}
        {#if organization.showBooking}
            <Card
                className="flex flex-col gap-5 p-5 md:max-h-screen overflow-scroll col-span-2 md:col-span-1 "
                id="booking-types"
            >
                <BookingTypes bookingTypes={organization.bookingTypes} />
            </Card>
        {/if}
    </div>
</div>

<FooterMarketplace />

<style>
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgb(255, 255, 255);
        /* mix-blend-mode: multiply; */
        background: linear-gradient(
            180deg in oklab,
            rgba(0, 0, 0, 0.5567620798319328) 0%,
            rgba(0, 0, 0, 0.1) 3rem,
            rgba(0, 0, 0, 0) 5rem,
            rgba(0, 0, 0, 0) 60%,
            rgba(0, 0, 0, 0.05) 70%,
            rgba(0, 0, 0, 0.5567620798319328) 100%
        );
    }
</style>
