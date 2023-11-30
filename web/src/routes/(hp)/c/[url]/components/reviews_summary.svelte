<script lang="ts">
    import KdModal from '../../../../../components/KdModal.svelte';
    import Stars from './stars.svelte';

    export let histogram: number[];
    export let count: number;
    export let stars: number;

    const histogramByStars = {
        '5': histogram[4],
        '4': histogram[3],
        '3': histogram[2],
        '2': histogram[1],
        '1': histogram[0]
    };
</script>

<div class="grid grid-cols-3 sm:grid-cols-2 w-full gap-8 mb-4">
    <div class="flex flex-col col-span-1 sm:items-center">
        <div class="text-6xl font-semibold text-gray-500">{stars && stars.toFixed(1)}</div>
        <div class="text-gray-500">
            <a class="text-primary font-bold">Visa alla ({count} st)</a>
        </div>
    </div>
    <div class="flex flex-col-reverse col-span-2 sm:col-span-1 text-xs">
        {#each Object.keys(histogramByStars) as key}
            <div class="flex gap-5 items-center">
                <div class="flex-grow-0">
                    <Stars stars={Number(key)} />
                </div>
                <div class="flex-grow">
                    <div class="bg-gray-200 rounded-full h-2">
                        <div
                            class="bg-yellow-500 rounded-full h-2 w-{(histogramByStars[key] /
                                count) *
                                100}"
                        />
                    </div>
                </div>
                <div class="flex-grow-0">{histogramByStars[key]}</div>
            </div>
        {/each}
    </div>
</div>
