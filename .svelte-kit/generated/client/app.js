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
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27')
];

export const server_loads = [];

export const dictionary = {
		"/": [~7],
		"/help/sv": [~8,[2]],
		"/help/sv/allmänt/logga-in": [9,[2]],
		"/help/sv/allmänt/starta-konto": [10,[2]],
		"/help/sv/hej": [11,[2]],
		"/hp": [~12],
		"/hp/en/page/about-us": [13,[3]],
		"/hp/en/page/career": [14,[3]],
		"/hp/en/page/environment": [15,[3]],
		"/hp/en/referral": [16,[3]],
		"/hp/sv": [17],
		"/hp/sv/company/[url]": [~18],
		"/hp/sv/create": [19],
		"/hp/sv/module/cal": [20,[5]],
		"/hp/sv/module/invoicing": [21,[5]],
		"/hp/sv/module/log": [22,[5]],
		"/hp/sv/page/privacy": [23,[6]],
		"/hp/sv/page/tos": [24,[6]],
		"/hp/sv/sign-in": [25],
		"/hp/sv/support": [26],
		"/r/[token]": [~27]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';