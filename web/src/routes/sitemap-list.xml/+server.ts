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

const orgsToSitemap = function (urls: string[]) {
    return urls
        .map((url) =>
            `
                <url>
                    <loc>${prefix}/c/${url}</loc>
                </url>
            `.trim()
        )
        .join('');
};

export async function GET() {
    const xml = `
        <?xml version="1.0" encoding="UTF-8"?>    
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${orgsToSitemap(await allOrgs())}
        </urlset>
    `.trim();

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
