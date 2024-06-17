import { dev } from '$app/environment';
import { fail } from '@sveltejs/kit';

export const contactOrg = async function ({ request }) {
    const data = await request.formData();
    const jsonData = Object.fromEntries(data.entries());

    const URL = dev
        ? 'http://localhost:3000/api/post-contact-form'
        : 'https://api.kaddio.com/api/post-contact-form';

    console.log(jsonData);

    let r;

    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        });

        r = await response.json();
        console.log(r);
    } catch (e) {
        console.log(e);
        return fail(400, { success: false });
    }

    if (r.status == 'success') {
        return {
            success: true
        };
    } else if (r.status == 'fail' && r.msg == 'Alla fält är ej ifyllda') {
        return fail(400, {
            missingFields: true
        });
    } else if (r.status == 'fail' && r.msg == 'URL är upptagen, prova med en annan') {
        return fail(400, {
            urlUnavailable: true
        });
    }

    return fail(400);
};
