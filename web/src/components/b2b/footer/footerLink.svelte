<script lang="ts">
    export let href: string;
</script>

<li>
    <a href={href}>
        <slot></slot>
    </a>
</li>