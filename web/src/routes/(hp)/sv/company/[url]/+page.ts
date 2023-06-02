import { apiUrl } from '$lib/apiUrl.js'

export async function load({ params, fetch }) {

    const result = await fetch(`${apiUrl()}/graphqlmarketplace`, {
        method: 'POST',
        body: JSON.stringify({query: `
            query {
                findOrganization(url: "${params.url}") {
                    name,
                    stars,
                    address,
                    city,
                    bookingLink
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
                    }
                    homepage {
                        headerImg
                        presentation
                        pics
                    }
                    hosts {
                        firstname
                        lastname
                        imgUrl
                        nextFreeTime
                        bookingLink
                    }
                }
            }
        `}),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    const data = await result.json();

    return {
        organization: data.data.findOrganization
    };
}
