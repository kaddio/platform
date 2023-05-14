export function load({request, setHeaders, cookies}){
    // console.log(request.headers);

    if(request.headers.get('cf-ipcountry')){
        console.log('Got cookie!')
        const geo = request.headers.get('cf-ipcountry');

        cookies.set('geo', geo);
    }
}