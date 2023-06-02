<script lang="ts">
	import { page } from "$app/stores";
	import { setContext } from "svelte";
	setContext('lang', 'sv');


</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

Hej här är dina organisationer: 

{#each $page.data.orgs as org}

	<a href=https://{org.url}.kaddio.com>{org.name} ({org.url})</a>
	
{/each}
