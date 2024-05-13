import type {
    Brand,
    FAQPage,
    JobPosting,
    Organization,
    Product,
    Thing,
    WithContext,
    Event,
    WebApplication,
    LocalBusiness
} from 'schema-dts';

export type Schema = Thing | WithContext<Thing>;

export function serializeSchema(thing: Schema) {
    return `<script type="application/ld+json">${JSON.stringify(thing, null, 2)}</script>`;
}

export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'site title',
    url: 'site url',
    description: 'site desc'
    // sameAs: [
    //     `https://twitter.com/${site.social.twitter}`
    // ],
};

// Kan användas på kaddio.com/company/afobia etc.
export const localBusinessSchema: WithContext<LocalBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness'
};

export const kaddioOrgSchema: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kaddio',
    legalName: 'Kaddio AB',
    sameAs: [
        'https://www.instagram.com/kaddioapp',
        'https://www.facebook.com/kaddio',
        'https://www.linkedin.com/company/kaddio',
        'https://twitter.com/kaddioapp'
    ],
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Göteborg',
        addressCountry: 'SE'
    },
    telephone: '+46313204414',
    url: 'https://kaddio.com',
    logo: 'https://kaddio.com/img/kaddio-black.png',
    contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello@kaddio.com',
        availableLanguage: [
            {
                '@type': 'Language',
                name: 'English'
            },
            {
                '@type': 'Language',
                name: 'Swedish'
            }
        ],
        productSupported: 'Kaddio'
    },
    iso6523Code: '0060:352928374'
};

export const productSchema: WithContext<Product> = {
    '@context': 'https://schema.org',
    '@type': 'Product'
};

export const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is the return policy?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '<p>Most unopened items in new condition and returned within <b>90 days</b> will receive a refund or exchange. Some items have a modified return policy noted on the receipt or packing slip. Items that are opened or damaged or do not have a receipt may be denied a refund or exchange. Items purchased online or in-store may be returned to any store.</p><p>Online purchases may be returned via a major parcel carrier. <a href=https://example.com/returns> Click here </a> to initiate a return.</p>'
            }
        },

        {
            '@type': 'Question',
            name: 'How long does it take to process a refund?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "We will reimburse you for returned items in the same way you paid for them. For example, any amounts deducted from a gift card will be credited back to a gift card. For returns by mail, once we receive your return, we will process it within 4–5 business days. It may take up to 7 days after we process the return to reflect in your account, depending on your financial institution's processing time."
            }
        }
    ]
};

export const brandSchema: WithContext<Brand> = {
    '@context': 'https://schema.org',
    '@type': 'Brand'
};

export const jobPostingSchema: WithContext<JobPosting> = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Senior Software Engineer',
    description:
        '<p>At Kaddio, we have a lot of freedom with flexible work hours, you can work remotely 50% if you prefer. We have a super cosy office in central Göteborg, Sweden. We all speak English and Swedish, some speak Spanish.</p>',
    datePosted: '2023-09-01',
    validThrough: '2025-09-01',
    employmentType: 'full-time',
    hiringOrganization: {
        '@type': 'Organization',
        name: 'Kaddio AB',
        sameAs: 'https://kaddio.com'
    },
    jobLocation: {
        '@type': 'Place',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Linnégatan 5',
            addressLocality: 'Göteborg',
            postalCode: '41304',
            addressCountry: 'SE',
            addressRegion: 'Västra Götalands län'
        }
    },
    baseSalary: {
        '@type': 'MonetaryAmount',
        currency: 'SEK',
        value: {
            '@type': 'QuantitativeValue',
            value: 55000,
            unitText: 'MONTH'
        }
    }
};

export const eventSchema: WithContext<Event> = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Kaddio Lectures',
    startDate: '2023-07-21T19:00-05:00',
    endDate: '2023-07-21T23:00-05:00',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
        '@type': 'Place',
        name: '...',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '...',
            addressLocality: 'Göteborg',
            postalCode: '...',
            addressCountry: 'SE'
        }
    }
};

export const softwareSchema: WithContext<WebApplication> = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Kaddio',
    applicationCategory: 'HealthApplication'
};
