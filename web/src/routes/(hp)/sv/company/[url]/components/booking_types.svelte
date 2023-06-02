<script lang="ts">
	import { groupBy } from "lodash";
	import KdItem from "../../../../../../components/kdItem.svelte";
	import KdButton from "../../../../../../components/kdbutton.svelte";
    import dayjs from 'dayjs';
	import { Size, Variant } from "../../../../../../components/common_types";
	import KdLinkButton from "../../../../../../components/kdLinkButton.svelte";
    
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
                <KdLinkButton href="{bookingType.bookingLink}" size="{Size.SM}" variant="{Variant.FLAT}">Boka</KdLinkButton>
            </span>
        </KdItem>
    {/each}

{/each}