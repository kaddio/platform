<script lang="ts">
    import dayjs from 'dayjs';
    import Card from '../../../../../components/card.svelte';
    import Stars from './stars.svelte';

    export let review: {
        clientName: string;
        date: Date;
        comment: string;
        stars: number;
    };
</script>

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
