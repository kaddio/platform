import { dev } from '$app/environment';

export const apiUrl = function () {
    if (dev) {
        return 'http://127.0.0.1:3000';
    }

    return 'https://support.kaddio.com';
};

export const kaddioOrgUrl = function (url: string) {
    if (dev) {
        return 'http://localhost:3000';
    }

    return `https://${url}.kaddio.com`;
};
