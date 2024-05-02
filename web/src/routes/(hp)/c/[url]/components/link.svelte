<script lang="ts">
    enum LinkType {
        INSTAGRAM = 'instagram',
        FACEBOOK = 'facebook',
        EXTERNAL = 'external',
        LINKEDIN = 'linkedin'
    }
    const iconMap = {
        [LinkType.INSTAGRAM]: 'fa-brands fa-fw fa-instagram',
        [LinkType.FACEBOOK]: 'fa-brands fa-fw fa-facebook',
        [LinkType.LINKEDIN]: 'fa-brands fa-fw fa-linkedin-in',
        [LinkType.EXTERNAL]: 'fa fa-fw fa-globe'
    };
    export let href: string;
    export let label: string;
    export let type: LinkType;

    const stripProtocol = (href?: string) => href?.replace(/^(https?:\/\/)?(www\.)?/, '') || '';
</script>

{#if href}
    <a {href} class="inline-flex gap-7 items-center" rel="ugc, nofollow">
        <i class="{iconMap[type]} text-teal-600 fa-lg" /><span class="text-teal-400 font-semibold"
            >{label || stripProtocol(href)}</span
        >
    </a>
{/if}
