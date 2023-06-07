import { promises } from 'node:fs';
import { Agent } from 'node:https'
import type { AxiosInstance } from "axios";
import axios from "axios";
import { hmac } from "$lib/hmac.js";

const pfx = await promises.readFile('src/lib/bankid/FPTestcert4_20220818.p12');
const ca = await promises.readFile('src/lib/bankid/cert/test.ca');
const passphrase = 'qwerty123';

const httpsAgent = new Agent({
    pfx,
    passphrase,
    ca
});

const url = "https://appapi2.test.bankid.com";

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

export const order = async function(options: OrderOptions): Promise<OrderResponse>{

    let res;

    try{
        res = await axios(url + "/rp/v6.0/auth", {
            method: 'POST',
            httpsAgent,
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({
                ...options
            })

        });
        // console.log(res.data)

    }
    
    catch(e){
        // console.error(e)

    }

    return res?.data;
}


type CollectResponse = {
    status: string,
    hintCode: string,
    completionData?: string
}

export const cancel = async function(orderRef: string): Promise<boolean>{
    try{
        await axios(url + "/rp/v6.0/cancel", {
            method: 'POST',
            httpsAgent,
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({
                orderRef
            })

        });

        return true;
    }
    
    catch(e){
        // console.error(e);

        return false;
    }
}

export const collect = async function(orderRef: string): Promise<CollectResponse>{

    let res;

    console.log('collect')

    try{
        res = await axios(url + "/rp/v6.0/collect", {
            method: 'POST',
            httpsAgent,
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({
                orderRef
            })

        });

    }
    
    catch(e){
        // console.error(e)
    }

    return res?.data;
}

export const qr = function(start: Date, qrStartSecret: string, qrStartToken: string): string{
    const now = new Date();

    const elapsedTimeInSeconds = Math.floor((now.getTime() - start.getTime()) / 1000);

    const qrAuthCode = hmac(qrStartSecret, elapsedTimeInSeconds + "");

    return `bankid.${qrStartToken}.${elapsedTimeInSeconds}.${qrAuthCode}`;
}