function getLang(event){
    const sv = event.url.pathname.includes('/sv') && 'sv';
    const es = event.url.pathname.includes('/sv') && 'es';

    return sv || es || 'en';
}

export async function handle({ event, resolve }) {

    console.log(event.request.headers)

    // if (event.url.pathname.startsWith('/custom')) {
    //     return new Response('custom response');
    // }

    // const response = await resolve(event);

    // return response;

    return resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%lang%', getLang(event))
    });
}