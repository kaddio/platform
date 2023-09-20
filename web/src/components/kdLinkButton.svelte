<script lang="ts">
    import { Color, Size, Variant, buttonCssClass } from './common_types';

    export let size: Size = Size.MD;
    export let variant: Variant = Variant.FLAT;
    export let color: Color = Color.PRIMARY;

    export let className: string = '';
</script>

<a
    {...$$restProps}
    class="font-semibold rounded whitespace-nowrap {className} {buttonCssClass(
        variant,
        color,
        size
    )}"><slot /></a
>
