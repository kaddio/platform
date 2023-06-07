export const safeCredentialsFromStateToken = function(stateToken, signInStates){
    const credentials = signInStates[stateToken] || {};

    // console.log(credentials)

    return {
        verified: credentials.verified,
        mustVerifyWithOneOf: credentials.mustVerifyWithOneOf,
        orgs: credentials.orgs,
        bankid: {
            status: credentials.bankid?.status,
            device: credentials.bankid?.device,
        }
    }
}