<script lang="ts">
    // https://developers.facebook.com/blog/post/2013/06/05/platform-updates--new-open-graph-business-object-type/

    import { page } from "$app/stores";
    import { countryCodeFromLang } from "$lib/regions";

    export let url: string = $page.url.href;
    export let type: string;
    export let title: string;
    export let description: string;
    export let keywords: string;
    export let images: Array<string>;
    export let phone: string = '';
    export let latitude: string = "";
    export let longitude: string = "";
    export let streetAddress: string = '';
    export let locality: string = '';
    export let country: string = '';
    export let postalCode: string = '';

    export const lang = 'sv';

    const locale = `${lang}_${countryCodeFromLang(lang)}`;

</script>

<svelte:head>
    <meta name="description" content={description} />

    {#if keywords}
        <meta name="keywords" content={keywords} />
    {/if}
    
    {#if title}
        <title>{title}</title>
    {/if}

    <!-- Facebook Meta Tags -->
    <meta property="og:site_name" content="Kaddio" />
    <meta property="og:locale" content="{locale}" />

    {#if url}
        <meta property="og:url" content={url} />
    {/if}

    <meta property="og:type" content={type} />
    <meta
        property="og:title"
        content={title}
    />
    <meta
        property="og:description"
        content={description}
    />

    {#if latitude && longitude}
        <meta property="place:location:latitude" content={latitude} />
        <meta property="place:location:longitute" content={longitude} />
    {/if}

    {#if streetAddress}
        <meta property="business:contact_data:street_address" content={streetAddress} />
    {/if}

    {#if phone}
        <meta property="business:contact_data:phone_number" content={phone} />
    {/if}

    {#if locality}
        <meta property="business:contact_data:locality" content={locality} />
    {/if}

    {#if country}
        <meta property="business:contact_data:country" content={country} />
    {/if}

    {#if postalCode}
        <meta property="business:contact_data:postal_code" content={postalCode} />
    {/if}

    {#each images as imageSrc}
        <meta property="og:image" content={imageSrc} />
    {/each}

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="kaddio.com" />
    <meta property="twitter:url" content="https://kaddio.com" />
    <meta
        name="twitter:title"
        content={title}
    />
    <meta
        name="twitter:description"
        content={description}
    />

    {#each images as imageSrc}
        <meta name="twitter:image" content={imageSrc} />
    {/each}

</svelte:head>
