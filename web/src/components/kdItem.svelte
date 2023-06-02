<script lang="ts">

</script>


<div class="flex gap-5 items-center">
    {#if $$slots.avatar }
        <div  class="w-14 h-14 rounded-full shadow avatar overflow-hidden shrink-0"><slot name="avatar"></slot></div>
    {/if}
    <!-- <div  class="kd-item-icon"><slot name="avatar"></slot></div> -->
    <div class=" flex flex-col gap-1 grow">
        <div ><slot name="title"></slot></div>
        <div class="text-sm text-gray-400 font-semibold"> <slot name="subtitle"></slot></div>
    </div>
    
    <div ><slot name="action"></slot></div>
</div>

<style>
.avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>