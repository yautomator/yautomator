import * as server from '../entries/pages/startup/founders/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/startup/founders/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/startup/founders/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.DN1GX-Hb.js","_app/immutable/chunks/DFTka6-O.js","_app/immutable/chunks/BUypM0US.js","_app/immutable/chunks/DPF4Ztvj.js","_app/immutable/chunks/Bn_i0IBy.js","_app/immutable/chunks/CfUFxBdq.js","_app/immutable/chunks/ww0JMF8G.js","_app/immutable/chunks/BhsvEGof.js","_app/immutable/chunks/DMUts7z7.js","_app/immutable/chunks/AynngwJo.js","_app/immutable/chunks/yVaHOijw.js","_app/immutable/chunks/B9p0oQwq.js","_app/immutable/chunks/BMXMT_t3.js","_app/immutable/chunks/BkuYNgdG.js","_app/immutable/chunks/Bvena8yX.js","_app/immutable/chunks/BjxqmXa0.js","_app/immutable/chunks/DZHZd6xE.js","_app/immutable/chunks/B3zev3eE.js"];
export const stylesheets = ["_app/immutable/assets/8.B9L3dqG2.css","_app/immutable/assets/Breadcrumb.B2eUEz3t.css","_app/immutable/assets/nprogress.BXeebIZl.css","_app/immutable/assets/Input.PoGx-UDA.css","_app/immutable/assets/Select.BOLq4ulc.css","_app/immutable/assets/FlexGroup.CMVQpWRT.css","_app/immutable/assets/FileUpload.Sall2HEm.css"];
export const fonts = [];
