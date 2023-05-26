import type { Organization } from './types.js';

export async function load({params, url, fetch}) : Promise<{organizations: Organization[], keyword: string}>{
  
    const {keyword = "", place, page="0"} = params;
    
    const parsedPage = parseInt(page);
    const ORGS_PER_PAGE = 12;
    const query = `
    query {
        findOrganizations(keyword: "${keyword || ''}", geoQuery: "${place || 'Sverige'}", skip: ${parsedPage*ORGS_PER_PAGE}, limit: ${ORGS_PER_PAGE}) {
          name,
          address,
          addressString(geoQuery: "${place || ''}"),
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
      
      throw result;
    }

    const orgs = await result.json();

    return {
        organizations: orgs.data.findOrganizations,
        place,
        keyword,
        page: parsedPage
    };

}