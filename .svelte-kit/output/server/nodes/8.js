import * as server from '../entries/pages/help/sv/_page.server.ts.js';

export const index = 8;
export const component = async () => (await import('../entries/pages/help/sv/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/help/sv/+page.server.ts";
export const imports = ["_app/immutable/entry/help-sv-page.svelte.1dba1bd4.js","_app/immutable/chunks/index.35ae8660.js"];
export const stylesheets = ["_app/immutable/assets/_page.af733f59.css"];
export const fonts = [];
