<script lang="ts">
	
	import KdModal from "../../../../../../components/KdModal.svelte";
import { Color, Size, Variant } from "../../../../../../components/common_types";
import KdButton from "../../../../../../components/kdbutton.svelte";

    export let host;
    let modal: HTMLDialogElement;
</script>

<KdButton size={Size.XS} variant={Variant.INVERTED} color={Color.SECONDARY} on:click={modal.showModal()}>Mer info</KdButton>
<KdModal bind:dialog={modal}>
    <div class="flex gap-8 mb-7 items-center">
        <img src={host.imgUrl} class="h-20 w-20 rounded-full object-cover shadow-sm">
        <div>
            <div class="font-normal text-lg">{host.firstname} {host.lastname}</div>
            <small class="font-semibold text-gray-400">{host.title}</small>
        </div>
    </div>
    <p class="font-normal prose">
        {host.presentation}
    </p>
</KdModal>