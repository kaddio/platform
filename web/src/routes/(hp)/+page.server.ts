import { redirect } from '@sveltejs/kit';

export function load({ url }) {
    // Support for "old" referrer links
    if (url.searchParams.has('r')) {
        const next = `/r/${url.searchParams.get('r')}`;
        console.log(next);
        throw redirect(301, next);
    }

    throw redirect(307, '/sv');
}
