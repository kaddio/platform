<script lang="ts">
    export let links: Record<string, string>;
</script>

{#if links.telephone}
    <a href="tel:{links.telephone}" class="inline-flex gap-7 items-center">
        <i class="fa fa-fw fa-phone text-teal-600 fa-lg" /><span class="text-teal-400 font-semibold"
            >{links.telephone}</span
        >
    </a>
{/if}
{#if links.email}
    <a href="mailto:{links.email}" class="inline-flex gap-7 items-center">
        <i class="fa fa-fw fa-envelope text-teal-600 fa-lg" /><span
            class="text-teal-400 font-semibold">{links.email}</span
        >
    </a>
{/if}
