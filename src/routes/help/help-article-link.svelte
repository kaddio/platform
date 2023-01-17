<script lang="ts">
    export let iconClass: string;
    export let title: string;
    export let href: string;
</script>

<a class="help-article" href="{href}">
    <div class="icon">
        <i class="{iconClass}"></i>
    </div>
    <div class="title">
        {title}
    </div>
</a>

<style>
    .help-article {
        display: flex;
        flex-direction: column;
    }

    .icon {
        font-size: 3rem;
        color: #ccc;
    }
    
</style>