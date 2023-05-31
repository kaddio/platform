<script lang="ts">
	import LoginFullSection from "$components/loginFullSection.svelte";
	import { setContext } from "svelte";
	setContext('lang', 'sv');


</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

<LoginFullSection />