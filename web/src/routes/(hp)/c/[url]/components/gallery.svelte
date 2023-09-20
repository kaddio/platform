<script lang="ts">
    import { imageHandler } from '../../../../../lib/img';

    export let imageSrcs: string[];
    imageHandler;
</script>

{#if imageSrcs.length}
    <div class="grid grid-cols-2 w-full">
        {#each imageSrcs as src}
            <img
                src={imageHandler(src, { format: 'auto', width: 240 })}
                class="aspect-square col-span-1 w-full object-cover"
            />
        {/each}
    </div>
{/if}
