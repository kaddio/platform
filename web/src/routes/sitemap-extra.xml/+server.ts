import { dev } from '$app/environment';
import { links } from '$lib/stores';

const list = function (hreflang: string, href: string) {
    return `<xhtml:list rel="alternate" hreflang="${hreflang}" href="${href}"/>`;
};

const sitemap = function () {
    const prefix = 'https://kaddio.com';

    const xml = Object.entries(links).map(function ([key, value]) {
        return Object.entries(value)
            .map(function ([lang, page]) {
                const alternates = Object.entries(value).map(function ([lang, page]) {
                    return list(lang, `${prefix}/${lang}/${page}`);
                });

                const xDefaultPath = function (value) {
                    if (value['default']) {
                        return `/${value['default']}`;
                    }

                    if (value['en']) {
                        return `/en/${value['en']}`;
                    }

                    if (value['sv']) {
                        return `/sv/${value['sv']}`;
                    }
                };

                const xDefault = list('x-default', `${prefix}${xDefaultPath(value)}`);

                if (lang == 'default') {
                    return `
						<url>
							<loc>${prefix}/${key}</loc>
                            ${xDefault}
						</url>
					`.trim();
                } else {
                    return `
						<url>
							<loc>${prefix}/${lang}/${key}</loc>
							${alternates.join('')}
                            ${xDefault}
						</url>
					`.trim();
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
