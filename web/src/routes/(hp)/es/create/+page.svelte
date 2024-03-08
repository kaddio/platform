<script lang="ts">	
	import { setContext } from 'svelte';
	import Footer from '$components/footer.svelte';
	import CreateAccount from '$components/createAccount.svelte';
	import Nav from '$components/nav.svelte';
    import { hrefLangAlternates } from '$lib/stores';
	
	setContext('lang', 'es');

</script>

<svelte:head>
	{@html hrefLangAlternates('create')}

	<title>Kaddio - Crear una cuenta</title>
	<meta name="description" content="Crear una cuenta" />
</svelte:head>

<Nav />
<CreateAccount />
<Footer />
