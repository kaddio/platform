import type { RequestEvent } from '@sveltejs/kit';

const fingerprint = function (userAgent: string, acceptLanguage: string, ip: string) {
    const stringToHash = function (s: string) {
        return s.split('').reduce((hash, char) => {
            return char.charCodeAt(0) + (hash << 6) + (hash << 16) - hash;
        }, 0);
    };

    const validityInterval = Math.round(new Date() / 1000 / 3600 / 24 / 4);

    return stringToHash(`${ip};${userAgent};${acceptLanguage};${validityInterval}`);
};

export const browserFingerprint = (request: RequestEvent, ip: string) => {
    const userAgent = request.headers.get('user-agent');
    const acceptLanguage = request.headers.get('accept-language');

    return fingerprint(userAgent, acceptLanguage, ip);
};
