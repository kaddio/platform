import { browserFingerprint } from '$lib/browser-fingerprint';

export async function load({ request, url, getClientAddress }) {
    const anonUserId = await browserFingerprint(request, getClientAddress());

    const paramForTesting = url.searchParams.get('geo');

    // Cloudflare should set this header https://developers.cloudflare.com/support/network/configuring-ip-geolocation/
    const cloudflareGeoHeader = request.headers.get('cf-ipcountry');

    const geo = paramForTesting || cloudflareGeoHeader;

    return {
        geo,
        anonUserId
    };
}
