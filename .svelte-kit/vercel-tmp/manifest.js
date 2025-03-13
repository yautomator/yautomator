export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/InterVariable.woff2","lotties/attachment.json","lotties/loading.json","lotties/organization.json"]),
	mimeTypes: {".png":"image/png",".woff2":"font/woff2",".json":"application/json"},
	_: {
		client: {start:"_app/immutable/entry/start.CgMSeq0F.js",app:"_app/immutable/entry/app.7uCb1VN4.js",imports:["_app/immutable/entry/start.CgMSeq0F.js","_app/immutable/chunks/yVaHOijw.js","_app/immutable/chunks/BUypM0US.js","_app/immutable/entry/app.7uCb1VN4.js","_app/immutable/chunks/BUypM0US.js","_app/immutable/chunks/DFTka6-O.js","_app/immutable/chunks/DPF4Ztvj.js","_app/immutable/chunks/BkuYNgdG.js","_app/immutable/chunks/ww0JMF8G.js","_app/immutable/chunks/B3zev3eE.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js'))
		],
		routes: [
			{
				id: "/organizations/accelerators",
				pattern: /^\/organizations\/accelerators\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/organizations/incubators",
				pattern: /^\/organizations\/incubators\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/organizations/launch",
				pattern: /^\/organizations\/launch\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/organizations/venture-capital",
				pattern: /^\/organizations\/venture-capital\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/startup/basic-information",
				pattern: /^\/startup\/basic-information\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/startup/business-information",
				pattern: /^\/startup\/business-information\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/startup/founders",
				pattern: /^\/startup\/founders\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/startup/media-and-links",
				pattern: /^\/startup\/media-and-links\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
