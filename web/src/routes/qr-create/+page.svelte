<script lang="ts">
    import QRCode from 'qrcode';
    import { onMount } from 'svelte';

    import { page } from '$app/stores';
    const qrUrl: string = $page.data.qrUrl;

    let qrCanvas: HTMLCanvasElement;

    onMount(() => {
        QRCode.toCanvas(qrCanvas, qrUrl, {
            width: 300,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#ffffff'
            }
        });
    });
</script>

<div class="flex items-center justify-center h-screen">
    <div class="relative w-72 h-72">
        <canvas bind:this={qrCanvas} class="absolute"></canvas>
    </div>
</div>