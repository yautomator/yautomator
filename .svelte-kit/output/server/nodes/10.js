import * as server from '../entries/pages/startup/media-and-links/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/startup/media-and-links/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/startup/media-and-links/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.CE8dXcS0.js","_app/immutable/chunks/3FD4uSek.js","_app/immutable/chunks/DPa9U1Vh.js","_app/immutable/chunks/Bvdpga4h.js","_app/immutable/chunks/BeX4TqfZ.js","_app/immutable/chunks/DKJBQ7D2.js","_app/immutable/chunks/2Vc85SlI.js","_app/immutable/chunks/tqzrrQtv.js","_app/immutable/chunks/_HYCiC84.js","_app/immutable/chunks/BO3e8EWW.js","_app/immutable/chunks/B64zA8Al.js","_app/immutable/chunks/D-tMPdUq.js","_app/immutable/chunks/BWPA0p-E.js","_app/immutable/chunks/CHCK7_Ko.js","_app/immutable/chunks/CdjIkTAD.js","_app/immutable/chunks/DkTzFMlU.js","_app/immutable/chunks/Bvena8yX.js"];
export const stylesheets = ["_app/immutable/assets/8.CGPS4nM4.css","_app/immutable/assets/Input.PoGx-UDA.css","_app/immutable/assets/Breadcrumb.B2eUEz3t.css","_app/immutable/assets/StartupIcon.BXeebIZl.css","_app/immutable/assets/FileUpload.Sall2HEm.css"];
export const fonts = [];
