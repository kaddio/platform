import { allKeywords } from '$lib/keywords';
const prefix = 'https://kaddio.com';

// List all keywords on hitta klinik!
export async function GET() {
    const urls = allKeywords.map(({ name }) => {
        const safeName = encodeURIComponent(name);
        return `
            <url>
                <loc>${prefix}/sv/hitta-klinik/${safeName}</loc>
            </url>`;
    });

    const all = `
    <url>
        <loc>${prefix}/sv/hitta-klinik/Alla</loc>
    </url>
    `;

    const xml = `
        <?xml version="1.0" encoding="UTF-8"?>    
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${urls.join('')}
            ${all.trim()}

        </urlset>
    `;

    return new Response(xml.trim(), {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
