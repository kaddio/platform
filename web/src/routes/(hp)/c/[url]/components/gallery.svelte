<script lang="ts">
    export let imageSrcs: string[];
</script>

{#if imageSrcs.length}
    <div class="grid grid-cols-2 w-full">
        {#each imageSrcs as src}
            <img {src} class="aspect-square col-span-1 w-full" />
        {/each}
    </div>
{/if}
