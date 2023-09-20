<script lang="ts">
	import dayjs from "dayjs";

	
	import Stars from "./stars.svelte";
	import Card from "../../../../../components/card.svelte";

    type Review = {
        name: string,
        date: Date,
        text: string,
        stars: number
    }
    export let reviews: Review[];
    
</script>

<div class="grid grid-cols-2 gap-8 bg-gray-200 p-5 rounded-md shadow-inner">
    {#each reviews as review}
    <Card className="flex flex-col gap-3 col-span-1 p-5">
        <div class="flex gap-2 align-baseline">
            <span class="font-bold">{review.name}</span>
            <span class="text-gray-400">{dayjs(review.date).fromNow()}</span>
            <span class="flex-grow"></span>
            <span class="text-right">
                <Stars stars={review.stars}></Stars>
            </span>
        </div>
        <span>{review.text}</span>
    </Card>
{/each}

</div>