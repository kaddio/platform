import { dev } from '$app/environment';
import { links } from '$lib/stores';

const sitemap = function () {
    const prefix = 'https://kaddio.com';

    const xml = Object.entries(links).map(function ([key, value]) {
        return Object.entries(value)
            .map(function ([lang, page]) {
                // SHould be :list
                const alternates = Object.entries(value).map(function ([lang, page]) {
                    return `
				<xhtml
					rel="alternate"
					hreflang="${lang}"
					href="${prefix}/${lang}/${page}"/>				
			`;
                });

                if (lang == 'default') {
                    return `
						<url>
							<loc>${prefix}/${key}</loc>
						</url>
					`;
                } else {
                    return `
						<url>
							<loc>${prefix}/${lang}/${key}</loc>

							${alternates.join('')}
						</url>
					`;
                }
            })
            .join('');
    });

    return `
		<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
		xmlns:xhtml="http://www.w3.org/1999/xhtml">
			${xml.join('')}
		</urlset>`;
};

export async function GET() {
    const xml = sitemap();
    return new Response(xml.trim(), {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
