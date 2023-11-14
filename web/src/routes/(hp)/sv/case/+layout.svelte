<script>
    import Footer from '$components/footer.svelte';
    import Nav from '$components/nav.svelte';
    import { setContext } from 'svelte';
    import ContactDanielSv from '../contactDanielSv.svelte';

    setContext('lang', 'sv');
</script>

<Nav />

<slot />

<ContactDanielSv />

<Footer />
