import { apiUrl } from '$lib/apiUrl.js';

export async function load({ params, fetch }) {
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
                    redirectToNewHomepage
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
                        nextFreeTime
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
                        nextFreeTime
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
