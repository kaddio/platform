<script lang="ts">
    import { bind } from 'svelte/internal';
    import KdModal from '../../../../../components/KdModal.svelte';

    export let bookingType;
    let modal: KdModal;
    let open = false;
</script>

{#if bookingType.description}
    <a href="#" on:click|preventDefault={() => (open = true)} class="text-semibold text-teal-400">
        Läs mer
    </a>

    <KdModal bind:this={modal} bind:open>
        <div slot="header" class="text-center flex flex-col gap-2">
            <div class="text-xl">{bookingType.name}</div>
            <div class="text-gray-400">
                {bookingType.clientVisibleLength} min · {bookingType.price} kr
            </div>
        </div>
        <div slot="body" class="prose p-8 font-normal">
            {bookingType.description}
        </div>
    </KdModal>
{/if}
