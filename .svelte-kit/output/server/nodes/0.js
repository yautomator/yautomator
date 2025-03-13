import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.C_gnw-5K.js","_app/immutable/chunks/DFTka6-O.js","_app/immutable/chunks/BUypM0US.js","_app/immutable/chunks/Bn_i0IBy.js","_app/immutable/chunks/CfUFxBdq.js","_app/immutable/chunks/ww0JMF8G.js","_app/immutable/chunks/yVaHOijw.js","_app/immutable/chunks/DPF4Ztvj.js","_app/immutable/chunks/Bvena8yX.js","_app/immutable/chunks/B9p0oQwq.js","_app/immutable/chunks/DMUts7z7.js"];
export const stylesheets = ["_app/immutable/assets/0.DpbQjF9V.css","_app/immutable/assets/nprogress.BXeebIZl.css"];
export const fonts = [];
