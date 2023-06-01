<script lang="ts">
    enum LinkType {
        INSTAGRAM = "instagram",
        FACEBOOK = "facebook",
        EXTERNAL = 'external',
    }
    const iconMap = {
        [LinkType.INSTAGRAM]: "fa-brands fa-instagram",
        [LinkType.FACEBOOK]: "fa-brands fa-facebook",
        [LinkType.EXTERNAL]: "fa fa-globe",
    }
    export let href: string; 
    export let type: LinkType
</script>

<a href={href} class="inline-flex gap-7 items-center">
    <i class="{iconMap[type]} text-teal-600 fa-lg"></i><span class="text-teal-400 font-semibold">{href}</span>
</a>