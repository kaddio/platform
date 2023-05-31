<script lang="ts">
	import { setContext } from "svelte";
	setContext('lang', 'en');

	import LoginSection from "$components/loginSection.svelte";

</script>

<svelte:head>
	<title>Kaddio - Login</title>
	<meta name="description" content="Login to Kaddio" />
</svelte:head>

<LoginSection />