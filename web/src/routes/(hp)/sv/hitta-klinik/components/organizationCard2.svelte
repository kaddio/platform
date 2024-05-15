<script lang="ts">
    import Card from '$components/card.svelte';

    import type { Organization } from '../types';
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';
    import 'dayjs/locale/sv';

    import { imageHandler } from '$lib/img';
    export let organization: Organization;
    const homepage = organization.homepage;
    const keywords = organization.keywords?.splice(0, 2);
    dayjs.locale('sv');
    dayjs.extend(relativeTime);
    const nextTime = dayjs(organization.nextFreeTime).fromNow();

    console.log(organization)
</script>



<article class="flex flex-col items-start /*justify-between*/">
    <div class="relative w-full">
        <img src={imageHandler(organization.homepage?.headerImg, {format: "auto"})} loading="lazy" alt="" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
        <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
    </div>
    
    <div class="max-w-xl">
        <div class="mt-8 flex items-center gap-x-4 text-xs">
        <span class="text-gray-500"><i class="fal fa-location-dot"></i> {organization.addressString}</span>
            <a href="#" class="relative z-10 rounded-full bg-green-800 px-3 py-1.5 font-medium text-gray-600 hover:bg-green-700"><i class="fal fa-timer"></i> Tid om 6h</a>
        <!-- {#each keywords as keyword}
            <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{keyword}</a>
        
        {/each} -->
        </div>
        <div class="group relative">
        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="/c/{organization.url}">
            <span class="absolute inset-0"></span>
            {organization.name}
            </a>
        </h3>
        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {@html organization.homepage?.presentation || 'Välkommen!'}            
        </p>
        </div>
        <div class="relative mt-8 flex items-center gap-x-4">
        <!-- <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full bg-gray-100"> -->
        <div class="text-sm leading-6">
            <p class="font-semibold text-gray-900">
                <a href="">
                    <span class="absolute inset-0"></span>
                    {organization.homepage.mainActivity}
                </a>
            </p>
            <!-- <p class="text-gray-600">{organization.homepage.mainActivity}</p> -->
        </div>
        </div>
    </div>
</article>












<!-- <Card className="w-full h-80 organization">
    <div class="w-full h-80">
        <a href="/c/{organization.url}" class="relative">
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
            <a href="/c/{organization.url}">
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
</Card> -->





