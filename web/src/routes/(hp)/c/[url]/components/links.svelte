<script lang="ts">
    export let links: Record<string, string>;

    const stripProtocol = (href: string) => href.replace(/^(https?:\/\/)?(www\.)?/, '');
</script>

{#if links.facebook}
    <a href={links.facebook} class="inline-flex gap-7 items-center">
        <i class="fa-fw fa-brands fa-facebook text-teal-600 fa-lg" /><span
            class="text-teal-400 font-semibold">{stripProtocol(links.facebook)}</span
        >
    </a>
{/if}
{#if links.instagram}
    <a href={links.instagram} class="inline-flex gap-7 items-center">
        <i class="fa-fw fa-brands fa-instagram text-teal-600 fa-lg" /><span
            class="text-teal-400 font-semibold">{stripProtocol(links.instagram)}</span
        >
    </a>
{/if}
{#if links.linkedin}
    <a href={links.linkedin} class="inline-flex gap-7 items-center">
        <i class="fa-fw fa-brands fa-linked text-teal-600 fa-lg" /><span
            class="text-teal-400 font-semibold">{stripProtocol(links.linkedin)}</span
        >
    </a>
{/if}
{#if links.external}
    <a href={links.external} class="inline-flex gap-7 items-center">
        <i class="fa-fw fa fa-globe text-teal-600 fa-lg" /><span class="text-teal-400 font-semibold"
            >{stripProtocol(links.external)}</span
        >
    </a>
{/if}
