<script lang="ts">
    import KdButton from './kd-button.svelte';

    let dialog: HTMLDialogElement;
    export let open = true;
    export let closeButton = true;

    export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

    $: if (dialog) {
        if (open) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }
</script>

<!--tailwind whitelist-->

<dialog bind:this={dialog} class="rounded-xl relative pt-4 {size}">
    <div class="absolute top-0 right-0 m-4" class:hidden={!closeButton}>
        <KdButton
            on:click={() => {
                open = false;
            }}
            variant="inverted"
            color="default"
        >
            <i class="fa fa-times" />
        </KdButton>
    </div>
    <slot name="header" />
    <slot name="body" />
</dialog>

<style>
    dialog::backdrop {
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
        animation: fade-in 0.4s;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    dialog {
        position: fixed;
    }

    dialog.xs {
        width: 20rem;
    }

    dialog.sm {
        width: 30rem;
    }

    dialog.md {
        width: 40rem;
    }

    dialog.lg {
        width: 50rem;
    }

    dialog.xl {
        width: 60rem;
    }
</style>
