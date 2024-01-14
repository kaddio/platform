<script lang="ts">
    enum LinkType {
        INSTAGRAM = 'instagram',
        FACEBOOK = 'facebook',
        EXTERNAL = 'external',
        LINKEDIN = 'linkedin',
        TELEPHONE = 'telephone',
        MAIL = 'mail'
    }
    const iconMap = {
        [LinkType.INSTAGRAM]: 'fa-brands fa-fw fa-instagram',
        [LinkType.FACEBOOK]: 'fa-brands fa-fw fa-facebook',
        [LinkType.LINKEDIN]: 'fa-brands fa-fw fa-linked-in',
        [LinkType.EXTERNAL]: 'fa fa-fw fa-globe',
        [LinkType.MAIL]: 'fa fa-fw fa-envelope',
        [LinkType.TELEPHONE]: 'fa fa-fw fa-phone'
    };
    export let href: string;
    export let type: LinkType;

    let hrefVisible: string;
    let hrefComputed: string;

    $: {
        switch (type) {
            case LinkType.INSTAGRAM:
            case LinkType.FACEBOOK:
            case LinkType.EXTERNAL:
                hrefVisible = href.replace(/^(https?:\/\/)?(www\.)?/, '');
                hrefComputed = href;
                break;
            case LinkType.TELEPHONE:
                hrefComputed = `tel:${href}`;
                hrefVisible = href;
                break;
            case LinkType.MAIL:
                href = `mailto:${href}`;
                hrefVisible = href;
                break;
        }
    }
</script>

{#if href}
    <a href={hrefComputed} class="inline-flex gap-7 items-center">
        <i class="{iconMap[type]} text-teal-600 fa-lg" /><span class="text-teal-400 font-semibold"
            >{hrefVisible}</span
        >
    </a>
{/if}
