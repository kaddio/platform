<script lang="ts">
    import dayjs from 'dayjs';

    import Stars from './stars.svelte';
    import Card from '../../../../../components/card.svelte';
    import KdButton from '../../../../../components/kd-button.svelte';

    type Review = {
        clientName: string;
        date: Date;
        comment: string;
        stars: number;
    };
    export let reviews: Review[];
    export let reviewCount: number;
</script>

<div class="bg-gray-200 p-5 rounded-md shadow-inner">
    <span class="text-gray-500">
        Visar {reviews.length} av {reviewCount} omdömen
        <KdButton class="ml-5" variant="inverted" color="primary">Visa alla</KdButton>
    </span>
    <div class="grid grid-cols-2 gap-8 mt-5">
        {#each reviews as review}
            <Card className="flex flex-col col-span-1 p-5">
                <div class="flex gap-2 align-baseline">
                    <span class="font-bold">{review.clientName}</span>

                    <span class="flex-grow" />
                    <span class="text-right">
                        <Stars stars={review.stars} />
                    </span>
                </div>
                <span class="text-gray-400 font-semibold">{dayjs(review.date).fromNow()}</span>
                <span class="mt-5">{review.comment}</span>
            </Card>
        {/each}
    </div>
</div>
