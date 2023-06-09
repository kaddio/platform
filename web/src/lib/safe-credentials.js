export const safeCredentialsFromStateToken = function(stateToken, signInStates){
    const credentials = signInStates[stateToken] || {};

    // console.log(credentials)

    return {
        verified: credentials.verified,
        mustVerifyWithOneOf: credentials.mustVerifyWithOneOf,
        orgs: credentials.orgs,
        bankid: {
            status: credentials.bankid?.status,
            user: credentials.bankid?.completionData?.user,
            hintCode: credentials.bankid?.hintCode,
            device: credentials.bankid?.device,
        }
    }
}