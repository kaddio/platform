import { hmac } from "$lib/hmac.js";
import { signInStates } from "$lib/sign-in-states.js";
import { redirect } from "@sveltejs/kit";

const url = "https://appapi2.test.bankid.com/";

type OrderResponse = {
    orderRef: string,
    autoStartToken: string,
    qrStartToken: string,
    qrStartSecret: string
}

type OrderOptions = {
    endUserIp: string,
    requirement?: unknown
}

const order = function(options: OrderOptions): OrderResponse{
    const autoStartSecret = "123";

    const shouldBeARealFetchSomeDay = function(){
        return {
            autoStartToken: "123",
            orderRef: "123",
            qrStartToken: "123",
            qrStartSecret: "123"
        }
    }

    const {autoStartToken, orderRef, qrStartToken, qrStartSecret} = shouldBeARealFetchSomeDay();

    return {
        autoStartToken,
        orderRef,
        qrStartToken,
        qrStartSecret
    }
}

// "Create order"
const begin = function(stateToken: string){
    console.log("begin")
    signInStates[stateToken].start = new Date();
    signInStates[stateToken].lastFetch = new Date();   

    // Fetch something from bankid ...
    const {orderRef, autoStartToken} = order();

    signInStates[stateToken].orderRef = orderRef;
    signInStates[stateToken].autoStartToken = autoStartToken;
    
}

type CollectResponse = {
    status: string,
    hintCode: string,
    completionData?: string
}

const collect = function(orderRef: string): CollectResponse{

    return {

    }
}

const possiblyCollect = function(stateToken: string){
    // Fetch something from bankid ...
    console.log("possiblyCollect")

    const now = new Date();

    const elapsedTimeSinceLastPoll: number = now.getTime() - signInStates[stateToken].lastFetch.getTime()
    console.log(elapsedTimeSinceLastPoll)

    const shouldCollect = elapsedTimeSinceLastPoll > 1000;

    if(shouldCollect){
        signInStates[stateToken].lastFetch = now;

        const orderRef = signInStates[stateToken].orderRef;
        collect(orderRef);
    }
}

const update = function(stateToken: string){
    console.log("update");

    if(signInStates[stateToken].start){
        possiblyCollect(stateToken);
    }

    else{
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
    }

    update(stateToken);

    const start = signInStates[stateToken].start;
    
    depends('app:bankid');

    const now = new Date();

    const elapsedTimeInSeconds = Math.floor((now.getTime() - start.getTime()) / 1000);

    const qrStartSecret = '123';
    const qrStartToken = '456';

    const qrAuthCode = hmac(qrStartSecret, elapsedTimeInSeconds + "");

    const qr = `bankid.${qrStartToken}.${elapsedTimeInSeconds}.${qrAuthCode}`;
    // console.log(qr);

    return {
        qr
    }

}
