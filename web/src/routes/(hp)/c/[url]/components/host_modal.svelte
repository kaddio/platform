<script lang="ts">
    import KdModal from '../../../../../components/KdModal.svelte';

    export let host;
    let modal: KdModal;
    let open = false;
</script>

{#if host.presentation}
    <a href="#" on:click|preventDefault={() => (open = true)} class="text-semibold text-teal-400">
        Läs mer
    </a>

    <KdModal bind:this={modal} bind:open>
        <div slot="header" class="text-center flex flex-col gap-2">
            <div class="text-xl">
                {host.firstname}
                {host.lastname}
            </div>
            <div class="text-gray-400">
                {host.title}
            </div>
        </div>
        <div slot="body" class="prose p-8 font-normal">{host.presentation}</div>
    </KdModal>
{/if}
