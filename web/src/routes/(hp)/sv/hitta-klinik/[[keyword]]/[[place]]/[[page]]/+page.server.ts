import { browserFingerprint } from '$lib/browser-fingerprint';
import { countryFromRequest } from '$lib/country-from-request';
import { loadData } from './load_data.js';
import type { Organization } from './types.ts';

export async function load({
    request,
    getClientAddress,
    params,
    url,
    fetch
}): Promise<{ organizations: Organization[]; keyword: string; count: number }> {
    const trackingData = {
        fingerprint: await browserFingerprint(request, getClientAddress()),
        country: countryFromRequest(request),
        label: 'pageview',
        category: 'ks',
        path: url.pathname
    };

    return loadData({ params, fetch, trackingData });
}
