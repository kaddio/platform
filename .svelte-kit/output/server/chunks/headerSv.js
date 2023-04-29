import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { N as NavSv } from "./navSv.js";
const HeaderSv = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(NavSv, "Nav").$$render($$result, {}, {}, {})}`;
});
export {
  HeaderSv as H
};
