<script lang="ts">
    export let iconClass: string;
    export let href: string;
</script>


<a href="{href}">
    <aside>
        <h4>
            <slot name="title"></slot>
        </h4>
        <p>
            <slot name="body"></slot>
        </p>
    </aside>
</a>
