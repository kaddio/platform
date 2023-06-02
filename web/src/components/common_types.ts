export enum Size {
    XS = "xs",
    SM = "sm",
    MD = "md",
    LG = "lg",
    XL = "XL"
}

export enum Variant {
    FLAT = 'flat',
    GRADIENT = 'gradient',
    INVERTED = 'inverted',
    LIGHT = 'light',
    OUTLINE = 'outline'
}

export enum Color {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    DEFAULT = 'default',
    SUCCESS = 'success',
    WARNING = 'warning',
    DANGER = 'danger'
}

    
const tailwindColorMap = {
    [Color.PRIMARY]: 'purple',
    [Color.SECONDARY]: 'teal',
    [Color.DANGER]: 'red',
    [Color.DEFAULT]: 'gray',
    [Color.WARNING]: 'yellow',
    [Color.SUCCESS]: 'green',
};

const sizeClass = function(size: Size) {
    switch(size) {
        case Size.XS:
            return "text-xs px-1.5 py-0.5"
        case Size.SM:
            return "text-sm px-2 py-1"
        case Size.MD:
            return "px-2.5 py-1.5"
        case Size.LG:
            return "text-lg px-3.5 py-2.5"
        case Size.XL:
            return "text-xl px-5 py-3"
    }
}

const semanticColorToTailwindColor = function(color: Color) : string {
    return tailwindColorMap[color]
}

export const cssClass = function(variant: Variant, color: Color):string {
    const tailwindColor = semanticColorToTailwindColor(color);
    switch(variant) {
        case Variant.FLAT:
            return `bg-${tailwindColor}-400 text-white hover:bg-${tailwindColor}-300`;
        case Variant.GRADIENT:
        case Variant.INVERTED:
            return `bg-transparent text-${tailwindColor}-300 hover:bg-${tailwindColor}-300 hover:text-white`;
        case Variant.LIGHT:
            return `bg-${tailwindColor}-300 text-${tailwindColor}-900 hover:bg-${tailwindColor}-400`;
        case Variant.OUTLINE:
            return `bg-white text-${tailwindColor}-400 border-${tailwindColor}-300`;
    }
}

export const buttonCssClass = function(variant: Variant, color: Color, size: Size) {
    return `${cssClass(variant, color)} ${sizeClass(size)}`;
}