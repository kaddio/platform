import { hmac } from "$lib/hmac.js";
import { signInStates } from "$lib/sign-in-states.js";
import { redirect } from "@sveltejs/kit";

const begin = function(stateToken: string): void{
    signInStates[stateToken].start = new Date();
    signInStates[stateToken].lastFetch = new Date();   

    // Fetch something from bankid ...
}

const poll = function(stateToken: string){
    // Fetch something from bankid ...
}

const update = function(stateToken: string){
    if(!signInStates[stateToken].start){
        begin(stateToken);
    }
}

export function load({url, depends}){
    if(!url.searchParams.get('stateToken')){
        throw redirect(307, '/sv/bankid/')
    }

    const stateToken = url.searchParams.get('stateToken');

    if(!signInStates[stateToken]){
        signInStates[stateToken] = {}

        update(stateToken);
    }

    const start = signInStates[stateToken].start;
    
    depends('app:bankid');

    const now = new Date();

    const elapsedTimeInSeconds = Math.floor((now.getTime() - start.getTime()) / 1000);

    const qrStartSecret = '123';
    const qrStartToken = '456';

    const qrAuthCode = hmac(qrStartSecret, elapsedTimeInSeconds + "");

    const qr = `bankid.${qrStartToken}.${elapsedTimeInSeconds}.${qrAuthCode}`;
    console.log(qr);

    return {
        qr
    }

}
