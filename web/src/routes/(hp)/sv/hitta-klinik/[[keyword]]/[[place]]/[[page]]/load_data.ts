import { apiUrl } from '$lib/apiUrl';

export async function loadData({
    trackingData,
    params,
    fetch
}): Promise<{ organizations: Organization[]; keyword: string; count: number }> {
    const { keyword = '', place, page = '0' } = params;
    if (!keyword && !place) {
        return {
            organizations: [],
            count: 0,
            // place,
            keyword
            // page: 0
        };
    }

    const parsedPage = parseInt(page);
    const ORGS_PER_PAGE = 12;
    const query = `
    query {
        findOrganizations(keyword: "${keyword || ''}", geoQuery: "${place || 'Sverige'}", skip: ${
        parsedPage * ORGS_PER_PAGE
    }, limit: ${ORGS_PER_PAGE}) {
		organizations {
			name,
			address,
			addressString(geoQuery: "${place || ''}"),
			city,
			url,
			keywords,
			hasBooking,
            useReviews,
            stars,
            showBooking,
			bookingTypes {
				name,
				nextFreeTime
			}
			nextFreeTime,
			homepage {
				headerImg,
                mainActivity,
			}
		},
		count
	}
}`;

    let orgs;
    const fetchUrl = `${apiUrl()}/graphqlmarketplace`;

    try {
        const result = await fetch(fetchUrl, {
            method: 'POST',
            body: JSON.stringify({ query }),
            headers: {
                'Content-Type': 'application/json',
                'x-tracking-data': JSON.stringify(trackingData)
            }
        });

        if (!result.ok) {
            throw result;
        }

        orgs = await result.json();
    } catch (e) {
        console.error(`Could not fetch data for marketplace ${fetchUrl}`);
    }

    return {
        organizations: orgs?.data.findOrganizations?.organizations,
        count: orgs?.data.findOrganizations?.count,
        place,
        keyword,
        page: parsedPage
    };
}
