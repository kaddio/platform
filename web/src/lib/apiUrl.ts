import { dev } from "$app/environment";

export const apiUrl = function(){
    if(dev){
        return 'http://127.0.0.1:3000'
    }

    return 'https://support.kaddio.com';
}
