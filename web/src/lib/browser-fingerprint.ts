import type { RequestEvent } from '@sveltejs/kit';

const fingerprint = async function (str: string) {
    async function digestMessage(message: string) {
        return message.split('').reduce((hash, char) => {
            return char.charCodeAt(0) + (hash << 6) + (hash << 16) - hash;
        }, 0);
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
