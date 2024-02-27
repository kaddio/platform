<script lang="ts">
    import _ from 'lodash';
    import KdItem from '../../../../../components/kdItem.svelte';
    import dayjs from 'dayjs';
    import KdLinkButton from '../../../../../components/kdLinkButton.svelte';
    import BookingTypeModal from './booking_type_modal.svelte';

    export let bookingTypes: any[];
    const groupedDookingTypes = _.groupBy(bookingTypes, 'categoryName');
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
                    <br />
                    <!-- {#if bookingType.nextFreeTime}
                        <span class="text-green-300"
                            >{dayjs(bookingType.nextFreeTime).fromNow()}</span
                        >
                    {:else}
                        <span class="text-red-300">Inga lediga tider</span>
                    {/if}
                    &nbsp;-->
                    <BookingTypeModal {bookingType} />
                </span>
                <span slot="action">
                    <KdLinkButton
                        href={bookingType.bookingLink}
                        size="sm"
                        color="theme-primary"
                        variant="flat">Sök tid</KdLinkButton
                    >
                </span>
            </KdItem>
        </div>
    {/each}
{/each}
