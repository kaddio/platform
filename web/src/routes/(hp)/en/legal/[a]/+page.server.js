import { redirect } from "@sveltejs/kit";

export function load({url}){
    if(url.pathname.endsWith('tos')){
        throw redirect(307, '/sv/legal/tos')
    }

    if(url.pathname.endsWith('privacy')){
        throw redirect(307, '/sv/legal/privacy')
    }
}