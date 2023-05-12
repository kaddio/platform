<script lang="ts">
	import { getContext } from "svelte";

    type Lang = 'sv' | 'es' | 'en';
    export let lang: Lang;
    const selectedLang = getContext('lang');
</script>

{#if lang==selectedLang}
    <slot></slot>
{/if}