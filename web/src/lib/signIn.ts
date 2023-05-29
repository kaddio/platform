import { fail, redirect } from '@sveltejs/kit';

// Should reside in a database with expiration date etc. etc.
export let signInStates = {};

const f = async function(data){
    try{
        const response = await fetch('https://0e8476be2a2f.ngrok.app/api/token', {
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

const handleTokenResponse = function(credentials, {url}, redirect){
    console.log(credentials)
    if(credentials?.token?.token){
        // throw redirect(301, `https://ed33cb4da6f6.ngrok.app/loginWithToken/${json.token.token}`);

        let destination = `/orgChooser?stateToken=${credentials.token.token}`;

        if (url.searchParams.has('redirectTo')) {
            destination = `${url.searchParams.get('redirectTo')}/loginWithToken/${credentials.token.token}`;
        }

        throw redirect(307, destination);
    }    
}

const sendSms = async function(stateToken){
    console.log('Emulate send sms... Code is 1234')
    const code = "1234";

    signInStates[stateToken].smsVerificationCodes = [code];
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

        signInStates[stateToken].smsIsSent = true;

        return {
            smsIsSent: true
        }
    }

    if(signInStates[stateToken].smsVerificationCodes.includes(jsonData['verify-sms'])){
        signInStates[stateToken].credentials.sms = true;

    }

    console.log("Verify:")
    console.log(signInStates[stateToken])

    // If has verification state too ...
    let {credentials} = await f(signInStates[stateToken]);

    handleTokenResponse(credentials, {url}, redirect);

    // else if(jsonData['verify-sms'] == signInStates[stateToken].secret){
    //     return {
    //         ok: true
    //     };
    // }

}

export const signIn = async function({request, url}){

    const data = await request.formData();
    const jsonData = Object.fromEntries(data.entries());

    let {credentials} = await f({
        credentials: jsonData
    });

    // console.log(jsonData)

    credentials = {
        ...credentials,
        credentials: jsonData
    }

    if(!credentials?.stateToken){
        credentials.stateToken = crypto.randomUUID();
        createOrUpdateState(credentials.stateToken, credentials)
    }

    // Authenticated, redirect...
    if(credentials?.token?.token){
        // throw redirect(301, `https://ed33cb4da6f6.ngrok.app/loginWithToken/${json.token.token}`);

        let destination = `/orgChooser?stateToken=${credentials.token.token}`;

        if (url.searchParams.has('redirectTo')) {
            destination = `${url.searchParams.get('redirectTo')}/loginWithToken/${credentials.token.token}`;
        }

        throw redirect(307, destination);
    }

    // Authenticated, must verify...
    else if(credentials?.verified && credentials?.mustVerifyWithOneOf){
        // console.log("User must now verify it's identity")

        const stateToken = url.searchParams.get('stateToken') || crypto.randomUUID();

        // signInStates[stateToken].secret = "1234";

        createOrUpdateState(stateToken, credentials);

        throw redirect(307, `/sv/verify?stateToken=${stateToken}`);
    }

    // Unauthorized, stay and try again
    return fail(400, credentials);
}
