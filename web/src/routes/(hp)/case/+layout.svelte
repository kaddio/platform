<script>
    import Footer from '$components/footer.svelte';
    import Nav from '$components/nav.svelte';
    import { setContext } from 'svelte';
    import ContactDanielEn from '../en/contactDanielEn.svelte';

    setContext('lang', 'en');
    setContext('hideLangBanner', true);
</script>

<Nav />

<slot />

<ContactDanielEn />

<Footer />
