import { contactOrg } from './contactOrg.js';

export const actions = {
    async default(event) {
        return contactOrg(event);
    }
};
