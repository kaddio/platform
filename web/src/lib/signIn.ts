import { fail, redirect } from '@sveltejs/kit';

const f = async function(data){
    try{
        const response = await fetch('https://ed33cb4da6f6.ngrok.app/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        const json = await response.json();
        console.log(json);
    
        return {response, json};
    }

    catch(e){
        console.log('error')
        console.log(e);
        return false;
    }
}

export const signIn = async function({request, url}){

    const data = await request.formData();
    const jsonData = Object.fromEntries(data.entries());

    const {json} = await f(jsonData);

    console.log(json)

    if(json?.token?.token){
        // throw redirect(301, `https://ed33cb4da6f6.ngrok.app/loginWithToken/${json.token.token}`);

        if (url.searchParams.has('redirectTo')) {
            const destination = `${url.searchParams.get('redirectTo')}/loginWithToken/${json.token.token}`;
            console.log(destination)
            throw redirect(307, destination);
        }

        // throw redirect(301, '/sv');
    }

    return fail(400, {...json});
}
