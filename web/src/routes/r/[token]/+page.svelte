<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { token } from '$lib/stores.js';

    export let data;

    if(Object.keys(data.referrerData).length > 0){
        let token = $token;
        token = data.referrerData;
    }

    if(browser){
        goto('/sv')
    }

</script>
