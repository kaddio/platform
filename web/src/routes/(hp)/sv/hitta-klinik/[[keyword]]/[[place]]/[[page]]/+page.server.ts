import { browserFingerprint } from '$lib/browser-fingerprint.js';
import { loadData } from './load_data.js';
import type { Organization } from './types.ts';

export async function load({
    request,
    getClientAddress,
    params,
    fetch
}): Promise<{ organizations: Organization[]; keyword: string; count: number }> {
    const trackingData = {
        fingerprint: browserFingerprint(request, getClientAddress()),
        label: 'pageview',
        category: 'ks'
    };

    return loadData({ params, fetch, trackingData });
}
