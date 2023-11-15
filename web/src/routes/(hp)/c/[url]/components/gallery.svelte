<script lang="ts">
    import { imageHandler } from '../../../../../lib/img';

    export let imageSrcs: string[];
    imageHandler;
</script>

{#if imageSrcs.length}
    <div class="grid grid-cols-2 w-full gap-5 px-5">
        {#each imageSrcs as src}
            <img
                src={imageHandler(src, { format: 'auto', width: 240 })}
                class="aspect-square col-span-1 w-full object-cover rounded-lg"
            />
        {/each}
    </div>
{/if}
