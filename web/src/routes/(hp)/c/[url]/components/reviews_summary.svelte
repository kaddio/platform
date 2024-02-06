<script lang="ts">
    import KdModal from '../../../../../components/KdModal.svelte';
    import AllReviewsModalButton from './all_reviews_modal_button.svelte';
    import Stars from './stars.svelte';
    export let orgUrl: string;
    export let histogram: number[];
    export let count: number;
    export let stars: number;

    const mapValues = (obj, fn) => {
        const res = {};
        Object.keys(obj).forEach((key) => {
            res[key] = fn(obj[key], key);
        });
        return res;
    };

    const histogramByStars = {
        '5': histogram[4],
        '4': histogram[3],
        '3': histogram[2],
        '2': histogram[1],
        '1': histogram[0]
    };

    const styles = mapValues(histogramByStars, (value) => `width: ${(value / count) * 100}%`);
</script>

<div class="grid grid-cols-3 w-full gap-4 sm:gap-8 mt-4 mb-8 sm:mt-8 sm:mb-12">
    <div class="flex flex-col col-span-1 sm:items-end">
        <!-- <a class="text-sm uppercase text-gray-500 font-semibold mb-5" href="#hosts">OMDÖMEN</a> -->
        <div class="text-5xl font-semibold text-gray-500">{stars && stars.toFixed(1)}</div>
        <div class="text-gray-500">{count} omdömen</div>
    </div>
    <div class="flex flex-col-reverse col-span-2 text-xs">
        {#each Object.keys(histogramByStars) as key}
            <div class="flex gap-5 items-center max-w-md">
                <div class="flex-grow-0">
                    <Stars stars={Number(key)} reverse={true} />
                </div>
                <div class="flex-grow">
                    <div class=" bg-transparent rounded-full h-2">
                        <div class="bg-yellow-500 rounded-full h-2" style={styles[key]} />
                    </div>
                </div>
                <div class="flex-grow-0">{histogramByStars[key]}</div>
            </div>
        {/each}
    </div>
</div>
