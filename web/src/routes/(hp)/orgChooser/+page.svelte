<script lang="ts">
	import { page } from "$app/stores";
	import OrgChooserSection from "$components/org-chooser-section.svelte";
	import { setContext } from "svelte";
	setContext('lang', 'sv');


</script>

<svelte:head>
    <meta name="robots" content="noindex">
</svelte:head>

<OrgChooserSection />