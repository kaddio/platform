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
    import Links from './components/links.svelte';
    import KdLinkButton from '../../../../components/kdLinkButton.svelte';

    import { page } from '$app/stores';

    import { onDestroy, onMount, setContext } from 'svelte';
    import Reviews from './components/reviews.svelte';
    import FooterMarketplace from '../../../../components/footerMarketplace.svelte';
    import { imageHandler } from '../../../../lib/img';
    import Map from '../../../../components/map.svelte';
    import Seo from '$components/seo.svelte';
    import LdTag from '$lib/components/LDTag.svelte';
    import { localBusinessSchema } from '$lib/json-ld';
    import { redirect } from '@sveltejs/kit';
    import FooterDiscrete from '../../../../components/footerDiscrete.svelte';
    import { utmSource } from '$lib/utm-source';
    import { kaddioOrgUrl } from '$lib/apiUrl';
    export let data;
    dayjs.locale('sv');
    dayjs.extend(relativeTime);
    const organization = data.organization;

    setContext('lang', 'sv');

    const back = () => {
        if (window.sessionStorage.getItem('searchUrl')) {
            window.location = window.sessionStorage.getItem('searchUrl');
            return;
        }
        window.location = '/sv/hitta-klinik';
    };
    let hasBackButton = false;
    onMount(() => {
        if (window.sessionStorage && window.sessionStorage.getItem('searchUrl')) {
            hasBackButton = true;
        }
    });
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
        `${organization.address}, ${organization.city}`,
        ...organization.places.map((p) => `${p.address}, ${p.city}`)
    ];

    const imagesFromImageHandler = organization.homepage?.pics.map((p) =>
        imageHandler(p, {
            format: 'auto',
            width: 1280
        })
    );

    function removeStyleAttributesWithRegex(html) {
        // Use a regular expression to remove style attributes
        return html.replace(/style\s*=\s*["'][^"']*["']/gi, '');
    }
    let description =
        organization.homepage?.metaDescription ||
        `${organization.name} - ${organization.keywords?.join(', ')} - ${organization.city}`;

    const titleFromOrg = function (org): string {
        const cityStr = org.city ? `, ${org.city}` : '';

        return `${org.name}${cityStr} - Kaddio`;
    };
</script>

<LdTag schema={localBusinessSchema(organization)} />
<Seo
    url={`https://kaddio.com/c/${organization.url}`}
    type="business.business"
    keywords={organization.keywords?.join(', ')}
    title={titleFromOrg(organization)}
    {description}
    locality={organization.city}
    images={imagesFromImageHandler}
    streetAddress={organization.address}
/>

<svelte:head>
    <title>{titleFromOrg(organization)}</title>
    <link rel="canonical" href="https://kaddio.com/c/{organization.url}" />
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
                    <a on:click={() => back()} href class="flex gap-5">
                        {#if hasBackButton}
                            <i class="fa fa-arrow-left text-white text-xl" />
                        {/if}
                        <img src="/img/kaddio-logo.png" alt="Kaddio logotype" class="h-7" />
                    </a>
                </div>

                <KdLinkButton
                    variant="light"
                    color="default"
                    rel="nofollow"
                    href="https://{organization.url}.kaddio.com/dashboard">Logga in</KdLinkButton
                >
            </div>

            <div class="flex justify-between w-full">
                <h1 class="text-white absolute bottom-0 md:bottom-4 text-xl md:text-3xl">
                    {organization.name}
                </h1>
            </div>
        </div>
    </div>
    <div class="">
        {#if organization.showBooking}
            <div class="bg-white">
                <div
                    class="max-w-screen-lg mx-auto flex flex-row gap-7 w-full p-6 flex-wrap justify-between"
                >
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

                            <span class=" rounded-full border border-gray-300 px-2 py-1 ml-2"
                                >{organization.stars && organization.stars.toFixed(1)}<i
                                    class="fa fa-star text-yellow-500"
                                /></span
                            >
                        </a>
                    {/if}
                    <div class="grow" />
                    {#if organization.showBooking}
                        <div class="">
                            <KdLinkButton
                                variant="flat"
                                color="theme-primary"
                                size="md"
                                href="{kaddioOrgUrl(
                                    organization.url
                                )}/booking/cal?utm_source={utmSource($page.url)}"
                                >Boka tid</KdLinkButton
                            >
                        </div>
                    {/if}
                </div>
            </div>
        {/if}
        <div class="gap-8 mt-8 max-w-screen-lg mx-auto grid grid-cols-5">
            <div class="grow col-span-5 md:col-span-3">
                <Card className=" ">
                    <div class="prose p-8">
                        {@html removeStyleAttributesWithRegex(
                            organization.homepage?.presentation || 'Välkommen!'
                        )}
                        <!-- <a href="">Läs mer</a> -->
                    </div>
                </Card>
            </div>

            <Card className="flex flex-col gap-4 col-span-5 md:col-span-2">
                {#if organization.logo}
                    <img
                        src={imageHandler(organization.logo, {
                            format: 'auto',
                            width: 200
                        })}
                        alt={organization.name}
                        class="h-12 md:h-16 lg:h-20 object-contain mt-8"
                    />
                {:else}
                    <h2 class="text-bold text-lg px-8 mt-8">{organization.name}</h2>
                {/if}

                {#if organization.homepage?.links.length}
                    <div class="flex flex-col gap-4 my-8 mx-8">
                        <Links links={organization.homepage} />
                        {#each organization.homepage?.links as link}
                            <Link href={link.url} type={link.type} label={link.label} />
                        {/each}
                    </div>
                {/if}
                {#if organization.hasContactForm}
                    <KdLinkButton
                        href="https://{organization.url}.kaddio.com/contact-us?utm_source={utmSource(
                            $page.url
                        )}"
                        color="theme-primary"
                        class="m-8"
                        variant="flat">Kontakta oss</KdLinkButton
                    >
                {/if}
                <Gallery imageSrcs={organization.homepage?.pics || []} />
                <!-- {#if !organization.hasPlaces}
                    <div class="p-8">
                        <small class="text-gray-700">{organization.address}</small>
                        <small class="text-gray-700">{organization.city}</small>
                    </div>
                {/if} -->

                {#if organization.homepage?.showPlaces}
                    <div
                        class="flex flex-col gap-4 p-8 md:max-h-screen overflow-scroll"
                        id="places"
                    >
                        {#each organization.places as place}
                            <KdItem>
                                <span slot="title">
                                    {place.name || ''}
                                    <small class="text-gray-500">{place.address || ''}</small>
                                </span>

                                <span slot="action">
                                    {#if organization.showBooking}
                                        <KdLinkButton
                                            size="sm"
                                            variant="outline"
                                            href="https://{organization.url}.kaddio.com/booking/cal/{place.name.toLowerCase()}?selectonly=1&utm_source={utmSource(
                                                $page.url
                                            )}">Sök tid</KdLinkButton
                                        >
                                    {/if}
                                </span>
                            </KdItem>
                        {/each}
                    </div>
                {/if}
                {#if !organization.hasPlaces}
                    <div
                        class="text-gray-500 px-8 py-4"
                        itemscope
                        itemtype="http://schema.org/PostalAddress"
                    >
                        <span itemprop="streetAddress">{organization.address || ''}</span>
                        <span itemprop="addressLocality">{organization.city || ''}</span>
                    </div>
                {/if}
                {#if organization.homepage?.showMap}
                    {#if organization.geoPoint.coordinates && organization.geoPoint.coordinates.length > 0 && organization.geoPoint.coordinates[0].length > 0 && organization.geoPoint.coordinates[0][0] > 0}
                        <Map {addresses} points={organization.geoPoint.coordinates} />
                    {/if}
                {/if}
            </Card>
        </div>
    </div>

    <div class="max-w-screen-lg mx-auto grid grid-cols-2 gap-8 mt-8">
        {#if organization.homepage?.showUs}
            <Card
                className="flex flex-col gap-5  p-5 col-span-2 md:col-span-1 md:max-h-screen overflow-scroll"
                id="hosts"
            >
                <a class="text-sm uppercase text-gray-500 font-semibold">Personal</a>
                <Hosts
                    hosts={organization.hosts}
                    bookingFilterOnHost={organization.bookingFilterOnHost}
                />
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
    <div class="max-w-screen-lg mx-auto grid grid-cols-2 gap-8 mt-8">
        {#if organization.useReviews}
            <div id="reviews" class="mt-8 col-span-2">
                <Reviews
                    reviews={organization.reviews}
                    histogram={organization.starsHistogram}
                    reviewCount={organization.reviewCount}
                    stars={organization.stars}
                    orgUrl={organization.url}
                />
            </div>
        {/if}
    </div>
</div>
{#if hasBackButton}
    <FooterMarketplace />
{:else}
    <FooterDiscrete />
{/if}

<style>
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgb(255, 255, 255, 0);
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
