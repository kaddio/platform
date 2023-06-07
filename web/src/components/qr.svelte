<script lang="ts">
    import QRCode from 'qrcode'
    
    export let str: string = '';
    export let qr: string;

    const generateQR = async function(str: string){
        try {
            qr = await QRCode.toString(str, { type: "svg", errorCorrectionLevel: 'L' });
        } catch (err) {
            console.error(err)
        }
    }

    $: generateQR(str);
    
</script>

{#await qr then qr}
    {@html qr}
{/await}