import type { Organization } from './types.js';

export async function load({params, url, fetch}) : Promise<{organizations: Organization[], keyword: string}>{
  
    const {keyword = "", place} = params;


    const query = `
    query {
        findOrganizations(keyword: "${keyword || ''}", geoQuery: "${place || ''}", limit: 10) {
          name,
          address,
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
    `;
    
    const result = await fetch("http://127.0.0.1:3000/graphqlmarketplace", {
        method: 'POST',
        body: JSON.stringify({query}),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    
    if(!result.ok) {
      console.log(result);
      throw result;
    }

    const orgs = await result.json();
console.log(orgs);
    return {
        organizations: orgs.data.findOrganizations,
        place,
        keyword,
    };

}