import type { Brand, FAQPage, JobPosting, Organization, Product, Thing, WithContext} from 'schema-dts';

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
    "@id": "https://kaddio.com#organization"
}

export const productSchema: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
}

export const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
}

export const brandSchema: WithContext<Brand> = {
    "@context": "https://schema.org",
    "@type": "Brand",
}

export const jobPostingSchema: WithContext<JobPosting> = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Senior Software Engineer",
    description : "<p>Kaddio strive to be a reflective organization...</p>",
    datePosted: "2023-05-20",
    validThrough: "2025-05-20",
    hiringOrganization: {
        "@type": "Organization",
        "name": "Kaddio AB",
        "sameAs": "https://kaddio.com"
    },
    jobLocation: {
        "@type": "Place",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Linnégatan 5",
            "addressLocality": "Göteborg",
            "postalCode": "41304",
            "addressCountry": "SE"
        }
    },
    baseSalary: {
        "@type": "MonetaryAmount",
        "currency": "SEK",
        "value": {
          "@type": "QuantitativeValue",
          "value": 60000,
          "unitText": "MONTH"
        }
    }
}
