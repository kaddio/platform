export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Variant = 'flat' | 'gradient' | 'inverted' | 'light' | 'outline';
export type Color =
    | 'primary'
    | 'secondary'
    | 'default'
    | 'success'
    | 'warning'
    | 'danger'
    | 'theme-primary';

const tailwindColorMap = {
    ['primary']: 'purple',
    ['secondary']: 'teal',
    ['danger']: 'red',
    ['default']: 'gray',
    ['warning']: 'yellow',
    ['success']: 'green',
    ['theme-primary']: 'primary'
};

const sizeClass = function (size: Size) {
    switch (size) {
        case 'xs':
            return 'text-xs px-1.5 py-0.5';
        case 'sm':
            return 'text-sm px-2 py-1';
        case 'md':
            return 'px-2.5 py-1.5';
        case 'lg':
            return 'text-lg px-3.5 py-2.5';
        case 'xl':
            return 'text-xl px-5 py-3';
    }
};

const semanticColorToTailwindColor = function (color: Color): string {
    return tailwindColorMap[color];
};

export const cssClass = function (variant: Variant, color: Color): string {
    const tailwindColor = semanticColorToTailwindColor(color);
    switch (variant) {
        case 'flat':
            return `bg-${tailwindColor}-400 text-white hover:bg-${tailwindColor}-300`;
        case 'gradient':
        case 'inverted':
            return `bg-transparent text-${tailwindColor}-300 font-heavy hover:bg-${tailwindColor}-300 hover:text-white`;
        case 'light':
            return `bg-${tailwindColor}-300 text-${tailwindColor}-900 hover:bg-${tailwindColor}-400`;
        case 'outline':
            return `bg-white text-${tailwindColor}-400 border-${tailwindColor}-300`;
    }
};

export const buttonCssClass = function (variant: Variant, color: Color, size: Size) {
    return `text-center ${cssClass(variant, color)} ${sizeClass(size)}`;
};
