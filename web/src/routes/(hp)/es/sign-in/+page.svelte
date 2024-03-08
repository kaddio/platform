<script lang="ts">
	import { setContext } from "svelte";
	setContext('lang', 'es');

	import LoginSection from "$components/loginSection.svelte";
    import { hrefLangAlternates } from "$lib/stores";

</script>

<svelte:head>
	  {@html hrefLangAlternates('sign-in', 'es')}

	<title>Kaddio - Logga in</title>
	<meta name="description" content="Logga in i Kaddio" />
</svelte:head>

<LoginSection />