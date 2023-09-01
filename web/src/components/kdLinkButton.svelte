<script lang="ts">

	import { Color, Size, Variant, buttonCssClass} from "./common_types";


    export let size: Size = Size.MD;
    export let variant: Variant = Variant.FLAT;
    export let color: Color = Color.PRIMARY;


</script>


<a {...$$restProps} class="font-semibold rounded whitespace-nowrap {buttonCssClass(variant, color, size)}"><slot></slot></a>


