import { safeCredentialsFromStateToken } from '$lib/safe-credentials.js';
import { signInStates } from '$lib/sign-in-states';
import { signIn, verify } from '$lib/signIn.js';

import { redirect } from '@sveltejs/kit';


export const actions = {
    async default(event){
        return verify(event)
    }
}


export const load = async function({url}){
    const stateToken = url.searchParams.get('stateToken');

    if(stateToken && signInStates[stateToken]){
        return safeCredentialsFromStateToken(stateToken, signIn);
    }

    throw redirect(307, '/sv/sign-in2')
}
