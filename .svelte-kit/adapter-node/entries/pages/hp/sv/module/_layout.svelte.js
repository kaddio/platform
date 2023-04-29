import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { F as FooterSv } from "../../../../../chunks/footerSv.js";
import { H as HeaderSv } from "../../../../../chunks/headerSv.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(HeaderSv, "HeaderSv").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}


${validate_component(FooterSv, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
