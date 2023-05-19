
async function referrerData(token: string){
    const url = 'http://127.0.0.1:3000/api/referrer?' + new URLSearchParams({token});

    console.log(token)

    try {
        // 'https://api.kaddio.com/api/referrer';
        const response = await fetch(url);
        const data = await response.json();

        return data;

    } catch(e) {
        console.error(e)
    }
}

export async function load({ params }) {

    if(!params?.token){
        // return {};
    }

    const data = await referrerData(params.token);

    // console.log(data)

    // export const referrerData = writable();

    // throw redirect(307, '/sv');

    return {
        referrerData: {
            ...data
        }
    };
}