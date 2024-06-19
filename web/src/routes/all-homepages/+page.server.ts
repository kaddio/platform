// List all customers on hitta klinik!

import { dev } from '$app/environment';
import { fail } from '@sveltejs/kit';
const prefix = 'https://kaddio.com';

const allOrgs = async function () {
    const URL = dev
        ? 'http://localhost:3000/api/all-orgs-using-marketplace'
        : 'https://api.kaddio.com/api/all-orgs-using-marketplace';

    try {
        const response = await fetch(URL, {
            method: 'GET'
        });

        return await response.json();
    } catch (e) {
        console.log(e);
        return fail(400, { success: false });
    }
};
export async function load() {
    const allUrls = await allOrgs();

    return {
        urls: allUrls.map((url: string) => `${prefix}/c/${url}`)
    };
}
