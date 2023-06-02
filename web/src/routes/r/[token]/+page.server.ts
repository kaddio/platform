import { apiUrl } from "$lib/apiUrl"

async function referrerData(token: string){
    const url = `${apiUrl()}/api/referrer?` + new URLSearchParams({token});

    console.log(`token: ${token}`)

    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;

    } catch(e) {
        console.log('Could not fetch referrer data')
        console.error(e)

        return {
            type: 'referrerLegacyVersion'
        }
    }
}

export async function load({ params }) {

    if(!params?.token){
        // return {};
    }

    const data = await referrerData(params.token);

    return {
        referrerData: {
            ...data,
            token: params.token
        }
    };
}
