export type Region = {
    lang: string,
    label: string,
    href: string,
    defaultCountryCode: string
}

export const regions = {
    SE: {
        lang: 'sv',
        label: 'Sverige',
        href: '/sv',
        defaultCountryCode: 'se'
    },
    ES: {
        lang: 'es',
        label: 'Spanien',
        href: '/es',
        defaultCountryCode: 'es'
    },
    EN: {
        lang: 'en',
        label: 'Global',
        href: '/en',
        defaultCountryCode: 'se'
    }
}

const matchers = {
    SE: 'SE',
    FI: 'SE',
    DK: 'SE',
    NO: 'SE',

    ES: 'ES',
    CR: 'ES',
    MX: 'ES',
    CO: 'ES',
    AR: 'ES',
    PE: 'ES',
    VE: 'ES',
    CL: 'ES',
    GT: 'ES',
    EC: 'ES',
    BO: 'ES',
    CU: 'ES',
    DO: 'ES',

    EN: 'EN',
    US: 'EN',
    AU: 'EN'
}


export const getRegion = function(geo: string): Region{
    return regions[matchers[geo]] || regions['EN'];
}

export const countryCodeFromLang = function(lang: string){
    return Object.entries(regions).find(([key, value]) => value.lang == lang)[0];
}