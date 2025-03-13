import * as server from '../entries/pages/startup/business-information/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/startup/business-information/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/startup/business-information/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.DF81T5ME.js","_app/immutable/chunks/DFTka6-O.js","_app/immutable/chunks/BUypM0US.js","_app/immutable/chunks/AynngwJo.js","_app/immutable/chunks/yVaHOijw.js","_app/immutable/chunks/Bn_i0IBy.js","_app/immutable/chunks/CfUFxBdq.js","_app/immutable/chunks/ww0JMF8G.js","_app/immutable/chunks/BhsvEGof.js","_app/immutable/chunks/BjxqmXa0.js","_app/immutable/chunks/DMUts7z7.js","_app/immutable/chunks/DPF4Ztvj.js"];
export const stylesheets = ["_app/immutable/assets/7.CGPS4nM4.css","_app/immutable/assets/Input.PoGx-UDA.css","_app/immutable/assets/Breadcrumb.B2eUEz3t.css","_app/immutable/assets/FlexGroup.CMVQpWRT.css","_app/immutable/assets/nprogress.BXeebIZl.css"];
export const fonts = [];
