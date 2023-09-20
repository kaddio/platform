<script lang="ts">
    import { groupBy } from 'lodash';
    import KdItem from '../../../../../components/kdItem.svelte';
    import dayjs from 'dayjs';
    import { Color, Size, Variant } from '../../../../../components/common_types';
    import KdLinkButton from '../../../../../components/kdLinkButton.svelte';

    export let bookingTypes: any[];
    const groupedDookingTypes = groupBy(bookingTypes, 'categoryName');
</script>

{#each Object.entries(groupedDookingTypes) as [category, bookingTypesInCategory]}
    <span class="uppercase text-gray-500 text-sm font-semibold"
        >{category == 'null' ? '' : category}</span
    >
    {#each bookingTypesInCategory as bookingType}
        <div itemscope itemtype="http://schema.org/Product">
            <KdItem>
                <span slot="title" itemprop="name">
                    {bookingType.name}
                </span>
                <span slot="subtitle">
                    {bookingType.clientVisibleLength} min ·
                    <span itemprop="offer">{bookingType.price} kr</span>
                    {#if bookingType.nextFreeTime}
                        {dayjs(bookingType.nextFreeTime).fromNow()}
                    {:else}
                        Inga lediga tider
                    {/if}
                </span>
                <span slot="action">
                    <KdLinkButton
                        href={bookingType.bookingLink}
                        size={Size.SM}
                        color={Color.THEME_PRIMARY}
                        variant={Variant.FLAT}>Sök tid</KdLinkButton
                    >
                </span>
            </KdItem>
        </div>
    {/each}
{/each}
