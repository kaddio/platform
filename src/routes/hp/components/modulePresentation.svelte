<script lang="ts">
    export let iconClass: string;
    export let href: string;
</script>


<a href="{href}">
    <aside>
        <div>
            <i class={iconClass}></i>
        </div>
        <article>
            <h4><slot name="title" /></h4>
            <p>
                <slot name="body"></slot>
            </p>
    
        </article>
    </aside>
</a>

<style>
    a{
        color: inherit !important;
    }
    aside{
        display: flex;
        gap: 10px;
    }

    h4{
        font-weight: bold;
        line-height: var(--line-height)
    }

    aside div{
        width: 40px;
        padding-top: 9px;
    }

    aside i{
        
        color: #c38f9c;
        /* font-size: 32px; */
    }

</style>