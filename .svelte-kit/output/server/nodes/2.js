import * as server from '../entries/pages/startup/_id_/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/startup/[id]/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.CnMyl_XE.js","_app/immutable/chunks/3FD4uSek.js","_app/immutable/chunks/DPa9U1Vh.js","_app/immutable/chunks/2Vc85SlI.js"];
export const stylesheets = [];
export const fonts = [];
