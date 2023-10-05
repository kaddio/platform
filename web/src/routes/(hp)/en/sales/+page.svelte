<script lang="ts">	
	import { setContext } from 'svelte';
	import Footer from '$components/footer.svelte';
	import Nav from '$components/nav.svelte';
    import ContactDanielEn from '../contactDanielEn.svelte';
	
	setContext('lang', 'en');

</script>

<svelte:head>
	<title>
        Curious about Kaddio?
    </title>
</svelte:head>

<Nav />

<ContactDanielEn />

<Footer />