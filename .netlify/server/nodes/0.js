

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.6qDcC4dG.js","_app/immutable/chunks/scheduler.TCKgCs85.js","_app/immutable/chunks/index.Tu460vhc.js"];
export const stylesheets = [];
export const fonts = [];
