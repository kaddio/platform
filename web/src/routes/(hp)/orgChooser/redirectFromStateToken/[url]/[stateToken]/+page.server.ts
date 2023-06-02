import { signInStates } from '$lib/sign-in-states';

import { error, redirect } from '@sveltejs/kit';

export const load = async function({url, params}){    
    const stateToken = params.stateToken;
    console.log(params);

    if(signInStates[stateToken]?.token){
        throw redirect(307, `${params.url}/loginWithToken/${signInStates[stateToken].token.token}`);
    }

    throw error(404);
}

