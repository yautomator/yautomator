import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.C_QgiXlY.js","_app/immutable/chunks/3FD4uSek.js","_app/immutable/chunks/DPa9U1Vh.js","_app/immutable/chunks/2Vc85SlI.js","_app/immutable/chunks/DKJBQ7D2.js","_app/immutable/chunks/BeX4TqfZ.js","_app/immutable/chunks/XtTng_k9.js","_app/immutable/chunks/BO3e8EWW.js","_app/immutable/chunks/tqzrrQtv.js","_app/immutable/chunks/_HYCiC84.js","_app/immutable/chunks/B64zA8Al.js","_app/immutable/chunks/CHCK7_Ko.js","_app/immutable/chunks/Bvena8yX.js","_app/immutable/chunks/CL-8o4tt.js","_app/immutable/chunks/CdjIkTAD.js","_app/immutable/chunks/BWPA0p-E.js"];
export const stylesheets = ["_app/immutable/assets/0.DKdhfei4.css","_app/immutable/assets/app.CXO4P2vp.css","_app/immutable/assets/StartupIcon.BXeebIZl.css"];
export const fonts = [];
