export function load({request, url}){

    const paramForTesting = url.searchParams.get('geo');

    // Cloudflare should set this header https://developers.cloudflare.com/support/network/configuring-ip-geolocation/
    const cloudflareGeoHeader = request.headers.get('cf-ipcountry')

    const geo = paramForTesting || cloudflareGeoHeader;

    return {
        geo 
    }
}