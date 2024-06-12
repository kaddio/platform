<script lang="ts">
    import Card from '$components/card.svelte';

    import type { Organization } from '../types';
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';
    import 'dayjs/locale/sv';

    import { imageHandler } from '$lib/img';
    export let organization: Organization;
    dayjs.locale('sv');
    dayjs.extend(relativeTime);
    const nextTime = dayjs(organization.nextFreeTime).fromNow();
</script>

<Card className="w-full h-80 organization">
    <div class="w-full h-80">
        <a href="/c/{organization.url}?utm_source=ks" class="relative">
            <div
                class="w-full h-1/2"
                style="background-image: url({imageHandler(
                    organization.homepage?.headerImg,
                    { format: 'auto', width: 320 },
                    false
                )}); background-size: cover; background-position: center"
            />
            {#if organization.stars && organization.useReviews}
                <div
                    class="bg-white rounded-bl absolute top-0 right-0 text-sm px-1 font-semibold text-gray-500"
                >
                    {organization.stars.toFixed(1)} <i class="fa fa-star text-yellow-500" />
                </div>
            {/if}
        </a>

        <div class="h-1/2 p-4 flex flex-col justify-between">
            <a href="/c/{organization.url}?utm_source=ks">
                <div class="uppercase text-xs text-gray-400 font-semibold line-clamp-1">
                    {organization.homepage?.mainActivity || ''}
                </div>
                <h3 class="font-semibold">{organization.name}</h3>
                <small class="text-gray-400 line-clamp-1">{organization.addressString || ''}</small>
            </a>
            <div class="flex-grow" />
            <div class="flex gap-5 justify-between items-center text-sm">
                {#if organization.showBooking}
                    {#if organization.nextFreeTime}
                        <a
                            class="text-green-400 font-semibold"
                            target="_blank"
                            rel="noreferrer"
                            href="https://{organization.url}.kaddio.com/booking">Tid {nextTime}</a
                        >
                    {:else}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            class="text-gray-400 font-semibold"
                            href="https://{organization.url}.kaddio.com/booking"
                            >Inga lediga tider</a
                        >
                    {/if}
                {/if}
            </div>
        </div>
    </div>
</Card>
