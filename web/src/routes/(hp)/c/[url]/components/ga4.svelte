<script lang="ts">
    export let trackerId: string;

    import { onMount } from 'svelte';

    onMount(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${trackerId}`;
        document.head.appendChild(script);

        let scriptConfig = { debug_mode: false, cookie_expires: 0 };
        if (window.location.hostname !== 'localhost') {
            scriptConfig.cookie_domain = `${orgUrl}.kaddio.com`;
        }

        let scriptContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('set', 'allow_google_signals', false);
        gtag('set', 'send_page_view', true);
        gtag('config', '${trackerId}', ${JSON.stringify(scriptConfig)});
        `;
    });
</script>
