<script lang="ts">
    import ReviewsSummary from './reviews_summary.svelte';
    import Review from './review.svelte';

    export let reviews: {
        clientName: string;
        date: Date;
        comment: string;
        stars: number;
    }[];

    export let stars: number;
    export let reviewCount: number;
    export let histogram: number[];
</script>

<div class="bg-gray-200 p-5 rounded-md shadow-inner">
    <span class="text-gray-500 flex gap-5 items-center">
        <!-- <div class="text-4xl font-semibold">{stars} <i class="fa fa-star text-yellow-500" /></div>
        <div>av 5 stjärnor, totalt {reviewCount} omdömen</div>
        <div class="grow" />
        <KdButton class="ml-5" variant="inverted" color="primary">Visa alla</KdButton> -->
        <ReviewsSummary {histogram} count={reviewCount} {stars} />
    </span>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5">
        {#each reviews as review}
            <Review {review} />
        {/each}
    </div>
</div>
