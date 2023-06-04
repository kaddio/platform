<script lang="ts">
	import { invalidate } from "$app/navigation";
	import { page } from "$app/stores";
	import Qr from "$components/qr.svelte";
	import { onMount, setContext } from "svelte";
	setContext('lang', 'sv');

	onMount(() => {
		const interval = setInterval(() => {
			invalidate('app:bankid')
		}, 1000);
	});

</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

{$page.data.qr}

<Qr str={$page.data?.qr} />