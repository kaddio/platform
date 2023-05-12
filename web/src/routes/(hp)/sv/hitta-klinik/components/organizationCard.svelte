<script lang="ts">
	import Card from "../../../../../components/card.svelte";
	import Kdbutton from "../../../../../components/kdbutton.svelte";
	import type { Organization } from "../types";
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';

    export let organization: Organization
    dayjs.extend(relativeTime);
    const nextTime = dayjs(organization.nextFreeTime).fromNow()
</script>

<Card>
    <div class="h-80 w-64">
        <div class="w-full h-2/5" style="background-image: url({organization.homepage?.headerImg}); background-size: cover">
            
        </div>
        
        <div class="h-3/5 p-4 flex  flex-col justify-between">
            <div class="uppercase text-xs text-gray-400 font-semibold">Psykolog · Osteopat</div>
            <h3 class="font-semibold">{organization.name}</h3>
            <small class="text-gray-400">{organization.address} {organization.city}</small>
            <div class="flex-grow"></div>
            <div class="flex gap-5 justify-between align-baseline">
                {#if organization.nextFreeTime }
                    <span class="text-green-400 font-semibold">Tid {nextTime}</span>
                {:else}
                    <span class="text-gray-400 font-semibold">Fullbokat</span>
                {/if}
                <Kdbutton>Besök</Kdbutton>
            </div>
        
        </div>
    </div>
</Card>