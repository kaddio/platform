<script lang="ts">
	// import { getContext } from "svelte/types/runtime/internal/lifecycle";

    type Lang = 'sv' | 'es' | 'en';
    export let lang: Lang;
    // const selectedLang = getContext('lang');
    const selectedLang = 'sv'
</script>

{#if lang==selectedLang}
    <slot></slot>
{/if}