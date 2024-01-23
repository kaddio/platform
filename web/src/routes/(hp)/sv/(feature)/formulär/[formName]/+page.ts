import { apiUrl } from '$lib/apiUrl.js';

export async function load({ params, fetch }) {
    console.log(params);

    const result = await fetch(`${apiUrl()}/graphqlmarketplace`, {
        method: 'POST',
        body: JSON.stringify({
            query: `
            query {
                findPackages(packageType:"LETTER") {
                    packages{
                        name,
                        desc

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
        pkgs: data.data.findPackages.packages
    };
}
