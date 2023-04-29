export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["audio/Kaddio (Give Better).mp3","css/unslider/unslider-dots.css","css/unslider/unslider.css","customer-logos/IKSU Orange 2019 (kopia).png","customer-logos/Twitch.png","customer-logos/dinpsykolog.png","customer-logos/malmo.png","customer-logos/rfsl.png","customer-logos/storasyster_ny.png","customer-logos/sveakbt.png","f/Behandlingsform.png","f/Ny behandlingsform.png","f/Tidsbokning.png","f/arbetstid2.png","f/b.png","f/fak1.png","f/fak2.png","f/j.png","f/mobilt_bankid.png","f/mobilt_bankid2.png","favicon.png","img/.DS_Store","img/IMG_0078 Medium.png","img/IMG_0081 Medium.png","img/IMG_0082 Medium.png","img/IMG_0083 Medium.png","img/IMG_0087 Medium.png","img/IMG_0089 Medium.png","img/IMG_0090 Medium.png","img/IMG_0091 Medium.png","img/IMG_0093 Medium.png","img/IMG_0094 Medium.png","img/IMG_0095 Medium.png","img/IMG_0096 Medium.png","img/IMG_0097 Medium.png","img/apple-touch-icon-precomposed.png","img/carlobilly.png","img/edu.jpg","img/fan.jpg","img/kaddio-logo.png","img/kaddio-svart.png","img/koa.png","img/man.jpg","img/screenshot.png","img/stair.jpg","img/team.png","js/smooth-scroll.js","js/unslider-min.js"]),
	mimeTypes: {".mp3":"audio/mpeg",".css":"text/css",".png":"image/png",".jpg":"image/jpeg",".js":"application/javascript"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ed2a8191.js","imports":["_app/immutable/entry/start.ed2a8191.js","_app/immutable/chunks/index.35ae8660.js","_app/immutable/chunks/singletons.f66c647f.js","_app/immutable/chunks/index.c7e4468f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.8c0c8074.js","imports":["_app/immutable/entry/app.8c0c8074.js","_app/immutable/chunks/index.35ae8660.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js'),
			() => import('./nodes/24.js'),
			() => import('./nodes/25.js'),
			() => import('./nodes/26.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/help/sv",
				pattern: /^\/help\/sv\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/help/sv/allmänt/logga-in",
				pattern: /^\/help\/sv\/allmänt\/logga-in\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/help/sv/allmänt/starta-konto",
				pattern: /^\/help\/sv\/allmänt\/starta-konto\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/help/sv/hej",
				pattern: /^\/help\/sv\/hej\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/hp",
				pattern: /^\/hp\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/hp/en/page/about-us",
				pattern: /^\/hp\/en\/page\/about-us\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/hp/en/page/career",
				pattern: /^\/hp\/en\/page\/career\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/hp/en/page/environment",
				pattern: /^\/hp\/en\/page\/environment\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/hp/en/referral",
				pattern: /^\/hp\/en\/referral\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/hp/sv",
				pattern: /^\/hp\/sv\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			},
			{
				id: "/hp/sv/create",
				pattern: /^\/hp\/sv\/create\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 17 },
				endpoint: null
			},
			{
				id: "/hp/sv/module/cal",
				pattern: /^\/hp\/sv\/module\/cal\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/hp/sv/module/invoicing",
				pattern: /^\/hp\/sv\/module\/invoicing\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/hp/sv/module/log",
				pattern: /^\/hp\/sv\/module\/log\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/hp/sv/page/privacy",
				pattern: /^\/hp\/sv\/page\/privacy\/?$/,
				params: [],
				page: { layouts: [0,5], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/hp/sv/page/tos",
				pattern: /^\/hp\/sv\/page\/tos\/?$/,
				params: [],
				page: { layouts: [0,5], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/hp/sv/sign-in",
				pattern: /^\/hp\/sv\/sign-in\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 23 },
				endpoint: null
			},
			{
				id: "/hp/sv/support",
				pattern: /^\/hp\/sv\/support\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 24 },
				endpoint: null
			},
			{
				id: "/r/[token]",
				pattern: /^\/r\/([^/]+?)\/?$/,
				params: [{"name":"token","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 25 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
