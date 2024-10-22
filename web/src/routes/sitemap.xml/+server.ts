export async function GET() {
    const prefix = 'https://kaddio.com';

    const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
            <loc>${prefix}/sitemap-extra.xml</loc>
        </sitemap>
        <sitemap>
            <loc>${prefix}/sitemap-details.xml</loc>
        </sitemap>
        <sitemap>
            <loc>${prefix}/sitemap-list.xml</loc>
        </sitemap>
    </sitemapindex>
    `;

    return new Response(xml.trim(), {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
