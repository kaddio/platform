export const load = async function({url}){
    const stateToken = crypto.randomUUID();


    return {
        sameUnitUrl: `sameUnitUrl?stateToken=${stateToken}`,
        otherUnitUrl: `otherUnitUrl?stateToken=${stateToken}`
    }
}

