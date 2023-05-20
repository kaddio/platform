import type { Organization, Thing, WithContext} from 'schema-dts';

export type Schema = Thing | WithContext<Thing>;

export function serializeSchema(thing: Schema) {
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

export const organizationSchema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://kaddio.com#organization",
    
}