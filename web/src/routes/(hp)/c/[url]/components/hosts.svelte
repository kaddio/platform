<script lang="ts">
    import KdItem from '../../../../../components/kdItem.svelte';

    import dayjs from 'dayjs';
    import KdLinkButton from '../../../../../components/kdLinkButton.svelte';
    import HostModal from './host_modal.svelte';

    export let hosts: any[];

    const longList = hosts.length > 10;
    let expanded = !longList;

    // $: filteredHosts = expanded ? hosts : hosts.slice(0, 10);
</script>

{#each hosts as host}
    <KdItem>
        <span slot="avatar">
            {#if host.imgUrl}
                <img src={host.imgUrl} />
            {:else}
                <div class="flex items-center justify-center h-full w-full bg-gray-100">
                    <i class="fa fa-user text-3xl text-gray-300" />
                </div>
            {/if}
        </span>

        <span slot="title">
            {host.firstname}
            {host.lastname}
        </span>
        <span slot="subtitle">
            {#if host.title}
                <div class=" text-gray-400 font-semibold line-clamp-1" style="max-width: 20rem">
                    {host.title}
                </div>
            {/if}

            {#if host.nextFreeTime}
                <span class="text-green-300">{dayjs(host.nextFreeTime).fromNow()}</span>
            {:else}
                <span class="text-red-300">Inga lediga tider</span>
            {/if}
            &nbsp;
            <HostModal {host} />
        </span>
        <span slot="action">
            <KdLinkButton href={host.bookingLink} size="sm" variant="flat" color="theme-primary"
                >Sök tid</KdLinkButton
            >
        </span>
    </KdItem>
{/each}

<!-- {#if longList && !expanded}
    <a on:click={()=>expanded = true} href>Visa fler ({hosts.length - 10} st)</a>
{/if} -->
