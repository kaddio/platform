
export async function load({ params, fetch }) {

    const result = await fetch("http://127.0.0.1:3000/graphqlmarketplace", {
        method: 'POST',
        body: JSON.stringify({query: `
            query {
                findOrganization(url: "${params.url}") {
                    name,
                    stars,
                    address,
                    city,
                    places {
                        name
                        address,
                        city
                    }
                    bookingTypes {
                        name
                        categoryName
                        price
                        clientVisibleLength
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
