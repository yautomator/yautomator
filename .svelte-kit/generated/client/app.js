export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10')
];

export const server_loads = [2];

export const dictionary = {
		"/organizations/accelerators": [4],
		"/startup/[startupId]/about": [~5,[2]],
		"/startup/[startupId]/business": [~6,[2]],
		"/startup/[startupId]/founders": [~7,[2]],
		"/startup/[startupId]/media-and-links": [~8,[2]],
		"/startup/[startupId]/organizations/[orgType]": [~9,[2,3]],
		"/startup/[startupId]/organizations/[orgType]/[orgId]": [~10,[2,3]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';