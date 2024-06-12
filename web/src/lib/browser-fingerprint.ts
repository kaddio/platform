import type { RequestEvent } from '@sveltejs/kit';

const fingerprint = async function (str: string) {
    async function digestMessage(message: string) {
        const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
        const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgUint8); // hash the message
        const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
        const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
        return hashHex;
    }

    return await digestMessage(str);
};

export const browserFingerprint = async (request: RequestEvent, ip: string) => {
    const userAgent = request.headers.get('user-agent');
    const acceptLanguage = request.headers.get('accept-language');

    // Dev fix to have ip's same
    if (ip == '::1') {
        ip = '127.0.0.1';
    }

    return await fingerprint(`${ip};${userAgent};${acceptLanguage}`);
};
