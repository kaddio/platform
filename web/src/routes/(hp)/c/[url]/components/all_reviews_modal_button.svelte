<script lang="ts">
    import KdModal from '../../../../../components/KdModal.svelte';
    import KdButton from '../../../../../components/kd-button.svelte';
    import Review from './review.svelte';
    export let orgUrl: string;

    let open = false;
    let limit = 10;
    import { loadReviews } from '../load_reviews';
    import ReviewsSummary from './reviews_summary.svelte';
    let reviews = [];
    export let reviewCount: number;
    let stars = 0;
    export let starsFilter = undefined;

    let starsHistogram = [0, 0, 0, 0, 0];

    const loadData = async () => {
        const data = await loadReviews(orgUrl, limit);
        reviews = data.reviews;
        reviewCount = data.reviewCount;
        stars = data.stars;
        starsHistogram = data.starsHistogram;
    };
    $: {
        if (open) {
            loadData();
        }
    }
</script>

<KdButton class="" variant="inverted" color="primary" on:click={() => (open = true)}
    >Visa alla</KdButton
>

<KdModal bind:open>
    <div slot="body" class="max-h-96 overflow-scroll">
        <!-- <ReviewsSummary histogram={starsHistogram} count={reviewCount} {stars} /> -->
        <span class="text-gray-500 flex gap-5 items-center" style="width: 600px">
            <!-- <div class="text-4xl font-semibold">{stars} <i class="fa fa-star text-yellow-500" /></div> -->
            <div>{stars.toFixed(1)} av 5 stjärnor, totalt {reviewCount} omdömen</div>
            <div class="grow" />
            <KdButton variant="inverted" color="primary" class="mr-8"
                >Visa alla ({reviewCount} st)</KdButton
            >
        </span>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5">
            {#each reviews as review}
                <Review {review} />
            {/each}
        </div>
        {#if reviewCount > reviews.length}
            <div class="w-full text-center">
                <KdButton on:click={() => (limit = limit + 10)}>Visa fler</KdButton>
            </div>
        {/if}
    </div>
</KdModal>
