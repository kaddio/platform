<script lang="ts">
    let dialog;
    export let open = true;
</script>

<dialog bind:this={dialog}>
    <slot name="header" />
    <slot name="body" />
</dialog>

<style>
    dialog::backdrop {
        background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
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
</style>
