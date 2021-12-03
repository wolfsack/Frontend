import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\" />\n\t<meta name=\"description\" content=\"\" />\n\t<link rel=\"icon\" href=\"/logo.png\" />\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t" + head + "\n</head>\n\n<body>\n\t<div id=\"svelte\">" + body + "</div>\n</body>\n\n</html>";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-e94deb2f.js",
			css: [assets + "/_app/assets/start-61d1577b.css"],
			js: [assets + "/_app/start-e94deb2f.js",assets + "/_app/chunks/vendor-97ef8583.js",assets + "/_app/chunks/singletons-12a22614.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

// input has already been decoded by decodeURI
// now handle the rest that decodeURIComponent would do
const d = s => s
	.replace(/%23/g, '#')
	.replace(/%3[Bb]/g, ';')
	.replace(/%2[Cc]/g, ',')
	.replace(/%2[Ff]/g, '/')
	.replace(/%3[Ff]/g, '?')
	.replace(/%3[Aa]/g, ':')
	.replace(/%40/g, '@')
	.replace(/%26/g, '&')
	.replace(/%3[Dd]/g, '=')
	.replace(/%2[Bb]/g, '+')
	.replace(/%24/g, '$');

const empty = () => ({});

const manifest = {
	assets: [{"file":"dark.svg","size":1237,"type":"image/svg+xml"},{"file":"images/advent/quest-0.png","size":28114,"type":"image/png"},{"file":"images/advent/quest-1.png","size":9268,"type":"image/png"},{"file":"light.svg","size":1521,"type":"image/svg+xml"},{"file":"logo.png","size":2903,"type":"image/png"},{"file":"logo.svg","size":761,"type":"image/svg+xml"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/advent\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/advent/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/advent\/04 copy\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/advent/04 copy/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/advent\/access\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/advent/access.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/advent\/04\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/advent/04/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/advent\/08\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/advent/08/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("..\\..\\src\\routes\\__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components\\error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/advent/index.svelte": () => import("..\\..\\src\\routes\\advent\\index.svelte"),"src/routes/advent/04 copy/index.svelte": () => import("..\\..\\src\\routes\\advent\\04 copy\\index.svelte"),"src/routes/advent/access.svelte": () => import("..\\..\\src\\routes\\advent\\access.svelte"),"src/routes/advent/04/index.svelte": () => import("..\\..\\src\\routes\\advent\\04\\index.svelte"),"src/routes/advent/08/index.svelte": () => import("..\\..\\src\\routes\\advent\\08\\index.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-63b0d6f0.js","css":["assets/pages/__layout.svelte-ac006af4.css"],"js":["pages/__layout.svelte-63b0d6f0.js","chunks/vendor-97ef8583.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-d42ca9ad.js","css":[],"js":["error.svelte-d42ca9ad.js","chunks/vendor-97ef8583.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-ff7d582d.js","css":[],"js":["pages/index.svelte-ff7d582d.js","chunks/vendor-97ef8583.js","chunks/navigation-51f4a605.js","chunks/singletons-12a22614.js"],"styles":[]},"src/routes/advent/index.svelte":{"entry":"pages/advent/index.svelte-682164ec.js","css":["assets/pages/advent/index.svelte-41c5e9d8.css"],"js":["pages/advent/index.svelte-682164ec.js","chunks/vendor-97ef8583.js"],"styles":[]},"src/routes/advent/04 copy/index.svelte":{"entry":"pages/advent/04 copy/index.svelte-eb6e56ff.js","css":[],"js":["pages/advent/04 copy/index.svelte-eb6e56ff.js","chunks/vendor-97ef8583.js","chunks/navigation-51f4a605.js","chunks/singletons-12a22614.js"],"styles":[]},"src/routes/advent/access.svelte":{"entry":"pages/advent/access.svelte-6579d6e7.js","css":["assets/pages/advent/access.svelte-ff0193e9.css"],"js":["pages/advent/access.svelte-6579d6e7.js","chunks/vendor-97ef8583.js","chunks/navigation-51f4a605.js","chunks/singletons-12a22614.js"],"styles":[]},"src/routes/advent/04/index.svelte":{"entry":"pages/advent/04/index.svelte-81de5457.js","css":["assets/pages/advent/04/index.svelte-b0bfafdf.css"],"js":["pages/advent/04/index.svelte-81de5457.js","chunks/vendor-97ef8583.js","chunks/navigation-51f4a605.js","chunks/singletons-12a22614.js"],"styles":[]},"src/routes/advent/08/index.svelte":{"entry":"pages/advent/08/index.svelte-473f0361.js","css":["assets/pages/advent/08/index.svelte-2a93593f.css"],"js":["pages/advent/08/index.svelte-473f0361.js","chunks/vendor-97ef8583.js","chunks/navigation-51f4a605.js","chunks/singletons-12a22614.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}