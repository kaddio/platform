import { redirect } from '@sveltejs/kit';

export const load = async function ({ params }) {
    const red = {
        'es-2024': '/es',
        'es-2024-historia-clinica': '/es/historia-clinica'
    };

    console.log(params);

    const match = red[params?.source];

    if (match) {
        console.log('Match!');
        throw redirect(301, match);
    } else {
        throw redirect(301, '/en');
    }
};
