<script lang="ts">
	import { setContext } from "svelte";
	setContext('lang', 'es');

	import LoginSection from "$components/loginSection.svelte";

</script>

<svelte:head>
	<title>Kaddio - Logga in</title>
	<meta name="description" content="Logga in i Kaddio" />
</svelte:head>

<LoginSection />