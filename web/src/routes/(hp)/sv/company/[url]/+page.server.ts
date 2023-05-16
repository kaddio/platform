export const prerender = false;

async function orgData(url: string){
    try {
        // 'https://api.kaddio.com/api/referrer';
        const response = await fetch('http://127.0.0.1:3000/api/orgData?' + new URLSearchParams({url}));
        const data = await response.json();

        return data;

    } catch(e) {
        console.error(e)
    }
}

export async function load({ params }) {

    if(!params?.url){
        // return {};
    }

    const data = await orgData(params.url);

    return {
        orgData: {
            ...data
        }
    };
}
