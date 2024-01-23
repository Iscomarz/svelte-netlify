

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2UxKO6Q-.js","_app/immutable/chunks/scheduler.TCKgCs85.js","_app/immutable/chunks/index.Tu460vhc.js","_app/immutable/chunks/entry.2uJJB8aW.js"];
export const stylesheets = [];
export const fonts = [];
