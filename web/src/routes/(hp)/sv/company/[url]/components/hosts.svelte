<script lang="ts">
	import { Size, Variant } from "../../../../../../components/common_types";
	import KdItem from "../../../../../../components/kdItem.svelte";
	
    import dayjs from 'dayjs';
	import KdLinkButton from "../../../../../../components/kdLinkButton.svelte";
	import KdModal from "../../../../../../components/KdModal.svelte";
	import KdButton from "../../../../../../components/kdbutton.svelte";
	import HostModal from "./host_modal.svelte";
    
    export let hosts: any[];
    
    const longList = hosts.length > 10;
    let expanded = !longList;
    $: filteredHosts = expanded ? hosts : hosts.slice(0, 10);
    let dialog: HTMLDialogElement;
</script>

{#each filteredHosts as host} 
                
    <KdItem>
        <img src={host.imgUrl} slot="avatar" />
        <span slot="title">
            {host.firstname} {host.lastname}
        </span>
        <span slot="subtitle">
            {#if host.nextFreeTime}
            <span class="text-green-300">{dayjs(host.nextFreeTime).fromNow()}</span>
            {:else}
                <span class="text-red-300">Inga tider</span>
            {/if}
            <HostModal host={host}></HostModal>
        </span>
        <span slot="action">
            <KdLinkButton href="{host.bookingLink}" size="{Size.SM}" variant="{Variant.FLAT}">Boka</KdLinkButton>
        </span>
    </KdItem>
{/each}

{#if longList && !expanded}
    <a on:click={()=>expanded = true} href>Visa fler ({hosts.length - 10} st)</a>
{/if}