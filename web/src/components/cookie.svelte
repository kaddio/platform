<script lang="ts">
	import { _ } from "$lib/stores";
    import { onMount } from "svelte";

    onMount(() => {
        const gtmId = 'GTM-PM82HWFT';
        
        function gtag(){
            window.dataLayer.push(arguments);
        }
        
        window.dataLayer = window.dataLayer || [];

        gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied'
        });        

        gtag('js', new Date());
        gtag('config', gtmId);
        var s = document.createElement('script');
        s.defer = true;
        s.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
        document.head.append(s);
    });
        
</script>

