<script>
	import Footer from "$components/footer.svelte";
	import Nav from "$components/nav.svelte";
	import { setContext } from "svelte";

    setContext('lang', 'en');

</script>

<Nav />

<slot />

<Footer />