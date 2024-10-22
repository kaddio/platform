<script lang="ts">
	import { setContext } from "svelte";
	setContext('lang', 'es');

	import LoginSection from "$components/loginSection.svelte";
</script>

<svelte:head>
	<title>Kaddio - Iniciar sesión</title>
	<meta name="description" content="Iniciar sesión" />
</svelte:head>

<LoginSection />