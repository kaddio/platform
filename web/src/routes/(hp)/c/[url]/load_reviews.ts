import { apiUrl } from '../../../../lib/apiUrl';

export const loadReviews = async function (orgUrl: string, limit: number) {
    const result = await fetch(`${apiUrl()}/graphqlmarketplace`, {
        method: 'POST',
        body: JSON.stringify({
            query: `
            query {
                findOrganization(url: "${orgUrl}") {
                    reviews(limit: ${limit}) {
                        clientName
                        comment
                        stars
                        date
                        answer{
                            answer   
                        }
                        answeredByUser {
                            firstname
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

    const resultJson = await result.json();
    const org = resultJson.data.findOrganization;
    const reviews = org.reviews;

    return {
        reviews
    };
};
