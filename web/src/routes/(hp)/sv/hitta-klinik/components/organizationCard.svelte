<script lang="ts">
    import Card from '$components/card.svelte';

    import type { Organization } from '../types';
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';
    import 'dayjs/locale/sv';
    import KdButton from '$components/kd-button.svelte';
    import { imageHandler } from '$lib/img';
    export let organization: Organization;
    dayjs.locale('sv');
    dayjs.extend(relativeTime);
    const nextTime = dayjs(organization.nextFreeTime).fromNow();
</script>

<Card className="w-full h-80 organization">
    <div class="w-full h-80">
        <a href="/c/{organization.url}?backbutton=1">
            <div
                class="w-full h-1/2"
                style="background-image: url({imageHandler(
                    organization.homepage?.headerImg,
                    { format: 'auto', width: 320 },
                    false
                )}); background-size: cover; background-position: center"
            />
        </a>

        <div class="h-1/2 p-4 flex flex-col justify-between">
            <a href="/c/{organization.url}?backbutton=1">
                <div class="uppercase text-xs text-gray-400 font-semibold line-clamp-1">
                    {organization.keywords?.join(' · ') || ''}
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
