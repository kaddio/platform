<script lang="ts">
    import _ from 'lodash';
    import KdItem from '../../../../../components/kdItem.svelte';
    import dayjs from 'dayjs';
    import KdLinkButton from '../../../../../components/kdLinkButton.svelte';
    import BookingTypeModal from './booking_type_modal.svelte';
    import { utmSource } from '$lib/utm-source';
    import { page } from '$app/stores';
    export let bookingTypes: any[];
    const groupedDookingTypes = _.groupBy(bookingTypes, 'categoryName');
</script>

{#each Object.entries(groupedDookingTypes) as [category, bookingTypesInCategory]}
    <span class="uppercase text-gray-500 text-sm font-semibold"
        >{category == 'null' ? '' : category}</span
    >
    {#each bookingTypesInCategory as bookingType}
        <div>
            <KdItem>
                <span slot="title">
                    {bookingType.name}
                </span>
                <span slot="subtitle">
                    {bookingType.clientVisibleLength} min ·
                    <span>{bookingType.price} kr</span>
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
                        href="{bookingType.bookingLink}&utm_source={utmSource($page.url)}"
                        size="sm"
                        color="theme-primary"
                        variant="flat">Sök tid</KdLinkButton
                    >
                </span>
            </KdItem>
        </div>
    {/each}
{/each}
