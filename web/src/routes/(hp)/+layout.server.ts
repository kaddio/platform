import { browserFingerprint } from '$lib/browser-fingerprint';
import { countryFromRequest } from '$lib/country-from-request.js';
import { statusPageState } from '$lib/status.js';

export async function load({ request, url, getClientAddress }) {
    const anonUserId = await browserFingerprint(request, getClientAddress());

    const paramForTesting = url.searchParams.get('geo');

    // Cloudflare should set this header https://developers.cloudflare.com/support/network/configuring-ip-geolocation/
    const cloudflareGeoHeader = countryFromRequest(request);

    const geo = paramForTesting || cloudflareGeoHeader;

    return {
        geo,
        anonUserId,
        streamed: {
            status: statusPageState()
        }
    };
}
