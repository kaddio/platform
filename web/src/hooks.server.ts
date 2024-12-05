import { redirect } from '@sveltejs/kit';

function getLang(event) {
    if (event.url.pathname.includes('/sv') || event.url.pathname.includes('/c/')) {
        return 'sv';
    }

    if (event.url.pathname.includes('/es')) {
        return 'es';
    }

    return 'en';
}

const pathsRedirectMap = {
    '/iframe': {
        c: 301,
        d: 'https://help.kaddio.com/help/integrera-kaddio-tidsbokning-pa-din-egen-hemsida'
    },

    '/en/todos': {
        c: 301,
        d: '/en'
    },

    '/enterprise': {
        c: 301,
        d: '/en'
    },

    '/hittaklinik': {
        c: 301,
        d: '/sv/hitta-klinik'
    },

    '/en/hitta-klinik': {
        c: 301,
        d: '/sv/hitta-klinik'
    },

    '/en/hittaklinik': {
        c: 301,
        d: '/sv/hitta-klinik'
    },

    '/sv/hittaklinik': {
        c: 301,
        d: '/sv/hitta-klinik'
    },

    '/es/hittaklinik': {
        c: 301,
        d: '/sv/hitta-klinik'
    },

    '/es/hitta-klinik': {
        c: 301,
        d: '/sv/hitta-klinik'
    },

    '/lectures': {
        c: 301,
        d: '/en'
    },

    '/lectures.html': {
        c: 301,
        d: '/en'
    },

    '/privacy': {
        c: 301,
        d: '/legal/privacy'
    },

    '/security': {
        c: 301,
        d: '/en'
    },

    '/website': {
        c: 301,
        d: '/en'
    },

    '/payment': {
        c: 301,
        d: '/en'
    },

    '/invoicing': {
        c: 301,
        d: '/en'
    },

    '/fakturering': {
        c: 301,
        d: '/sv'
    },

    '/tos': {
        c: 301,
        d: '/legal/tos'
    },

    '/helpcenter': {
        c: 301,
        d: '/en/support'
    },
    '/video': {
        c: 301,
        d: '/en/communication'
    },

    '/booking': {
        c: 301,
        d: '/en/online-booking'
    },

    '/en/career.html': {
        c: 301,
        d: '/career'
    },

    '/en/forms': {
        c: 301,
        d: '/en'
    },

    '/forms': {
        c: 301,
        d: '/en'
    },

    '/career.html': {
        c: 301,
        d: '/career'
    },

    '/edu-bankid': {
        c: 301,
        d: '/en'
    },

    '/edu-cal': {
        c: 301,
        d: '/en/online-booking'
    },

    '/backup': {
        c: 301,
        d: '/en'
    },

    '/support': {
        c: 301,
        d: '/en/support'
    },

    '/support.html': {
        c: 301,
        d: '/en/support'
    },

    // Svenska
    '/sv/feature/forms': {
        c: 301,
        d: '/en'
    },

    '/sv/feature/cal': {
        c: 301,
        d: '/sv/onlinebokning'
    },

    '/bokningssystem': {
        c: 301,
        d: '/sv/onlinebokning'
    },

    '/sv/rapporter': {
        c: 301,
        d: '/sv'
    },

    '/sv/uppgifter': {
        c: 301,
        d: '/sv'
    },

    '/sv/formulär': {
        c: 301,
        d: '/sv'
    },

    '/sv/dokument': {
        c: 301,
        d: '/sv'
    },

    '/1177': {
        c: 301,
        d: '/sv/1177'
    },


    // TODO edit redirect when a page about packages exists.
    '/packages': {
        c: 301,
        d: '/en/electronic-medical-record'
    },

    '/faq': {
        c: 301,
        d: '/en/support'
    },

    // Español
    '/es/kommunikation': {
        c: 301,
        d: '/es/video-y-chat-encriptados'
    },

    '/es/onlinebokning': {
        c: 301,
        d: '/es/sistema-de-reservas'
    },

    '/es/dokument': {
        c: 301,
        d: '/es'
    },

    '/es/fakturering': {
        c: 301,
        d: '/es/sistema-de-facturacion'
    },

    '/es/journalsystem': {
        c: 301,
        d: '/es/historia-clinica'
    },

    '/es/rapporter': {
        c: 301,
        d: '/es'
    },

    '/es/uppgifter': {
        c: 301,
        d: '/es'
    },

    '/es/formulär': {
        c: 301,
        d: '/es/historia-clinica'
    },

    '/es/formularios': {
        c: 301,
        d: '/es'
    },

    '/es/documentos': {
        c: 301,
        d: '/es'
    },

    '/es/booking': {
        c: 301,
        d: '/es/sistema-de-reservas'
    },

    '/es/feature/cal': {
        c: 301,
        d: '/es/sistema-de-reservas'
    },

    '/es/feature/log': {
        c: 301,
        d: '/es/historia-clinica'
    },

    '/es/log': {
        c: 301,
        d: '/es/historia-clinica'
    },

    '/es/feature/todos': {
        c: 301,
        d: '/es'
    },

    '/es/feature/forms': {
        c: 301,
        d: '/es'
    },

    '/es/tasks': {
        c: 301,
        d: '/es'
    },

    '/es/tareas': {
        c: 301,
        d: '/es'
    },

    '/es/tos.html': {
        c: 301,
        d: '/legal/tos'
    },

    '/es/career.html': {
        c: 301,
        d: '/career'
    },

    '/es/feature/invoicing': {
        c: 301,
        d: '/es/sistema-de-facturacion'
    },

    '/es/survey': {
        c: 301,
        d: '/es'
    },

    '/es/files': {
        c: 301,
        d: '/es'
    },

    '/es/chat': {
        c: 301,
        d: '/es/video-y-chat-encriptados'
    },

    '/es/invoicing': {
        c: 301,
        d: '/es/sistema-de-facturacion'
    },

    '/es/forms': {
        c: 301,
        d: '/es'
    },

    '/es/informes': {
        c: 301,
        d: '/es'
    },

    '/es/about-us': {
        c: 301,
        d: '/about-us'
    },

    '/es/career': {
        c: 301,
        d: '/career'
    },

    '/en/responsible-disclosure.html': {
        c: 301,
        d: '/en'
    },

    '/environment': {
        c: 301,
        d: '/about-us'
    },

    '/es/support.html': {
        c: 301,
        d: '/es/support'
    },

    '/es/enterprise.html': {
        c: 301,
        d: '/es'
    },

    '/es/enterprise': {
        c: 301,
        d: '/es'
    },

    '/es/environment.html': {
        c: 301,
        d: '/es'
    },

    '/environment.html': {
        c: 301,
        d: '/about-us'
    },

    '/en/rapporter': {
        c: 301,
        d: '/en'
    },

    '/en/uppgifter': {
        c: 302,
        d: '/sv'
    },

    '/en/fakturering': {
        c: 301,
        d: '/en/invoicing'
    },

    '/en/dokument': {
        c: 301,
        d: '/en'
    },

    '/en/kommunikation': {
        c: 301,
        d: '/en/communication'
    },

    // TODO redirect to /en/forms when it exists.
    '/en/formulär': {
        c: 301,
        d: '/en/electronic-medical-record'
    },

    '/en/onlinebokning': {
        c: 301,
        d: '/en/online-booking'
    },

    '/en/journalsystem': {
        c: 301,
        d: '/en/electronic-medical-record'
    },

    '/en/reports': {
        c: 301,
        d: '/en'
    },

    '/en/feature/reports': {
        c: 301,
        d: '/en'
    },

    '/en/feature/communication': {
        c: 301,
        d: '/en/communication'
    },

    '/en/gdpr': {
        c: 301,
        d: '/en'
    },

    '/en/tasks': {
        c: 302,
        d: '/en'
    },

    '/en/domain': {
        c: 301,
        d: '/en'
    },

    '/en/documents': {
        c: 301,
        d: '/en'
    },

    '/domain': {
        c: 301,
        d: '/en'
    },

    '/en/feature/documents': {
        c: 301,
        d: '/en'
    },

    '/en/booking': {
        c: 301,
        d: '/en/online-booking'
    },

    '/en/feature/cal': {
        c: 301,
        d: '/en/online-booking'
    },

    '/developer': {
        c: 301,
        d: '/career'
    },

    '/en/developer': {
        c: 301,
        d: '/career'
    },

    '/en/case/fakturering': {
        c: 302,
        d: '/en/invoicing'
    },

    '/case/silvia': {
        c: 302,
        d: '/en/case/osteopatia-mallorca'
    },

    '/case/psykologa': {
        c: 302,
        d: '/en/case/afobia'
    },

    '/en/files': {
        c: 302,
        d: '/en'
    }
};

const handlePossibleRedirects = function (path: string) {
    const decodedPath: string = decodeURIComponent(path);
    const match: boolean = pathsRedirectMap[decodedPath];

    if (match) {
        console.log('match on redirect, redirecting...');
        throw redirect(match['c'], match['d']);
    }
};

export async function handle({ event, resolve }) {
    handlePossibleRedirects(event.url.pathname);

    return resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%lang%', getLang(event))
    });
}
