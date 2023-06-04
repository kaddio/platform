<script lang="ts">
	import { page } from "$app/stores";
	import { setContext } from "svelte";
	setContext('lang', 'sv');

</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>


<a href={$page.data.sameUnitUrl}>Mobile bankid on same unit</a>

<a href={$page.data.otherUnitUrl}>Mobile bankid on other unit (qr)</a>