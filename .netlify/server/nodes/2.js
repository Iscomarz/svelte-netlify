

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.GQCAWyPr.js","_app/immutable/chunks/scheduler.TCKgCs85.js","_app/immutable/chunks/index.Tu460vhc.js"];
export const stylesheets = ["_app/immutable/assets/2.9f6Rz51f.css"];
export const fonts = [];
