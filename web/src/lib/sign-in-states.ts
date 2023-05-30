// Should reside in a database with expiration date etc. etc.

type SignInStatesTypes = {
    verified?: object,
    mustVerifyWithOneOf?: object,
    credentials?: object,
    smsVerificationCodes?: [string],
    smsIsSent?: boolean,
    token?: object,
    orgs?: [object]
}

export let signInStates: SignInStatesTypes = {};

export const sis = {
    remove(id){
        delete signInStates[id];
    },

    find(id){
        return signInStates[id];
    },

    
}