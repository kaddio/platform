<script lang="ts">
	import { groupBy } from "lodash";
	import KdItem from "../../../../../../components/kdItem.svelte";
	import KdButton from "../../../../../../components/kdbutton.svelte";
    import dayjs from 'dayjs';
	import { Size, Variant } from "../../../../../../components/common_types";
    
    export let bookingTypes: any[];
    const groupedDookingTypes = groupBy(bookingTypes, 'categoryName');
</script>


{#each Object.entries(groupedDookingTypes) as [category, bookingTypesInCategory]} 
    <span class="uppercase text-gray-400 text-sm font-semibold">{category || ""}</span>
    {#each bookingTypesInCategory as bookingType}                         
        <KdItem>
            <span slot="title">
                {bookingType.name}
            </span>
            <span slot="subtitle">
                {bookingType.clientVisibleLength} min · {bookingType.price} kr
                {#if bookingType.nextFreeTime}
                    {dayjs(bookingType.nextFreeTime).fromNow()}
                {:else}
                    Inga lediga tider
                {/if}
            </span>
            <span slot="action">
                <KdButton size="{Size.SM}" variant="{Variant.FLAT}">Boka</KdButton>
            </span>
        </KdItem>
    {/each}

{/each}