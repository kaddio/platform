<script lang="ts">
    enum LinkType {
        INSTAGRAM = "instagram",
        FACEBOOK = "facebook",
        EXTERNAL = 'external',
    }
    const iconMap = {
        [LinkType.INSTAGRAM]: "fa fa-instagram",
        [LinkType.FACEBOOK]: "fa fa-facebook",
        [LinkType.EXTERNAL]: "fa fa-globe",
    }
    export let href: string; 
    export let type: LinkType
</script>

<a href={href} class="inline-flex gap-7">
    <i class="{iconMap[type]}"></i>
</a>