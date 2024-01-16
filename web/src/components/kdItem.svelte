<script lang="ts">
</script>

<div class="flex gap-5 items-center">
    {#if $$slots.avatar}
        <div class="w-14 h-14 rounded-full shadow avatar overflow-hidden shrink-0">
            <slot name="avatar" />
        </div>
    {/if}
    <!-- <div  class="kd-item-icon"><slot name="avatar"></slot></div> -->
    <div class=" flex flex-col gap-0 grow shrink">
        <div><slot name="title" /></div>
        <div class="text-sm text-gray-400 font-semibold"><slot name="subtitle" /></div>
    </div>

    <div class="shrink-0"><slot name="action" /></div>
</div>

<style>
    .avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
