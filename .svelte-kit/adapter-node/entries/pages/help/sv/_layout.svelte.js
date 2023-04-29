import { c as create_ssr_component } from "../../../../chunks/index3.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-vd4ww9{max-width:35rem;margin:5rem auto}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div style="${"background-image: url(/img/man.jpg);"}"><form method="${"GET"}" class="${"svelte-vd4ww9"}"><div class="${"input-group"}"><input name="${"q"}" class="${"form-control input-lg"}" placeholder="${"Sök hjälpartiklar..."}">
		<div class="${"input-group-addon"}"><button type="${"submit"}" class="${"btn btn-default"}">Sök</button></div></div></form></div>
${slots.default ? slots.default({}) : `
`}`;
});
export {
  Layout as default
};
