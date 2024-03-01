export const keywords = [
    {
        label: 'Psykolog',
        imgUrl: '/img/keywords/sigmund-rnMRwtBY_nU-unsplash.jpg'
    },
    {
        label: 'Massage',
        imgUrl: '/img/keywords/toa-heftiba-hBLf2nvp-Yc-unsplash.jpg'
    },
    // {
    //     label: 'Vaccination',
    //     imgUrl: '/img/keywords/diana-polekhina-ZBstHWt9vLc-unsplash.jpg'
    // },
    {
        label: 'Fysioterapeut',
        imgUrl: '/img/keywords/sincerely-media-qzmPDJJOz4c-unsplash.jpg'
    },
    {
        label: 'Kiropraktor',
        imgUrl: '/img/keywords/joyce-hankins-IG96K_HiDk0-unsplash.jpg'
    },
    {
        label: 'Idrottsskador',
        imgUrl: '/img/keywords/yogendra-singh-KtPJkTlke8Y-unsplash.jpg'
    },
    // {
    //     label: 'Fobibehandling',
    //     imgUrl: '/img/keywords/vidar-nordli-mathisen-gF7QEWM7tm4-unsplash.jpg'
    // },
    {
        label: 'Läkare',
        imgUrl: '/img/keywords/national-cancer-institute-NFvdKIhxYlU-unsplash.jpg'
    }
];

export const shouldShowMetaForPage = (keyword: string, matches: number): boolean => {
    if (matches == 0) return false;

    return keywordExists(keyword);
};

export const keywordExists = (keyword: string): boolean => {
    if (keyword === 'Alla') return true;

    return !!allKeywords.find((k) => k.name === keyword);
};

export const descFromKeywordAndPlace = (keyword: string, place: string) => {
    // console.log(keyword, place);
    let placeStr = '';

    if (place) {
        placeStr = ` ${place}.`;
    } else {
        placeStr = '.';
    }

    const keywordData = allKeywords.find((k) => k.name.toLowerCase() === keyword.toLowerCase());
    const useGeneralDescForKeyword = !keywordData || !keywordData.desc || keyword === 'Alla';

    if (useGeneralDescForKeyword && place) {
        return `Sök efter behandlingar och kliniker ${place}`;
    }

    if (useGeneralDescForKeyword && (!place || place === 'Sverige')) {
        return `Sök efter behandlingar och kliniker i hela Sverige`;
    }

    return `${keywordData.desc}${placeStr}`;
};

const allKeywords = [
    { name: 'Psykolog', category: 'Psykologi', desc: 'Boka tid med psykolog' },
    { name: 'Psykoterapi', category: 'Psykologi', desc: 'Boka tid för psykoterapi' },
    { name: 'Samtalsterapi', category: 'Psykologi', desc: 'Boka tid för samtalsterapi' },
    { name: 'KBT', category: 'Psykologi', desc: 'Boka tid för KBT' },
    {
        name: 'Psykodynamisk terapi',
        category: 'Psykologi',
        desc: 'Boka tid för psykodynamisk terapi'
    },
    { name: 'ACT', category: 'Psykologi', desc: 'Boka tid för ACT' },
    { name: 'Depressionsbehandling', category: 'Psykologi', desc: 'Sök hjälp för depression' },
    { name: 'Ångestbehandling', category: 'Psykologi', desc: 'Sök hjälp för ångest' },
    { name: 'Tvångssyndrom', category: 'Psykologi', desc: 'Sök hjälp för tvångssyndrom' },
    { name: 'Fobibehandling', category: 'Psykologi', desc: 'Sök hjälp för fobier' },
    { name: 'Familjerådgivning', category: 'Psykologi', desc: 'Boka tid för familjerådgivning' },
    { name: 'Parterapi', category: 'Psykologi', desc: 'Boka tid för parterapi' },
    { name: 'NPF-utredning', category: 'Psykologi', desc: 'Boka tid för NPF-utredning' },
    { name: 'Fysioterapeut', category: 'Manuell terapi', desc: 'Boka tid med fysioterapeut' },
    { name: 'Osteopat', category: 'Manuell terapi', desc: 'Boka tid med osteopat' },
    { name: 'Kiropraktor', category: 'Manuell terapi', desc: 'Boka tid med kiropraktor' },
    { name: 'Naprapat', category: 'Manuell terapi', desc: 'Boka tid med naprapat' },
    { name: 'Massage', category: 'Manuell terapi', desc: 'Boka tid för massage' },
    { name: 'Ryggont', category: 'Manuell terapi', desc: 'Sök hjälp för ryggont' },
    { name: 'Nacksmärta', category: 'Manuell terapi', desc: 'Sök hjälp för nacksmärta' },
    { name: 'Huvudvärk', category: 'Manuell terapi', desc: 'Sök hjälp för huvudvärk' },
    { name: 'Ledvärk', category: 'Manuell terapi', desc: 'Sök hjälp för ledvärk' },
    { name: 'Muskelsmärta', category: 'Manuell terapi', desc: 'Sök hjälp för muskelsmärta' },
    { name: 'Idrottsskador', category: 'Manuell terapi', desc: 'Sök hjälp för idrottsskador' },
    { name: 'Idrottsmassage', category: 'Manuell terapi', desc: 'Boka tid för idrottsmassage' },
    { name: 'Läkare', category: 'Medicin', desc: 'Boka tid med läkare' },
    { name: 'Arbetsterapeut', category: 'Medicin', desc: 'Boka tid med arbetsterapeut' },
    { name: 'Funktionsmedicin', category: 'Medicin', desc: 'Boka tid för funktionsmedicin' },
    { name: 'Provtagning', category: 'Medicin', desc: 'Boka tid för provtagning' },
    { name: 'Läkarintyg', category: 'Medicin', desc: 'Boka tid för läkarintyg' },
    { name: 'Vaccination', category: 'Medicin', desc: 'Boka tid för vaccination' },
    { name: 'Dietist', category: 'Medicin', desc: 'Boka tid med dietist' },
    { name: 'Fotvård', category: 'Medicin', desc: 'Boka tid för fotvård' },
    { name: 'Logoped', category: 'Övrigt', desc: 'Boka tid med logoped' },
    { name: 'Veterinär', category: 'Övrigt', desc: 'Boka tid hos veterinär' },
    { name: 'Hundfysioterapeut', category: 'Övrigt', desc: 'Boka tid hos hundfysioterapeut' },
    { name: 'Coach', category: 'Övrigt', desc: 'Boka tid med coach' },
    { name: 'Livsstilsterapeut', category: 'Övrigt', desc: 'Boka tid med livsstilsterapeut' }
];

export const keywordsByCategory = allKeywords.reduce((acc, keyword) => {
    if (!acc[keyword.category]) {
        acc[keyword.category] = [];
    }

    acc[keyword.category].push(keyword);

    return acc;
}, {});
