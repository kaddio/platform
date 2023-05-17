<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { token } from '../../../stores.js';

    export let data;

    if(data.referrerData){
        let token = $token;
        token = data.referrerData;
    }

    if(browser){
        goto('/sv')
    }

</script>
