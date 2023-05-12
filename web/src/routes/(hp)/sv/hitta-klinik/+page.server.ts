import type { Organization } from './types.js';

export async function load() : Promise<{organizations: Organization[]}>{
    const query = `
    query {
        findOrganizations(limit: 10) {
          name,
          address,
          city,
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
    `;
    const result = await fetch("http://127.0.0.1:3000/graphqlmarketplace", {
        method: 'POST',
        body: JSON.stringify({query}),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    
    const orgs = await result.json();

    return {
        organizations: orgs.data.findOrganizations
    };

}