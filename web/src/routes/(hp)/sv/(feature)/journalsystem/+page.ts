import { apiUrl } from '$lib/apiUrl';

export async function load({ params, fetch }) {
    try {
        const result = await fetch(`${apiUrl()}/graphqlmarketplace`, {
            method: 'POST',
            body: JSON.stringify({
                query: `
                query {
                    findPackages(packageType:"FORM", verified: true) {
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
    } catch (e) {
        console.error('Cannot reach Kaddio API!');
    }
}
