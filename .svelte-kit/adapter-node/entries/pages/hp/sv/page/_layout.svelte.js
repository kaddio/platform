import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { F as FooterSv } from "../../../../../chunks/footerSv.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}

${validate_component(FooterSv, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
