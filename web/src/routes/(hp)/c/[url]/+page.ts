import { apiUrl } from '$lib/apiUrl.js';
import { redirect } from '@sveltejs/kit';

function urlIsAnEmail(url: string) {
    return url.indexOf('@') !== -1 && url.indexOf('.') !== -1;
}

async function fetchOrgUrlFromEmail(email: string) {
    try {
        const result = await fetch(`${apiUrl()}/api/url-from-email/${email}`, {
            method: 'GET'
        });

        const data = await result.json();

        return data?.url;
    } catch (e) {
        console.log(e);
    }
}

async function urlFromEmail(possibleUrl: string) {
    const isEmail = urlIsAnEmail(possibleUrl);

    if (isEmail) {
        const url = await fetchOrgUrlFromEmail(possibleUrl);

        if (url) {
            return url;
        }
    }
}

export async function load({ params, fetch }) {
    const redirectUrl = await urlFromEmail(params.url);

    if (redirectUrl) {
        throw redirect(301, `https://kaddio.com/c/${redirectUrl}`);
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
