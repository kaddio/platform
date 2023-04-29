<script lang="ts">	
	import Header from '../headerSv.svelte';
	import { setContext } from 'svelte';
	import Footer from '../footerSv.svelte';
	import CreateAccount from '../../components/createAccount.svelte';
	
	setContext('lang', 'sv');

</script>

<svelte:head>
	<title>Kaddio - skapa konto</title>
	<meta name="description" content="Skapa konto" />
</svelte:head>

<Header />
<CreateAccount />
<Footer />
