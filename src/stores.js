import { browser } from "$app/environment";
import { writable } from "svelte/store";

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
