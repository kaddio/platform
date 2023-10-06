import { browser } from "$app/environment";
import { getContext } from "svelte";
import { readable, writable } from "svelte/store";

export let token = writable();

export let regionBannerDismiss;

if(browser){
    if(sessionStorage.getItem('token')){
        token = writable(JSON.parse(sessionStorage.getItem('token')));
    }

    token.subscribe(function(val){
        if(val){
            sessionStorage.setItem('token', JSON.stringify(val));
        }

        else{
            sessionStorage.removeItem('token');
        }
    });

    regionBannerDismiss = writable(localStorage.regionBannerDismiss === 'true');
    regionBannerDismiss.subscribe((value) => localStorage.regionBannerDismiss = JSON.stringify(value))
}

const translations = {
    "Kontakta oss": {
        en: 'Contact',
        es: 'Contactar'
    },
    "Skapa konto": {
        en: 'Create account',
        es: 'Crear una cuenta'
    },
    "skapa konto": {
        en: 'create account',
        es: 'crear una cuenta'
    },
    "Pris": {
        en: 'Price',
        es: 'Precio'
    },
    "Avtal": {
        en: 'Legal',
        es: 'Legal'
    },
    "Support": {
        en: 'Support',
        es: 'Soporte'
    },
    "Hjälpcenter": {
        en: 'Help center',
        es: 'Centro de ayuda'
    },
    "Logga in": {
        en: 'Login',
        es: 'Iniciar sesión'
    },
    "Eller": {
        en: 'Or',
        es: 'Y'
    },
    "Tjänster": {
        en: 'Services',
        es: 'Funciones'
    },
    "Journal": {
        en: 'Medical record',
        es: 'Historia clínica'
    },
    "Journalsystem": {
        en: 'Electronic medical record',
        es: 'Historia clínica'
    },
    "Tidsbokning": {
        en: 'Booking',
        es: 'Sistema de reservas'
    },
    "Onlinebokning": {
        en: 'Online booking',
        es: 'Sistema de reservas'
    },
    "Kommunikation": {
        en: 'Communication',
        es: 'Vídeo y chat encriptados'
    },
    "Fakturering": {
        en: 'Invoicing',
        es: 'Sistema de facturación'
    },
    "Dokument": {
        en: 'Documents',
        es: 'Documentos'
    },
    "Formulär": {
        en: 'Forms',
        es: 'Formularios'
    },
    "Video": {
        en: 'Video',
        es: 'Vídeo'
    },
    "Användarvillkor": {
        en: 'Terms of service',
        es: 'Condiciones de uso'
    },
    "Sekretesspolicy": {
        en: 'Privacy policy',
        es: 'Política de privacidad'
    },
    "Språk och region": {
        en: 'Language and region',
        es: 'Idioma y región'
    },
    "Kaddio finns anpassat för flera länder och regioner, välj region och språk här": {
        en: 'Kaddio is customized for several countries and regions, choose region and language here',
        es: 'Kaddio está personalizado para varios países y regiones. Elige la región y el idioma aquí',
    },
    "Det tar bara några minuter att komma igång.": {
        en: 'Getting started only takes a few minutes.',
        es: 'Comenzar solo toma unos minutos.',
    },
    "Kostnadsfritt i 1 månad.": {
        en: 'Free for one month.',
        es: 'Gratis por un mes.',
    },
    "Förnamn": {
        en: 'Firstname',
        es: 'Nombre'
    },
    "Efternamn": {
        en: 'Lastname',
        es: 'Apellidos'
    },
    "E-post": {
        en: 'Email address',
        es: 'Correo-e'
    },
    "Företagsnamn": {
        en: 'Business name',
        es: 'Nombre de la organización'
    },
    "Land": {
        en: 'Country',
        es: 'País'
    },
    "Sverige": {
        en: 'Sweden',
        es: 'Suecia'
    },
    "Finland": {
        en: 'Finland',
        es: 'Finlandia'
    },
    "Norge": {
        en: 'Norway',
        es: 'Noruega'
    },
    "Danmark": {
        en: 'Denmark',
        es: 'Dinamarca'
    },
    "Spanien": {
        en: 'Spain',
        es: 'España'
    },
    "Någon annanstans": {
        en: 'Somewhere else',
        es: 'En algún otro lugar'
    },
    "Välj annat": {
        en: 'Choose other',
        es: 'Elige otro'
    },
    "Region": {
        en: 'Region',
        es: 'Región'
    },
    "Välj annat land eller region för att se innehåll som finns där du är.": {
        en: 'Choose another country or region to see content specific to your location',
        es: 'Elige otro país o región para ver contenido específico a tu ubicación'
    },
    "Läs mer": {
        en: 'Learn more',
        es: 'Descubre más'
    },
    "Modul": {
        en: 'Module',
        es: 'Módulo'
    },
    "Månadspris / användare": {
        en: 'Monthly price / user',
        es: 'Precio mensual / usuario'
    },
    "(ex moms)": {
        en: '(excl. VAT)',
        es: '(excl. IVA)'
    },
    "Gå dit": {
        en: 'Log in',
        es: 'Ir allí'
    },
    "Organisationen kunde inte hittas": {
        en: 'The organization could not be found',
        es: 'Organización no encontrada'
    },
    "Kontrollera vilken URL du skrivit in. Du kan hitta din URL i det första mail du fick ifrån Kaddio när du skapat konto": {
        en: 'Check the URL you have entered. You can find your URL in the first email you received from Kaddio when you created your account.',
        es: 'Verifica la URL que has ingresado. Puedes encontrar tu URL en el primer correo electrónico que recibiste de Kaddio cuando creaste tu cuenta.'
    },
    "Kaddio Hjälpcenter": {
        en: "Visit Help Center",
        es: 'Centro de ayuda de Kaddio'
    },
    "Kontakta sälj": {
        en: "Contact sales",
        es: 'Contactar ventas'
    },
    "Prova demo": {
        en: "Try demo",
        es: 'Probar demo'
    },
    "Visa alla tjänster": {
        en: "View all services",
        es: 'Ver todos los servicios'
    },
    "Kundberättelser": {
        en: "Case studies",
        es: 'Casos de estudio'
    },
    "Verifiera identitet": {
        en: "Verify your identity",
        es: "Verify your identity",
    },
    "Ev. rabattkod löser du in i Kaddio efter att du startat ditt konto.": {
        en: "You redeem the discount code in Kaddio after you have created your account.",
        es: "Si tienes un código promocional puedes canjearlo luego de crear una cuenta en Kaddio.",
    },
    "Nyfiken på Kaddio": {
        en: "Curious about Kaddio",
        es: "Curioso sobre Kaddio",
    },
    "Kontakta support": {
        en: "Contact support",
        es: "Contactar soporte",
    },
}

const links = {
    journalsystem: {
        en: 'electronic-medical-record',
        es: 'historia-clinica'
    },

    onlinebokning: {
        en: 'online-booking',
        es: 'sistema-de-reservas'
    },

    kommunikation: {
        en: 'communication',
        es: 'video-y-chat-encriptados'
    },

    fakturering: {
        en: 'invoicing',
        es: 'sistema-de-facturacion'
    },
    formulär: {
        en: 'forms',
        es: 'formularios'
    },
    uppgifter: {
        en: 'todos',
        es: 'tareas'
    },
    dokument: {
        en: 'documents',
        es: 'documentos'
    },
    rapporter: {
        en: 'reports',
        es: 'informes'
    },
}

export let link = readable(function(name, lang = getContext('lang')){
    const translatedLink = (lang == 'sv') ? name : links[name][lang];

    return `/${lang}/${translatedLink}`;
});

export let _ = readable(function(phrase, lang = getContext('lang')){
    const fallbackLang = 'sv';

    function phraseExist(phrase, lang){
        return !!(translations[phrase] && translations[phrase][lang]);
    }

    if(lang == fallbackLang || lang == undefined || !phraseExist(phrase, lang)){
        return phrase;
    }

    return translations[phrase][lang];
});
