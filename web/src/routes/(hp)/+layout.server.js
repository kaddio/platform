const browserFingerprint = (request, ip) => {
    const stringToHash = function (s) {
        return s.split('').reduce((hash, char) => {
            return char.charCodeAt(0) + (hash << 6) + (hash << 16) - hash;
        }, 0);
    };

    const domain = request.headers.get('host');
    const userAgent = request.headers.get('user-agent');
    const language = request.headers.get('accept-language');
    const validityInterval = Math.round(new Date() / 1000 / 3600 / 24 / 4);

    return stringToHash(`${ip};${domain};${userAgent};${language};${validityInterval}`);
};

export function load({ request, url, getClientAddress }) {
    const anonUserId = browserFingerprint(request, getClientAddress());

    const paramForTesting = url.searchParams.get('geo');

    // Cloudflare should set this header https://developers.cloudflare.com/support/network/configuring-ip-geolocation/
    const cloudflareGeoHeader = request.headers.get('cf-ipcountry');

    const geo = paramForTesting || cloudflareGeoHeader;

    return {
        geo,
        anonUserId
    };
}
