import { apiUrl } from '../../../../lib/apiUrl';

export const loadReviews = async function (orgUrl: string, limit: number) {
    const result = await fetch(`${apiUrl()}/graphqlmarketplace`, {
        method: 'POST',
        body: JSON.stringify({
            query: `
            query {
                findOrganization(url: "${params.url}") {
                    stars,
                    reviewCount
                    starsHistogram
                    reviews() {
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

    const resultJson = await result.json();
    const org = resultJson.data.findOrganization;
    const reviews = org.reviews;
    const starsHistogram = org.starsHistogram;
    const reviewCount = org.reviewCount;
    const stars = org.stars;

    return {
        reviews,
        starsHistogram,
        reviewCount,
        stars
    };
};