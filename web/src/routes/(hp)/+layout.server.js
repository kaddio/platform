export function load({request, setHeaders, cookies}){
    // console.log(request.headers);

    let geo;

    if(request.headers.get('cf-ipcountry')){
        console.log('Got cookie!')
        geo = request.headers.get('cf-ipcountry');

        cookies.set('geo', geo, {path: '/'});
    }

    return {
        geo
    }

}