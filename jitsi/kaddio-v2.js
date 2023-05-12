class Kaddio{
    url;
    offset;
    locale;
    localeOptions;

    constructor(options){
        if(!options.url){
            console.log('Kaddio: URL missing')
            throw new Error();
        };
    
        this.url = (options.url.search('//')) ? options.url : `https://${options.url}.kaddio.com`;
        this.offset = new Date().getTimezoneOffset();
        this.locale = navigator.language;
        this.localeOptions = (options.localeOptions) ? JSON.parse(options.localeOptions) : { weekday:"long", year:"numeric", month:"short", day:"numeric", hour: "numeric", minute: "numeric"};
    }

    async suggestions(query){
        const options = {
            mode: 'cors',
            method: 'GET',
            headers: {
                'x-tz-offset': this.offset
            }
        };

        const response = await fetch(`${this.url}/api/all-suggestions-ever/${query}`, options);
        return await response.json();
    }

    dateOffset(dateStr){
        const d = new Date(dateStr);

        const ms = d.getTime();
        const localDateInMs = ms - this.offset * 60000;
        return new Date(localDateInMs).toLocaleDateString(this.locale, this.localeOptions);
    }

    async parse(){            
        const nodes = document.querySelectorAll("[data-kaddio]");
    
        if(!nodes || nodes.length == 0){
            console.log('Kaddio: No nodes to populate')
            return;
        }
    
        nodes.forEach(async n => {
            const suggestions = await this.suggestions(n.dataset.kaddio);

            if(!suggestions) return;

            // console.log(suggestions);

            const bookingTypes = Object.keys(suggestions);

            bookingTypes.forEach(bt => {
                suggestions[bt].forEach(suggestion => {

                    const localDate = this.dateOffset(suggestion.start, this.localeOptions);

                    if(n.dataset.kaddioBook){
                        n.insertAdjacentHTML('afterbegin', `<a href="${suggestion.reserveLink}">${localDate}</a`);
                    }
                    else{
                        n.insertAdjacentHTML('afterbegin', `<div>${localDate}</div`);
                    }

                    // if(data.localDate){
                    //     n.insertAdjacentHTML('afterbegin', "<div>" + data.localDate + " (lokal tid)</div")
                    // }

                    // const bookNode = n.querySelector("[data-kaddio-book]");

                    // if(data.link && bookNode){
                    //     bookNode.setAttribute('href', data.link);
                    //     // n.insertAdjacentHTML('afterend', `<a href="${data.link}">Boka</a>`)
                    // }                        
                });
            });
        });   
    }

    async book(reservation){
        const options = {
            body: JSON.stringify(reservation),
            method: 'POST',
            headers: {
                'x-tz-offset': this.offset
            }
        };

        const response = await fetch(`${this.url}/api/book`, options);
        const json = await response.json();

        console.log(json);
    }
}

if(document.currentScript.dataset.disableAutostart){
    console.log('Not autostarting');
}

else{
    const kaddio = new Kaddio(document.currentScript.dataset);
    kaddio.parse();
}

// const kaddio = new Kaddio(document.currentScript.dataset.url);

// kaddio.book({
//     bookableTimeId: "xpcmCjN8TeAhPAdpT",
//     bookingTypeId: "Qg6u5fPhyXzhuspnH",

// });