import { browser } from "$app/environment";
import { getContext } from "svelte";
import { readable, writable } from "svelte/store";

export let token = writable();

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
}

const translations = {
    "Pris": {
        en: 'Price',
        es: 'Precio'
    },
    "Du får inte gå över": {
        en: "You shall not pass",
        es: "No hay passadena"
    }
}

export let _ = writable(function(phrase){
    const lang = getContext('lang');
    console.log("Lang: ", lang)

    if(lang == 'sv' || lang == undefined){
        return phrase;
    }

    return translations[phrase][lang];
});
