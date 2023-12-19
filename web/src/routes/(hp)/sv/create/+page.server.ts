import { createOrg } from '$lib/createOrg';

export const actions = {
    async default(event) {
        return createOrg(event);
    }
};
