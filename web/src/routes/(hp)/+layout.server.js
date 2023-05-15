export const prerender = true;

export function load({request}){

    // Cloudflare should set this header https://developers.cloudflare.com/support/network/configuring-ip-geolocation/
    const geo = request.headers.get('cf-ipcountry');

    return {
        geo 
    }
}