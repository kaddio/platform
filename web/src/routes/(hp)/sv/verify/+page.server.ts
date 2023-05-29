import { signInStates, verify } from '$lib/signIn.js'
import { error, redirect } from '@sveltejs/kit';


export const actions = {
    async default(event){
        return verify(event)
    }
}


const safeCredentialsFromStateToken = function(stateToken: string){
    const credentials = signInStates[stateToken] || {};

    console.log(credentials)

    return {
        verified: credentials.verified,
        mustVerifyWithOneOf: credentials.mustVerifyWithOneOf
    }
}
export const load = async function({url}){
    const stateToken = url.searchParams.get('stateToken');

    if(stateToken && signInStates[stateToken]){
        return safeCredentialsFromStateToken(stateToken);
    }

    throw redirect(307, '/sv/sign-in2')
}
