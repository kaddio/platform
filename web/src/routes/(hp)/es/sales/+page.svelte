<script lang="ts">	
	import { setContext } from 'svelte';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';
    import ContactDanielEs from '../contactDanielEs.svelte';
	
	setContext('lang', 'es');

</script>

<svelte:head>
	<title>
        Curioso sobre Kaddio?
    </title>
</svelte:head>

<Nav />

<ContactDanielEs />

<Footer />