import { browser } from '$app/environment';
import { getContext } from 'svelte';
import { readable, writable } from 'svelte/store';
import { dev } from '$app/environment';

export let token = writable();

export let regionBannerDismiss;

if (browser) {
    if (sessionStorage.getItem('token')) {
        token = writable(JSON.parse(sessionStorage.getItem('token')));
    }

    token.subscribe(function (val) {
        if (val) {
            sessionStorage.setItem('token', JSON.stringify(val));
        } else {
            sessionStorage.removeItem('token');
        }
    });

    regionBannerDismiss = writable(localStorage.regionBannerDismiss === 'true');
    regionBannerDismiss.subscribe(
        (value) => (localStorage.regionBannerDismiss = JSON.stringify(value))
    );
}

const translations = {
    'Tack!': {
        en: 'Thank you!',
        es: '¡Gracias!'
    },

    'Kontot är skapat, kolla din mail för att logga in.': {
        en: 'The account is created, please check your mail to log in.',
        es: 'La cuenta ha sido creada, revisa tu correo electrónico para iniciar sesión.'
    },

    'Kontakta oss': {
        en: 'Contact',
        es: 'Contactar'
    },
    'Skapa konto': {
        en: 'Create account',
        es: 'Crear una cuenta'
    },
    Nyhetsbrev: {
        en: 'Newsletter',
        es: 'Boletín de noticias'
    },
    'skapa konto': {
        en: 'create account',
        es: 'crear una cuenta'
    },
    Pris: {
        en: 'Price',
        es: 'Precio'
    },
    Kundberättelser: {
        en: 'Case studies',
        es: 'Casos de estudio'
    },
    Kundberättelse: {
        en: 'Case study',
        es: 'Caso de estudio'
    },
    Avtal: {
        en: 'Legal',
        es: 'Legal'
    },
    Support: {
        en: 'Support',
        es: 'Soporte'
    },
    Hjälpcenter: {
        en: 'Help center',
        es: 'Centro de ayuda'
    },
    'Logga in': {
        en: 'Login',
        es: 'Iniciar sesión'
    },
    Eller: {
        en: 'Or',
        es: 'Y'
    },
    Tjänster: {
        en: 'Services',
        es: 'Funciones'
    },
    Journal: {
        en: 'Medical record',
        es: 'Historia clínica'
    },
    Journalsystem: {
        en: 'Electronic medical record',
        es: 'Historia clínica'
    },
    Tidsbokning: {
        en: 'Booking',
        es: 'Sistema de reservas'
    },
    Onlinebokning: {
        en: 'Online booking',
        es: 'Sistema de reservas'
    },
    Kommunikation: {
        en: 'Communication',
        es: 'Vídeo y chat encriptados'
    },
    'Chat och Video': {
        en: 'Chat and Video',
        es: 'Vídeo y Chat encriptados'
    },

    Fakturering: {
        en: 'Invoicing',
        es: 'Sistema de facturación'
    },
    Dokument: {
        en: 'Documents',
        es: 'Documentos'
    },
    Formulär: {
        en: 'Forms',
        es: 'Formularios'
    },
    Video: {
        en: 'Video',
        es: 'Vídeo'
    },
    Användarvillkor: {
        en: 'Terms of service',
        es: 'Condiciones de uso'
    },
    Sekretesspolicy: {
        en: 'Privacy policy',
        es: 'Política de privacidad'
    },
    'Språk och region': {
        en: 'Language and region',
        es: 'Idioma y región'
    },
    'Kaddio finns anpassat för flera länder och regioner, välj region och språk här': {
        en: 'Kaddio is customized for several countries and regions, choose region and language here',
        es: 'Kaddio está personalizado para varios países y regiones. Elige la región y el idioma aquí'
    },
    'Det tar bara några minuter att komma igång.': {
        en: 'Getting started only takes a few minutes.',
        es: 'Comenzar solo toma unos minutos.'
    },
    'Kostnadsfritt i 1 månad.': {
        en: 'Free for one month.',
        es: 'Gratis por un mes.'
    },
    Förnamn: {
        en: 'Firstname',
        es: 'Nombre'
    },
    Efternamn: {
        en: 'Lastname',
        es: 'Apellidos'
    },
    'E-post': {
        en: 'Email address',
        es: 'Correo-e'
    },
    Telefon: {
        en: 'Telephone',
        es: 'Teléfono'
    },
    Företagsnamn: {
        en: 'Business name',
        es: 'Nombre de la organización'
    },
    Land: {
        en: 'Country',
        es: 'País'
    },
    Sverige: {
        en: 'Sweden',
        es: 'Suecia'
    },
    Finland: {
        en: 'Finland',
        es: 'Finlandia'
    },
    Norge: {
        en: 'Norway',
        es: 'Noruega'
    },
    Danmark: {
        en: 'Denmark',
        es: 'Dinamarca'
    },
    Spanien: {
        en: 'Spain',
        es: 'España'
    },
    'Någon annanstans': {
        en: 'Somewhere else',
        es: 'En algún otro lugar'
    },
    'Välj annat': {
        en: 'Choose other',
        es: 'Elige otro'
    },
    Region: {
        en: 'Region',
        es: 'Región'
    },
    'Välj annat land eller region för att se innehåll som finns där du är.': {
        en: 'Choose another country or region to see content specific to your location',
        es: 'Elige otro país o región para ver contenido específico a tu ubicación'
    },
    'Läs mer': {
        en: 'Learn more',
        es: 'Descubre más'
    },
    Modul: {
        en: 'Module',
        es: 'Módulo'
    },
    'Månadspris / användare': {
        en: 'Monthly price / user',
        es: 'Precio mensual / usuario'
    },
    '(ex moms)': {
        en: '(excl. VAT)',
        es: '(excl. IVA)'
    },
    'Gå dit': {
        en: 'Log in',
        es: 'Ir allí'
    },
    'Organisationen kunde inte hittas': {
        en: 'The organization could not be found',
        es: 'Organización no encontrada'
    },
    'Inloggning till vald region stöds ej ännu.': {
        en: 'Login to this region is not yet supported',
        es: 'Aún no se puede iniciar sesión en esta región'
    },
    'Kontrollera vilken URL du skrivit in. Du kan hitta din URL i det första mail du fick ifrån Kaddio när du skapat konto':
        {
            en: 'Check the URL you have entered. You can find your URL in the first email you received from Kaddio when you created your account.',
            es: 'Verifica la URL que has ingresado. Puedes encontrar tu URL en el primer correo electrónico que recibiste de Kaddio cuando creaste tu cuenta.'
        },
    'Kaddio Hjälpcenter': {
        en: 'Visit Help Center',
        es: 'Centro de ayuda de Kaddio'
    },
    'Kontakta sälj': {
        en: 'Contact sales',
        es: 'Contactar ventas'
    },
    'Prova demo': {
        en: 'Try demo',
        es: 'Probar demo'
    },
    'Visa alla tjänster': {
        en: 'View all services',
        es: 'Ver todos los servicios'
    },
    'Verifiera identitet': {
        en: 'Verify your identity',
        es: 'Verify your identity'
    },
    'Ev. rabattkod löser du in i Kaddio efter att du startat ditt konto.': {
        en: 'You redeem the discount code in Kaddio after you have created your account.',
        es: 'Si tienes un código promocional puedes canjearlo luego de crear una cuenta en Kaddio.'
    },
    'Nyfiken på Kaddio': {
        en: 'Curious about Kaddio',
        es: 'Curioso sobre Kaddio'
    },
    'Kontakta support': {
        en: 'Contact support',
        es: 'Contactar soporte'
    },

    'Kaddio Journal har allt du behöver för att dokumentera verksamheten och journalföra klienter.':
        {
            en: 'Kaddio Journal has everything you need to document your business and journal clients.',
            es: 'Kaddio Journal tiene todo lo que necesitas para documentar tu negocio y registrar clientes.'
        },

    'Komplett bokningssystem och onlinebetalning som gör allt du förväntar dig.': {
        en: 'Complete booking system and online payment that does everything you expect.',
        es: 'Sistema de reservas completo y pago en línea que hace todo lo que esperas.'
    },

    'Kommunicera krypterat via chat eller video inom och utom organisationen.': {
        en: 'Communicate encrypted via chat or video within and outside the organization.',
        es: 'Comunícate de forma encriptada a través de chat o vídeo dentro y fuera de la organización.'
    },

    'Kaddio Fakturering är ett komplett faktureringsprogram för små och medelstora företag.': {
        en: 'Kaddio Invoicing is a complete invoicing program for small and medium-sized businesses.',
        es: 'Kaddio Invoicing es un programa de facturación completo para pequeñas y medianas empresas.'
    },

    'Sidan kunde inte hittas': {
        en: 'Page not found',
        es: 'Página no encontrada'
    },

    'Ursäkta, men vi kunde inte hitta sidan.': {
        en: 'Sorry, we couldn’t find the page you’re looking for.',
        es: 'Lo sentimos, no pudimos encontrar la página que buscas.'
    },

    'Tillbaks hem': {
        en: 'Back to home',
        es: 'Volver a inicio'
    },

    'Letar du behandling?': {
        en: 'Looking for care?',
        es: '¿Estás buscando tratamiento?'
    },
    'Sök här!': {
        en: 'Search here!',
        es: '¡Buscar aquí!'
    }
};

export const links = {
    'hitta-klinik': {
        sv: 'hitta-klinik'
    },

    'choose-country-region': {
        default: 'choose-country-region'
    },

    'about-us': {
        default: 'about-us'
    },

    1177: {
        sv: '1177'
    },

    career: {
        default: 'career'
    },

    support: {
        sv: 'support',
        en: 'support',
        es: 'support'
    },

    case: {
        sv: 'case',
        en: 'case'
    },

    'case/afobia': {
        sv: 'case/afobia',
        en: 'case/afobia'
    },

    'case/osteopatia-mallorca': {
        sv: 'case/osteopatia-mallorca',
        en: 'case/osteopatia-mallorca'
    },

    'case/spanda-healthcare': {
        sv: 'case/spanda-healthcare',
        en: 'case/spanda-healthcare'
    },

    'case/majornas-osteopati': {
        sv: 'case/majornas-osteopati',
        en: 'case/majornas-osteopati'
    },

    sales: {
        sv: 'sales',
        en: 'sales',
        es: 'sales'
    },

    'sign-in': {
        sv: 'sign-in',
        en: 'sign-in',
        es: 'sign-in'
    },

    create: {
        sv: 'create',
        en: 'create',
        es: 'create'
    },

    journalsystem: {
        sv: 'journalsystem',
        en: 'electronic-medical-record',
        es: 'historia-clinica'
    },

    onlinebokning: {
        sv: 'onlinebokning',
        en: 'online-booking',
        es: 'sistema-de-reservas'
    },

    kommunikation: {
        sv: 'kommunikation',
        en: 'communication',
        es: 'video-y-chat-encriptados'
    },

    fakturering: {
        sv: 'fakturering',
        en: 'invoicing',
        es: 'sistema-de-facturacion'
    },

    marknadsföring: {
        sv: 'marknadsföring',
        en: 'marketing',
        es: 'comercialización'
    }
};

export let link = readable(function (name, lang = getContext('lang')) {
    const translatedLink = lang == 'sv' ? name : links[name][lang];

    return `/${lang}/${translatedLink}`;
});

export let _ = readable(function (phrase, lang = getContext('lang')) {
    const fallbackLang = 'sv';

    function phraseExist(phrase, lang) {
        return !!(translations[phrase] && translations[phrase][lang]);
    }

    if (lang == fallbackLang || lang == undefined || !phraseExist(phrase, lang)) {
        return phrase;
    }

    return translations[phrase][lang];
});
