import { browser } from "$app/environment";
import { getContext } from "svelte";
import { readable, writable } from "svelte/store";

export let token = readable();

export let regionBannerDismiss;

if(browser){
    if(sessionStorage.getItem('token')){
        token = readable(JSON.parse(sessionStorage.getItem('token')));
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
        es: 'La empreza'
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
        es: 'Iniciar seción'
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
    "Tidsbokning": {
        en: 'Booking',
        es: 'Sistema de reservas'
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
        es: 'Conditiones de uso'
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
        es: 'Kaddio is customized for several countries and regions, choose region and language here',
    },
    "Det tar bara några minuter att komma igång och du betalar bara för vad du använder.": {
        en: 'Getting started only takes a few minutes och you only pay for what you use.',
        es: 'Comenzar solo toma unos minutos y solo paga por lo que usa.',
    },
    "Kostnadsfritt i 1 månad.": {
        en: 'Free of charge for one month',
        es: 'Gratis por un mes',
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
        en: 'Email',
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
        es: 'Elija otro país o región para ver contenido específico de su ubicación'
    },
    "Läs mer": {
        en: 'Learn more',
        es: 'Aprende más'
    }
}

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
