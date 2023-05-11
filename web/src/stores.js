import { browser } from "$app/environment";
import { getContext } from "svelte";
import { readable } from "svelte/store";

export let token = readable();

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
}

const translations = {
    "Kontakta oss": {
        en: 'Contact us',
        es: 'Contactar'
    },
    "Skapa konto": {
        en: 'Create account',
        es: 'Crear una cuenta'
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
    "Logga in": {
        en: 'Login',
        es: 'Iniciar seción'
    }
}

export let _ = readable(function(phrase){
    const fallbackLang = 'sv';
    const lang = getContext('lang');

    function phraseExist(phrase, lang){
        return !!(translations[phrase] && translations[phrase][lang]);
    }

    console.log("Lang: ", lang)

    if(lang == fallbackLang || lang == undefined || !phraseExist(phrase, lang)){
        return phrase;
    }

    return translations[phrase][lang];
});
