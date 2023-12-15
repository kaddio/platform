<script lang="ts">
    export let url: string;
    export let type: string;
    export let title: string;
    export let description: string;
    export let image: string;
</script>

<svelte:head>
    <!-- Facebook Meta Tags -->
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta
        property="og:title"
        content={title}
    />
    <meta
        property="og:description"
        content={description}
    />
    <meta property="og:image" content={image} />

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
    <meta name="twitter:image" content={image} />

</svelte:head>
