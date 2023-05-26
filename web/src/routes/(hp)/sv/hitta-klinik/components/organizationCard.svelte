<script lang="ts">
	import Card from "../../../../../components/card.svelte";
	import Kdbutton from "../../../../../components/kdButton.svelte";
	import type { Organization } from "../types";
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';
    import 'dayjs/locale/sv';
    export let organization: Organization
    dayjs.locale("sv")
    dayjs.extend(relativeTime);
    const nextTime = dayjs(organization.nextFreeTime).fromNow()
    const addressString = [organization.address, organization.city].filter(Boolean).join(", ");
</script>

<Card className="w-full sm:w-72 h-80">
    <div class="w-full h-80">
        <div class="w-full h-1/2" style="background-image: url({organization.homepage?.headerImg}); background-size: cover; background-position: center">
            
        </div>
        
        <div class="h-1/2 p-4 flex  flex-col justify-between">
            <div class="uppercase text-xs text-gray-400 font-semibold line-clamp-1">{organization.keywords?.join(" · ") || ""}</div>
            <h3 class="font-semibold">{organization.name}</h3>
            <small class="text-gray-400 line-clamp-1">{organization.addressString}</small>
            <div class="flex-grow"></div>
            <div class="flex gap-5 justify-between items-center text-sm">
                {#if organization.nextFreeTime }
                    <a class="text-green-400 font-semibold" href="https://{organization.url}.kaddio.com/booking">Tid {nextTime}</a>
                {:else}
                    <a class="text-gray-400 font-semibold" href="https://{organization.url}.kaddio.com/booking">Bokning</a>
                {/if}
                <a href="https://{organization.url}.kaddio.com"><Kdbutton>Besök</Kdbutton></a>
            </div>
        
        </div>
    </div>
</Card>