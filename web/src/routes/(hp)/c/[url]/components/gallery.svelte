<script lang="ts">
    export let imageSrcs: string[];
</script>
<div class="grid grid-cols-2 w-full">
    {#each imageSrcs as src}
        <img src={src} class="aspect-square col-span-1 w-full">
    {/each}
</div>