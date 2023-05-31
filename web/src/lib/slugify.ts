export const slugify = function(str: string){
    return str.toLowerCase()
        .replace(/ /g, '') // Remove whitespace
        .replace(/-*$/, '') // Cannot end with -
        .replace(/^-*/, '') // Cannot begin with -
        .replace(/å/g, 'a') // å -> a
        .replace(/ä/g, 'a') // ä -> a
        .replace(/ö/g, 'o') // ö -> o
        .replace(/http(s)?/g, '') // Remove prefix
        .replace(/[^\w-]+/g, ''); // Remove non alphanumeric characters            
}