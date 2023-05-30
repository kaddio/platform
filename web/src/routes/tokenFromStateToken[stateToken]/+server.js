import { signInStates } from '$lib/sign-in-states';
import { error, json } from '@sveltejs/kit';

export const GET = function({params, request}){

    // Check authentication from origin
    // console.log(request.headers.get('authToken')); 

    const stateToken = params.stateToken;

    if(!stateToken){
        throw error(404, 'Not found');
    }

    const signInState = signInStates[stateToken];

    if(signInState?.token){
        return json(signInState.token);
    }
}
