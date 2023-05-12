<script lang="ts">	
	import { setContext } from 'svelte';
	import Footer from '../../components/footer.svelte';
	import CreateAccount from '../../components/createAccount.svelte';
	import Nav from '../../components/nav.svelte';
	
	setContext('lang', 'es');

</script>

<svelte:head>
	<title>Kaddio - Crear una cuenta</title>
	<meta name="description" content="Crear una cuenta" />
</svelte:head>

<Nav />
<CreateAccount />
<Footer />
