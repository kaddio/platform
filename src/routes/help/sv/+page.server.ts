import {groupBy} from 'lodash';

export async function load() {
    const paths = import.meta.glob("./**/+page.svelte");
    
    const helpFiles = [];
    for(const [path, modulePromise] of Object.entries(paths)){
        const mod = await modulePromise();
        const [dummy, category, title] = path.split("/");
        console.log(mod);
        helpFiles.push({
            title,
            category,
            content: mod.default.render({}).html,
            metadata: mod.metadata,
            path: `./${category}/`
        })
    }
    
    const categories = groupBy(helpFiles, 'category')
    return {
        categories
    };
}


