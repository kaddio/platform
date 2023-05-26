import type { HandleFetch } from "@sveltejs/kit";
import { Organization } from "./types";

export const grapqhlApi = async function<T>(
    query: string,
    fetch
): Promise<T> {
    const result = await fetch("http://127.0.0.1:3000/graphqlmarketplace", {
        method: 'POST',
        body: JSON.stringify({query}),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const data = await result.json();
    if(data.errors) {
        throw data.errors;
    }
    return data as Promise<T>;
}

export class KaddioMarketplaceApi {
    constructor(fetch) {
        this.fetch = fetch;
    }
    async findOrganizations(keyword: string, limit: number = 10): Promise<Organization[]> {
        return (await grapqhlApi<Organization[]>(`
            query {
                findOrganizations(keyword: "${keyword}", limit: ${limit}) {
                name,
                address,
                addressString,
                city,
                url,
                keywords,
                bookingTypes {
                    name,
                    nextFreeTime
                }
                nextFreeTime,
                homepage {
                    headerImg
                }
                }
            }
        `, fetch)).findOrganizations
    }
}