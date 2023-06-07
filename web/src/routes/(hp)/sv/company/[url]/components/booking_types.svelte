<script lang="ts">
	import { groupBy } from "lodash";
	import KdItem from "../../../../../../components/kdItem.svelte";
    import dayjs from 'dayjs';
	import { Size, Variant } from "../../../../../../components/common_types";
	import KdLinkButton from "../../../../../../components/kdLinkButton.svelte";
	import BookingTypeModal from "./booking_type_modal.svelte";
    
    export let bookingTypes: any[];
    const groupedDookingTypes = groupBy(bookingTypes, 'categoryName');
</script>

<div class="flex flex-col gap-4">
{#each Object.entries(groupedDookingTypes) as [category, bookingTypesInCategory]} 
    <span class="uppercase text-gray-500 text-sm font-semibold mt-3">{category || ""}</span>
    {#each bookingTypesInCategory as bookingType}                         
        <KdItem>
            <span slot="title">
                {bookingType.name}
            </span>
            <span slot="subtitle">
                {bookingType.clientVisibleLength} min · {bookingType.price} kr
                 
                {#if bookingType.nextFreeTime}
                <span class="text-green-300">Tid {dayjs(bookingType.nextFreeTime).fromNow()}</span>
                {:else}
                <span class="text-red-300">Inga tider</span>
                {/if}
                <BookingTypeModal bookingType={bookingType}></BookingTypeModal>
            </span>
            <span slot="action">
                <KdLinkButton href="{bookingType.bookingLink}" size="{Size.SM}" variant="{Variant.FLAT}">Boka</KdLinkButton>
            </span>
        </KdItem>
    {/each}

{/each}
</div>