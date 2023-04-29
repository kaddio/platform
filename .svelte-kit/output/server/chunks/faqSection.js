import { c as create_ssr_component } from "./index3.js";
const Qa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"pt-8 lg:grid lg:grid-cols-12 lg:gap-8"}"><dt class="${"text-base font-semibold leading-7 text-white lg:col-span-5"}">${slots.q ? slots.q({}) : ``}</dt>
  <dd class="${"mt-4 lg:col-span-7 lg:mt-0"}"><p class="${"text-base leading-7 text-gray-300"}">${slots.a ? slots.a({}) : ``}</p></dd></div>`;
});
const ModuleFeature = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><dt class="${"font-semibold text-gray-900"}">${slots.title ? slots.title({}) : ``}</dt>
    <dd class="${"mt-1 text-gray-600"}">${slots.body ? slots.body({}) : ``}</dd></div>`;
});
const ModuleSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"bg-white py-24 sm:py-32"}"><div class="${"mx-auto max-w-7xl px-6 lg:px-8"}"><div class="${"mx-auto max-w-2xl lg:mx-0"}"><h2 class="${"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"}">${slots.title ? slots.title({}) : ``}</h2>
		<p class="${"mt-6 text-lg leading-8 text-gray-600"}">${slots.sub ? slots.sub({}) : ``}</p></div>
	  <dl class="${"mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"}">${slots.default ? slots.default({}) : ``}</dl></div></div>`;
});
const FaqSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"bg-gray-900"}"><div class="${"mx-auto max-w-7xl divide-y divide-white/10 px-6 py-24 sm:py-32 lg:py-40 lg:px-8"}"><h2 class="${"text-2xl font-bold leading-10 tracking-tight text-white"}">${slots.title ? slots.title({}) : ``}</h2>

		<dl class="${"mt-10 space-y-8 divide-y divide-white/10"}">${slots.default ? slots.default({}) : ``}</dl></div></div>`;
});
export {
  FaqSection as F,
  ModuleSection as M,
  Qa as Q,
  ModuleFeature as a
};
