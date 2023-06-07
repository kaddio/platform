<script lang="ts">

	import { Color, Size, Variant, buttonCssClass, cssClass } from "./common_types";


    export let size: Size = Size.MD;
    export let variant: Variant = Variant.FLAT;
    export let color: Color = Color.PRIMARY;

</script>


<button {...$$restProps} on:click class="font-semibold rounded {buttonCssClass(variant, color, size)}"><slot></slot></button>


