<script lang="ts">
	import { setContext } from "svelte";
	setContext('lang', 'en');

	import LoginSection from "$components/loginSection.svelte";
    import { hrefLangAlternates } from "$lib/stores";

</script>

<svelte:head>
	{@html hrefLangAlternates('sign-in')}
	<title>Kaddio - Login</title>
	<meta name="description" content="Login to Kaddio" />
</svelte:head>

<LoginSection />