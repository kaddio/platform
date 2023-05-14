export function load({request}){

    // Cloudflare should set this header
    let geo = request.headers.get('cf-ipcountry');

    // geo = 'CR';

    return {
        geo 
    }
}