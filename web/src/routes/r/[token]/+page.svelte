<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { token } from '$lib/stores.js';

    export let data;

    if(Object.keys(data.referrerData).length > 0){
        $token = data.referrerData;
    }

    const langFromReferrerString = data.referrerData.lang ? `/${data.referrerData.lang}` : '';

    if(browser){
        goto(langFromReferrerString || '/sv')
    }

</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>
