
async function referrerData(token: string){
    const url = 'https://api.kaddio.com/api/referrer?' + new URLSearchParams({token});

    console.log(`token: ${token}`)

    try {
        // 'http://127.0.0.1:3000/api/referrer';
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
