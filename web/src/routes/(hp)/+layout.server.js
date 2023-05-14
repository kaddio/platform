export function load({request, setHeaders, cookies}){
    console.log(request.headers);

    if(request.headers['cf-ipcountry']){
        const geo = request.headers['cf-ipcountry'].value;

        cookies.set('geo', geo);
    }
}