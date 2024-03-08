<script lang="ts">	
	import { setContext } from 'svelte';
	import Footer from '$components/footer.svelte';
	import CreateAccount from '$components/createAccount.svelte';
	import Nav from '$components/nav.svelte';
    import { hrefLangAlternates } from '$lib/stores';
	
	setContext('lang', 'en');

</script>

<svelte:head>
	{@html hrefLangAlternates('create', 'en')}

	<title>Kaddio - skapa konto</title>
	<meta name="description" content="Skapa konto" />
</svelte:head>

<Nav />
<CreateAccount />
<Footer />
