import { safeCredentialsFromStateToken } from '$lib/safe-credentials.js';
import { signInStates } from '$lib/sign-in-states';

import { redirect } from '@sveltejs/kit';

export const load = async function({url}){
    const stateToken = url.searchParams.get('stateToken');

    console.log(stateToken)

    if(signInStates[stateToken].orgs?.length == 1){
        const url = signInStates[stateToken].orgs[0].url;
        throw redirect(307, `http://localhost:3000/loginWithToken/${signInStates[stateToken].token.token}`);
    }

    if(stateToken && signInStates[stateToken]){
        return safeCredentialsFromStateToken(stateToken, signInStates);
    }

    throw redirect(307, '/sv/sign-in2')
}

