type Options = {
    format?: string,
    width?: number,
}

export const imageHandler = function(src: string, options: Options): string{
    if(!src || src.length == 0) return src;

    // localhost
    if(false){
        return src;
    }

    else{
        const optionsStr = Object.entries(options).map(([key, value]) => `${key}=${value}`).join(',');
        console.log(optionsStr);

        return `https://kaddio.com/cdn-cgi/image/${optionsStr}/${src}`;
    }
}