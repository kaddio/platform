export const countryFromRequest = function (request: RequestEvent): string {
    return request.headers.get('cf-ipcountry');
};
