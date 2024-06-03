import { apiUrl } from '$lib/apiUrl.js';
import { redirect } from '@sveltejs/kit';

function urlFromEmail(possibleUrl: string) {
    const emailLookup = {
        'janne@pnd.se': 'demo'
    };

    return emailLookup[possibleUrl];
}

export async function load({ params, fetch }) {
    const redirectUrl = urlFromEmail(params.url);

    console.log(redirectUrl);

    if (redirectUrl) {
        throw redirect(301, `http://localhost:5173/c/${redirectUrl}`);
    }

    const result = await fetch(`${apiUrl()}/graphqlmarketplace`, {
        method: 'POST',
        body: JSON.stringify({
            query: `
            query {
                findOrganization(url: "${params.url}") {
                    name,
                    stars,
                    address,
                    city,
                    bookingLink,
                    hasBooking,
                    showBooking,
                    hasPlaces
                    hasContactForm
                    url
                    keywords
                    bookingFilterOnHost
                    logo
                    cssVars {
                        name,
                        value
                    }
                    places {
                        name
                        address,
                        city
                        bookingLink
                    }
                    bookingTypes {
                        name
                        categoryName
                        price
                        clientVisibleLength
                        bookingLink
                        description
                    }
                    homepage {
                        headerImg
                        presentation
                        pics
                        showPlaces
                        showUs
                        links {
                            type
                            url
                            label
                        }
                        telephone
                        email
                        mainActivity
                        metaDescription
                    }
                    hosts {
                        firstname
                        lastname
                        imgUrl
                        bookingLink
                        presentation
                        title
                        hasSomeClientBookableBookingType
                    }
                    useReviews
                    reviewCount
                    starsHistogram
                    reviews {
                        clientName
                        comment
                        stars
                        date
                        answer{
                            answer
                        }
                    }
                }
            }
        `
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await result.json();

    return {
        organization: data.data.findOrganization
    };
}
