<script>
    import Footer from '$components/footer.svelte';
    import Nav from '$components/nav.svelte';
    import { setContext } from 'svelte';
    import ContactDanielEn from '$components/contactDanielEn.svelte';

    setContext('lang', 'en');
</script>

<Nav />

<slot />

<ContactDanielEn />

<Footer />
