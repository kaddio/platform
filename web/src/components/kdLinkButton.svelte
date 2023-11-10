<script lang="ts">
    import { buttonCssClass } from './common_types';

    import type { Color, Size, Variant } from './common_types';
    export let size: Size = 'md';
    export let variant: Variant = 'flat';
    export let color: Color = 'primary';
</script>

<a
    class="cursor-pointer font-semibold rounded whitespace-nowrap {$$restProps.class} {buttonCssClass(
        variant,
        color,
        size
    )}"><slot /></a
>
