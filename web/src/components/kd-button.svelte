<script lang="ts">
    import { buttonCssClass } from './common_types';
    import type { Color, Size, Variant } from './common_types';
    export let size: Size = 'md';
    export let variant: Variant = 'flat';
    export let color: Color = 'primary';
</script>

<button
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    class="font-semibold rounded whitespace-nowrap {$$restProps.class || ''} {buttonCssClass(
        variant,
        color,
        size
    )}"><slot /></button
>
