<script lang="ts">
	import { Color, Size, Variant } from "./common_types";


    export let size: Size = Size.MD;
    export let variant: Variant = Variant.FLAT;
    export let color: Color = Color.PRIMARY;


</script>

<button class="bg-purple-400 text-sm text-white font-semibold px-2.5 py-1.5 rounded"><slot></slot></button>

