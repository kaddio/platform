import { signIn, signInStates } from '$lib/signIn.js';
import { json, fail, error } from '@sveltejs/kit';

export const POST = async function(event){
    // const stateToken: string = event.url.searchParams.get('stateToken');
    const { stateToken } = await event.request.json();

    if(!stateToken || !signInStates[stateToken]){
        throw error(400);
    }

    const code = "1234";

    signInStates[stateToken].smsVerificationCodes = [code];

    return json({ok: true});
}