<script lang="ts">	
	import { setContext } from 'svelte';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';
    import { _ } from '$lib/stores';
    import ThankYou from '$components/thankYou.svelte';

	setContext('lang', 'es');
	
</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

<Nav />

<ThankYou>
	<span slot="title">
		¡Gracias!
	</span>

	<span slot="p">
		La cuenta está creada, revisa tu correo electrónico para iniciar sesión
	</span>
</ThankYou>

<Footer />
