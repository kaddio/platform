import type { RequestEvent } from '@sveltejs/kit';

const fingerprint = function (str: string) {
    const stringToHash = function (s: string) {
        return s.split('').reduce((hash, char) => {
            return char.charCodeAt(0) + (hash << 6) + (hash << 16) - hash;
        }, 0);
    };

    return stringToHash(str);
};

export const browserFingerprint = (request: RequestEvent, ip: string) => {
    const userAgent = request.headers.get('user-agent');
    const acceptLanguage = request.headers.get('accept-language');

    // Dev fix to have ip's same
    if (ip == '::1') {
        ip = '127.0.0.1';
    }

    return fingerprint(`${ip};${userAgent};${acceptLanguage}`);
};
