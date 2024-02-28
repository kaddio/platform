<script lang="ts">
    import dayjs from 'dayjs';
    import Card from '../../../../../components/card.svelte';
    import Stars from './stars.svelte';

    export let review: {
        clientName: string;
        date: Date;
        comment: string;
        stars: number;
        answer: {
            answer: string;
        };
    };
</script>

<div class="flex flex-col col-span-1 p-3 sm:px-5 sm:py-4 text-sm bg-gray-50 rounded-lg">
    <div class="flex gap-2 align-baseline">
        <span class="font-semibold">{review.clientName}</span>

        <span class="flex-grow" />
        <span class="text-right">
            <Stars stars={review.stars} />
        </span>
    </div>
    <span class="text-gray-500 text-xs">{dayjs(review.date).fromNow()}</span>
    <span class="mt-5">{review.comment || ''}</span>
    {#if review.answer}
        hjk
        <span class="mb-3 mt-5 text-gray-800 bg-gray-200 rounded px-4 py-3 border-gray-200 border"
            ><span class="font-semibold">{review.answeredByUser?.firstname}</span>
            {review.answer.answer}</span
        >
    {/if}
</div>
