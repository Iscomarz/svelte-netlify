export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.aQ4cb23K.js","app":"_app/immutable/entry/app.Bh_KJ3yK.js","imports":["_app/immutable/entry/start.aQ4cb23K.js","_app/immutable/chunks/entry.2uJJB8aW.js","_app/immutable/chunks/scheduler.TCKgCs85.js","_app/immutable/entry/app.Bh_KJ3yK.js","_app/immutable/chunks/scheduler.TCKgCs85.js","_app/immutable/chunks/index.Tu460vhc.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
