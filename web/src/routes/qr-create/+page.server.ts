import { error } from '@sveltejs/kit';

export const load = async function ({ url }) {
    const qrUrl = url.searchParams.get('url');
    if (!qrUrl) {
        throw error(400, 'Missing "url" parameter');
    }
    return { qrUrl };
};