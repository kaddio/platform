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

export const keywordExists = (keyword: string): boolean => {
    if (keyword === 'Alla') return true;

    return !!allKeywords.find((k) => k.name === keyword);
};

export const descriptionFromKeywordAndPlace = (keyword: string, place: string) => {
    // console.log(keyword, place);
    let placeStr = '';

    if (place) {
        placeStr = ` ${place}.`;
    } else {
        placeStr = '.';
    }

    const keywordData = allKeywords.find((k) => k.name.toLowerCase() === keyword);
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
    { name: 'Psykoterapi', category: 'Psykologi' },
    { name: 'Samtalsterapi', category: 'Psykologi' },
    { name: 'KBT', category: 'Psykologi' },
    { name: 'Psykodynamisk terapi', category: 'Psykologi' },
    { name: 'ACT', category: 'Psykologi' },
    { name: 'Depressionsbehandling', category: 'Psykologi' },
    { name: 'Ångestbehandling', category: 'Psykologi' },
    { name: 'Tvångssyndrom', category: 'Psykologi', desc: 'Sök hjälp för tvångssyndrom' },
    { name: 'Fobibehandling', category: 'Psykologi' },
    { name: 'Familjerådgivning', category: 'Psykologi' },
    { name: 'Parterapi', category: 'Psykologi' },
    { name: 'NPF-utredning', category: 'Psykologi' },
    { name: 'Fysioterapeut', category: 'Manuell terapi' },
    { name: 'Osteopat', category: 'Manuell terapi' },
    { name: 'Kiropraktor', category: 'Manuell terapi' },
    { name: 'Naprapat', category: 'Manuell terapi' },
    { name: 'Massage', category: 'Manuell terapi' },
    { name: 'Ryggont', category: 'Manuell terapi' },
    { name: 'Nacksmärta', category: 'Manuell terapi' },
    { name: 'Huvudvärk', category: 'Manuell terapi' },
    { name: 'Ledvärk', category: 'Manuell terapi' },
    { name: 'Muskelsmärta', category: 'Manuell terapi' },
    { name: 'Idrottsskador', category: 'Manuell terapi' },
    { name: 'Idrottsmassage', category: 'Manuell terapi' },
    { name: 'Läkare', category: 'Medicin' },
    { name: 'Arbetsterapeut', category: 'Medicin' },
    { name: 'Funktionsmedicin', category: 'Medicin' },
    { name: 'Provtagning', category: 'Medicin' },
    { name: 'Läkarintyg', category: 'Medicin' },
    { name: 'Vaccination', category: 'Medicin' },
    { name: 'Dietist', category: 'Medicin' },
    { name: 'Fotvård', category: 'Medicin' },
    { name: 'Logoped', category: 'Övrigt' },
    { name: 'Veterinär', category: 'Övrigt' },
    { name: 'Hundfysioterapeut', category: 'Övrigt' },
    { name: 'Coach', category: 'Övrigt' },
    { name: 'Livsstilsterapeut', category: 'Övrigt' }
];

export const keywordsByCategory = allKeywords.reduce((acc, keyword) => {
    if (!acc[keyword.category]) {
        acc[keyword.category] = [];
    }

    acc[keyword.category].push(keyword);

    return acc;
}, {});
