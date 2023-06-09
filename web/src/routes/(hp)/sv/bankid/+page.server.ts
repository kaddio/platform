import { cancel, collect, order, qr } from "$lib/bankid/bankid.js";
import { safeCredentialsFromStateToken } from "$lib/safe-credentials.js";
import { signInStates } from "$lib/sign-in-states.js";
import { fail, redirect } from "@sveltejs/kit";

// "Create order"
const begin = async function(stateToken: string){
    console.log("begin", stateToken);

    // Fetch something from bankid ...
    const orderResponse = await order({endUserIp: "127.0.0.1"});

    signInStates[stateToken].bankid = {
        ...orderResponse,
        ...signInStates[stateToken].bankid
    };
    
    signInStates[stateToken].bankid.start = new Date();
    signInStates[stateToken].bankid.lastFetch = new Date();   
    signInStates[stateToken].bankid.status = 'pending';

    return orderResponse;
}


const possiblyCollect = async function(stateToken: string){
    const now = new Date();

    const elapsedTimeSinceLastPoll: number = now.getTime() - signInStates[stateToken].bankid.lastFetch.getTime()


    const shouldCollect = elapsedTimeSinceLastPoll > 3000;

    if(shouldCollect){
        console.log('updating..')
        signInStates[stateToken].bankid.lastFetch = now;

        const collectResponse = await collect(signInStates[stateToken].bankid.orderRef);

        if(collectResponse){
            signInStates[stateToken].bankid.status = collectResponse.status;
            signInStates[stateToken].bankid.hintCode = collectResponse.hintCode;
            signInStates[stateToken].bankid.completionData = collectResponse.completionData;
        }
    }
}

const update = async function(stateToken: string){
    const bankid = signInStates[stateToken].bankid;
    const status = bankid?.status;

    if(!bankid){
        signInStates[stateToken].bankid = {};
    }

    if(!bankid?.device){
        console.log('returning....')
        return;
    }
    

    switch(status){
        case 'pending':
            await possiblyCollect(stateToken);
            break;

        case 'complete':
            break;

        default:
            console.log(3)
            if(!bankid?.start){
                await begin(stateToken);

            }
    }
}

const cancelFromStateToken = async function(stateToken: string): Promise<boolean>{
    const orderRef = signInStates[stateToken].bankid.orderRef;
    const result = await cancel(orderRef);

    if(result){
        signInStates[stateToken].bankid.status = 'failed';
    }
}


const qrFromStateToken = function(stateToken: string){
    if(!signInStates[stateToken].bankid?.start){
        return false;
    }

    const qrStartSecret = signInStates[stateToken].bankid.qrStartSecret;
    const qrStartToken = signInStates[stateToken].bankid.qrStartToken;

    return qr(signInStates[stateToken].bankid.start, qrStartSecret, qrStartToken);
}

const tokenFromPnr = async function(pnr: number){
    
    let {credentials, orgs} = await f({
        credentials: jsonData,
        ...(orgUrls.length > 0 ? {urls: orgUrls} : {})
    });

}

export async function load({url, depends}){    
    depends('app:bankid');

    const stateToken = url.searchParams.get('stateToken');

    if(!stateToken){
        const stateToken = crypto.randomUUID();

        signInStates[stateToken] = {};

        throw redirect(307, url.pathname + '?stateToken=' + stateToken)    
    }

    if(!signInStates[stateToken]){
        throw redirect(307, url.pathname);
    }
    
    await update(stateToken);

    if(signInStates[stateToken].bankid?.status == 'complete' && signInStates[stateToken].bankid?.completionData?.user){
        const pnr = signInStates[stateToken].bankid.completionData.user.personalNumber;
        console.log(pnr);
        const token = tokenFromPnr(pnr);
        
    }

    let _qr;

    switch(signInStates[stateToken].bankid.device){
        case 'sameDevice':
            console.log('sameDevice')
            break;

        case 'otherDevice':
            if(signInStates[stateToken].bankid.status == 'pending'){
                _qr = qrFromStateToken(stateToken);
            }

            break;    
    }

    console.log(signInStates[stateToken])

    return {
        ...safeCredentialsFromStateToken(stateToken, signInStates),
        ...(_qr ? {qr: _qr}: {})
    }

}


export const actions = {
    async default({request, url}){
        console.log('defailt')
        const stateToken = url.searchParams.get('stateToken');

        const data = await request.formData();
        const jsonData = Object.fromEntries(data.entries());

        if(jsonData.cancel == 1 || jsonData.cancel == "1"){
            console.log('aborting...')
            cancelFromStateToken(stateToken);
            throw redirect(307, `bankid`);
        }

        switch(jsonData.device){

            case 'otherDevice': {
                signInStates[stateToken].bankid.device = 'otherDevice'
                await update(stateToken);
                break;    
            }

            case 'sameDevice': {
                signInStates[stateToken].bankid.device = 'sameDevice';

                await update(stateToken);
                const autoStartToken = signInStates[stateToken].bankid.autoStartToken;
                console.log(`bankid:///?autostarttoken=[${autoStartToken}]`);
                throw redirect(307, `bankid:///?autostarttoken=[${autoStartToken}]`);
            }
        }

        console.log(signInStates[stateToken].bankid);
    }
}