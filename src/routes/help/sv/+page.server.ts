import {groupBy} from 'lodash';

export async function load({url}) {
    const query = url.searchParams.get('q') || "";
    const paths = import.meta.glob("./**/+page.svx");
    
    const helpFiles = [];
    for(const [path, modulePromise] of Object.entries(paths)){
        const [dummy, categorySlug, titleSlug] = path.split("/");
        const {title = titleSlug, category = categorySlug, ...mod} = await modulePromise();
        const content = mod.default.render({}).html || "";
        
        helpFiles.push({
            title,
            category,
            content,
            path: `./${categorySlug}/${titleSlug}`
        })
    }

    
    const categories = groupBy(
        helpFiles.filter(
            hf =>JSON.stringify(hf).includes(query)
        ), 
        'category'
    )
    return {
        categories
    };
}
