<script lang="ts">
	import { setContext } from 'svelte';
	import Footer from '../../components/footer.svelte';
	import Nav from '../../components/nav.svelte';
	setContext('lang', 'es');
</script>

<Nav />

<slot />

<Footer />
