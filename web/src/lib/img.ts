import { dev } from "$app/environment";

type Options = {
    format?: string,
    width?: number,
    fit?: string
}


function prefixSrc(src: string){
    const possibleSlash = (src.startsWith('/')) ? '' : '/';

    return `https://kaddio.com${possibleSlash}${src}`
}

function getSrc(src: string){
    const isAbsolute = src.startsWith('http');

    return (isAbsolute) ? src : prefixSrc(src);
}

export const imageHandler = function(src: string, options: Options, isDevelopment: boolean = dev): string{
    if(!src || src.length == 0) return src;


    if(isDevelopment){
        return src;
    }

    else{
        const optionsStr = Object.entries(options).map(([key, value]) => `${key}=${value}`).join(',');
        console.log(optionsStr);

        return `https://kaddio.com/cdn-cgi/image/${optionsStr}/${getSrc(src)}`;
    }
}