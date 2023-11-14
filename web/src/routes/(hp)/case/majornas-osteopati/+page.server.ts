import { redirect } from '@sveltejs/kit';

export function load({ url }) {
    throw redirect(307, '/en/case/majornas-osteopati');
}
