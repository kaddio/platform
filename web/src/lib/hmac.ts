import {createHmac} from "crypto";

export const hmac = function(data: string, secret: string): string{
    return createHmac('sha256', secret).update(data).digest('hex');
}