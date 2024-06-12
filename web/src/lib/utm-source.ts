export const utmSource = function (url): string {
    return url.searchParams.get('utm_source') || 'na';
};
