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
		client: {start:"_app/immutable/entry/start.D76cYeXK.js",app:"_app/immutable/entry/app.DRyt7YUI.js",imports:["_app/immutable/entry/start.D76cYeXK.js","_app/immutable/chunks/BeX4TqfZ.js","_app/immutable/chunks/DKJBQ7D2.js","_app/immutable/chunks/DPa9U1Vh.js","_app/immutable/entry/app.DRyt7YUI.js","_app/immutable/chunks/DPa9U1Vh.js","_app/immutable/chunks/BO3e8EWW.js","_app/immutable/chunks/3FD4uSek.js","_app/immutable/chunks/CHCK7_Ko.js","_app/immutable/chunks/CRXt8nJT.js","_app/immutable/chunks/B64zA8Al.js","_app/immutable/chunks/De8R6xd3.js","_app/immutable/chunks/DKJBQ7D2.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js'))
		],
		routes: [
			{
				id: "/organizations/accelerators",
				pattern: /^\/organizations\/accelerators\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/organizations/incubators",
				pattern: /^\/organizations\/incubators\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/organizations/launch",
				pattern: /^\/organizations\/launch\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/organizations/venture-capital",
				pattern: /^\/organizations\/venture-capital\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/startup/basic-information",
				pattern: /^\/startup\/basic-information\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/startup/business-information",
				pattern: /^\/startup\/business-information\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/startup/founders",
				pattern: /^\/startup\/founders\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/startup/media-and-links",
				pattern: /^\/startup\/media-and-links\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/startup/[id]",
				pattern: /^\/startup\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
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
