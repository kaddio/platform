export function serializeSchema(thing) {
    return `<script type="application/ld+json">${JSON.stringify(thing, null, 2)}</script>`;
}

export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: "site title",
    url: "site url",
    description: "site desc",
    // sameAs: [
    //     `https://twitter.com/${site.social.twitter}`
    // ],
}