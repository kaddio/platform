import { fail, redirect } from '@sveltejs/kit';
import { signInStates } from './sign-in-states';
import { apiUrl } from './apiUrl';

const f = async function(data){
    try{
        const response = await fetch('http://127.0.0.1:3000/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        const json = await response.json();
    
        return {
            response,
            json,
            credentials: json
        };
    }

    catch(e){
        console.log('error')
        console.log(e);
        return false;
    }
}

export const createOrUpdateState = function(stateToken, credentials){
    // console.log(stateToken, credentials);

    signInStates[stateToken] = credentials;
}

const handleTokenResponse = function(stateToken, {url}, redirect){
    const credentials = signInStates[stateToken];
    
    if(credentials?.token?.token){
        // throw redirect(301, `https://ed33cb4da6f6.ngrok.app/loginWithToken/${json.token.token}`);

        let destination = `/orgChooser?stateToken=${stateToken}`;

        if (url.searchParams.has('redirectTo')) {
            destination = `${url.searchParams.get('redirectTo')}/loginWithToken/${credentials.token.token}`;
        }

        throw redirect(307, destination);
    }    
}

const addVerificationCode = function(stateToken: string, code: string): void{
    if(!signInStates[stateToken].verificationCodes){
        signInStates[stateToken].verificationCodes = [];
    }

    signInStates[stateToken].verificationCodes.push(code);
}

const sendSms = async function(stateToken: string){
    if(!signInStates[stateToken].sms){
        return
    }

    const number = signInStates[stateToken].sms[0];

    const code = '1234';
    const message = `Your One-time code is ${code}`;
    console.log('Emulate send sms... Code is 1234')

    try{
        const response = await fetch(apiUrl() + '/api/sendSms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message,
                number
            })
        });
        
        const json = await response.json();
        console.log(json);

    }

    catch(e){
        console.log('error')
        console.log(e);
    }

    addVerificationCode(stateToken, code)
}


const sendEmail = async function(stateToken: string){
    if(!signInStates[stateToken].sms){
        return
    }

    const email = signInStates[stateToken].email[0];

    const code = '1234';
    const message = `Your One-time code is ${code}`;

    try{
        const response = await fetch(apiUrl() + '/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message,
                email
            })
        });
        
        // const json = await response.json();

    }

    catch(e){
        console.log('error')
        console.log(e);
    }

    addVerificationCode(stateToken, code)
}

export const verify = async function({request, url}){
    const data = await request.formData();
    const jsonData = Object.fromEntries(data.entries());

    const stateToken = await url.searchParams.get('stateToken');

    if(!stateToken || !signInStates[stateToken]){
        return fail(400);
    }
    

    if(jsonData.sendSms){
        sendSms(stateToken);

        signInStates[stateToken].codeIsSent = true;

        return {
            codeIsSent: true
        }
    }

    if(jsonData.sendEmail){
        sendEmail(stateToken);

        signInStates[stateToken].codeIsSent = true;

        return {
            codeIsSent: true
        }
    }

    if(signInStates[stateToken].verificationCodes.includes(jsonData['verify-sms'])){
        signInStates[stateToken].credentials.sms = true;

    }

    console.log("Verify:")
    console.log(signInStates[stateToken])

    // If has verification state too ...
    let {credentials} = await f(signInStates[stateToken]);

    if(credentials.token){
        signInStates[stateToken] = {
            ...signInStates[stateToken],
            ...credentials
        }
    }


    handleTokenResponse(stateToken, {url}, redirect);

    // else if(jsonData['verify-sms'] == signInStates[stateToken].secret){
    //     return {
    //         ok: true
    //     };
    // }

}

export const signIn = async function({request, url}){

    const data = await request.formData();
    const jsonData = Object.fromEntries(data.entries());

    const orgUrls = url.searchParams.get('urls')?.split(',');

    let {credentials, orgs} = await f({
        credentials: jsonData,
        ...(orgUrls.length > 0 ? {urls: orgUrls} : {})
    });

    credentials = {
        ...credentials,
        credentials: jsonData
    }

    console.log(credentials)

    // const stateToken = await url.searchParams.get("stateToken");

    const stateToken = crypto.randomUUID();
    signInStates[stateToken] = credentials;


    // handleTokenResponse(stateToken, {url}, redirect);
    
    // // Authenticated, redirect...
    // if(credentials?.token?.token){

    //     signInStates[credentials.stateToken].orgs = credentials.orgs;
    //     // throw redirect(301, `https://ed33cb4da6f6.ngrok.app/loginWithToken/${json.token.token}`);

    //     let destination = `/orgChooser?stateToken=${stateToken}`;

    //     if (url.searchParams.has('redirectTo')) {
    //         destination = `${url.searchParams.get('redirectTo')}/loginWithToken/${credentials.token.token}`;
    //     }

    //     throw redirect(307, destination);
    // }

    // Authenticated, must verify...
    // if(credentials?.verified && credentials?.mustVerifyWithOneOf){
    if(credentials?.token || credentials?.mustVerifyWithOneOf){
            // console.log("User must now verify it's identity")

        // signInStates[stateToken].secret = "1234";

        createOrUpdateState(stateToken, credentials);

        throw redirect(307, `/sv/verify?stateToken=${stateToken}`);
    }

    // Unauthorized, stay and try again
    return fail(400, credentials);
}
