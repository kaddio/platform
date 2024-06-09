import type { RequestEvent } from '@sveltejs/kit';

export const browserFingerprint = (request: RequestEvent, ip: string) => {
    const stringToHash = function (s: string) {
        return s.split('').reduce((hash, char) => {
            return char.charCodeAt(0) + (hash << 6) + (hash << 16) - hash;
        }, 0);
    };

    const userAgent = request.headers.get('user-agent');
    const language = request.headers.get('accept-language');
    const validityInterval = Math.round(new Date() / 1000 / 3600 / 24 / 4);

    return stringToHash(`${ip};${userAgent};${language};${validityInterval}`);
};
