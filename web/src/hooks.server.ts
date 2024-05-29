import { redirect } from '@sveltejs/kit';

function getLang(event) {
    const sv = event.url.pathname.includes('/sv') && 'sv';
    const es = event.url.pathname.includes('/es') && 'es';

    return sv || es || 'en';
}

const pathsRedirectMap = {
    '/tos': {
        c: 301,
        d: '/en/legal/tos'
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

    '/support.html': {
        c: 301,
        d: '/en/support'
    },

    // Svenska
    '/sv/feature/cal': {
        c: 301,
        d: '/sv/onlinebokning'
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
        d: '/es/documentos'
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
        d: '/es/informes'
    },

    '/es/uppgifter': {
        c: 301,
        d: '/es/tareas'
    },

    '/es/formulär': {
        c: 301,
        d: '/es/formularios'
    },

    '/es/feature/log': {
        c: 301,
        d: '/es/historia-clinica'
    },

    '/es/feature/todos': {
        c: 301,
        d: '/es/tareas'
    },

    '/es/tos.html': {
        c: 301,
        d: '/es/legal/tos'
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
        d: '/es/formularios'
    },

    '/es/files': {
        c: 301,
        d: '/es/documentos'
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
        d: '/es/formularios'
    },

    '/es/about-us': {
        c: 301,
        d: '/about-us'
    },

    '/es/career': {
        c: 301,
        d: '/career'
    },

    // English
    '/en/rapporter': {
        c: 301,
        d: '/en/reports'
    },

    // TODO /en/tasks when we have it!
    '/en/uppgifter': {
        c: 302,
        d: '/sv/uppgifter'
    },

    '/en/fakturering': {
        c: 301,
        d: '/en/invoicing'
    },

    '/en/dokument': {
        c: 301,
        d: '/en/documents'
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

    '/en/feature/reports': {
        c: 301,
        d: '/en/reports'
    },

    // '/en/gdpr': {
    //     c: 301,
    //     d: '/'
    // },

    '/en/tasks': {
        c: 302,
        d: '/en/electronic-medical-record'
    },

    // '/en/domain': {
    //     c: 302,
    //     d: '/en/homepage'
    // }

    '/en/feature/documents': {
        c: 301,
        d: '/en/documents'
    },

    '/en/booking': {
        c: 301,
        d: '/en/online-booking'
    },

    '/en/feature/cal': {
        c: 301,
        d: '/en/online-booking'
    },

    '/en/developer': {
        c: 302,
        d: '/career'
    },

    '/en/case/fakturering': {
        c: 302,
        d: '/en/invoicing'
    },

    '/en/files': {
        c: 302,
        d: '/en/documents'
    }
};

const handlePossibleRedirects = function (path: string) {
    const match = pathsRedirectMap[path];

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
