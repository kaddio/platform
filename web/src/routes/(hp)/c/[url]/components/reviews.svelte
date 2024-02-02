<script lang="ts">
    import ReviewsSummary from './reviews_summary.svelte';
    import Review from './review.svelte';
    import AllReviewsModalButton from './all_reviews_modal_button.svelte';
    import KdButton from '../../../../../components/kd-button.svelte';
    import { loadReviews } from '../load_reviews';

    export let reviews: {
        clientName: string;
        date: Date;
        comment: string;
        stars: number;
    }[];
    export let orgUrl: string;
    export let stars: number;
    export let reviewCount: number;
    export let histogram: number[];
    let limit = 6;

    const loadData = async (limit: number) => {
        const data = await loadReviews(orgUrl, limit);
        reviews = data.reviews;
    };

    $: {
        loadData(limit);
    }
</script>

<div class="rounded-md p-5 bg-white">
    <span class="text-gray-500 flex gap-3 items-center">
        <ReviewsSummary {histogram} count={reviewCount} {stars} {orgUrl} />
    </span>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 -mx-2 sm:m-0">
        {#each reviews as review}
            <Review {review} />
        {/each}
    </div>
    {#if reviews.length === 0}
        <div class="text-center mt-5">Inga omdömen ännu</div>
    {/if}
    {#if reviews.length < reviewCount}
        <span class="flex justify-center w-full">
            <KdButton
                class="mt-5"
                variant="inverted"
                color="primary"
                on:click={() => (limit = limit + 10)}>Visa fler</KdButton
            >
        </span>
    {/if}
</div>
