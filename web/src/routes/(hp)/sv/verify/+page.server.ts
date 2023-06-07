import { safeCredentialsFromStateToken } from '$lib/safe-credentials.js';
import { signInStates } from '$lib/sign-in-states';
import { verify } from '$lib/signIn.js';

import { redirect } from '@sveltejs/kit';


export const actions = {
    async default(event){
        return verify(event)
    }
}


export const load = async function({url}){
    const stateToken = url.searchParams.get('stateToken');

    if(stateToken && signInStates[stateToken]?.token){
        const destination = `/orgChooser?stateToken=${stateToken}`;

        throw redirect(307, destination)       
    }

    if(stateToken && signInStates[stateToken]){
        return safeCredentialsFromStateToken(stateToken, signInStates);
    }

    throw redirect(307, '/sv/sign-in2')
}
