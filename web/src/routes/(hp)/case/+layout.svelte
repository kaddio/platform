<script>
	import Footer from "$components/footer.svelte";
	import Nav from "$components/nav.svelte";
	import { setContext } from "svelte";

    setContext('lang', 'en');
	setContext('hideLangBanner', true);

</script>

<Nav />

<slot />

<Footer />