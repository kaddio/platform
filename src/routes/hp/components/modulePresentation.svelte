<script lang="ts">
    export let iconClass: string;
    export let href: string;
</script>


<a href="{href}">
    <aside>
        <span class={iconClass}></span>
        <article>
            <h4><slot name="title" /></h4>
            <p>
                <slot name="body"></slot>
            </p>
    
        </article>
    </aside>
</a>

<style>
    aside{
        display: flex;
        gap: 10px;
    }

    h4{
        font-weight: bold;
    }

    span{
        color: #c38f9c;
        font-size: 32px;
        font-weight: bold;
    }

</style>