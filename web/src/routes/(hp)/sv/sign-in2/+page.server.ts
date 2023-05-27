import { signIn } from '$lib/signIn.js'

export const actions = {
    async default(event){
        return signIn(event)
    }
}