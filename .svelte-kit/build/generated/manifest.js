const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\advent\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\advent\\04 copy\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\advent\\access.svelte"),
	() => import("..\\..\\..\\src\\routes\\advent\\04\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\advent\\08\\index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/advent/index.svelte
	[/^\/advent\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/advent/04 copy/index.svelte
	[/^\/advent\/04 copy\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/advent/access.svelte
	[/^\/advent\/access\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/advent/04/index.svelte
	[/^\/advent\/04\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/advent/08/index.svelte
	[/^\/advent\/08\/?$/, [c[0], c[7]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];