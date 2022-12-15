<script lang="ts">
    export let iconClass: string;
    export let href: string;
</script>


<a class="media" href="{href}">
    <div class="media-left">
        <span class="media-object {iconClass}"></span>
    </div>
    <div class="media-body">
        <h4 class="media-heading">
            <slot name="title"></slot>
        </h4>
        <p><slot name="body">
            
        </slot></p>
    </div>

</a>
<style>

.media {
    width: 28%;
    margin-bottom: 3rem;
}
</style>