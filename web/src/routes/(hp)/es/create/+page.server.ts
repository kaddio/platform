import { createOrg } from '$lib/createOrg.js'

export const actions = {
    async default(event){
        return createOrg(event)
    }
}