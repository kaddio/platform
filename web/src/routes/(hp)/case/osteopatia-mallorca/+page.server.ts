import { redirect } from '@sveltejs/kit';

export function load({ url }) {
    throw redirect(308, '/en/case/osteopatia-mallorca');
}
