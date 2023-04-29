import { c as create_ssr_component, e as escape, f as null_to_empty, v as validate_component } from "./index3.js";
import { N as NavSv } from "./navSv.js";
const heroBox_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".green.svelte-njf0r1{background:#81E481 linear-gradient(to top right, #81E481, #FCFC83);color:#008A7E}.pink.svelte-njf0r1{background:#9BF linear-gradient(to top left, #9BF, #FFDBF3);color:#6345A1}.feature-highlight-card.svelte-njf0r1{padding:30px;border-radius:var(--border-radius);box-shadow:0 7px 30px -10px rgba(150, 170, 180, 0.5)}@media(min-width: 768px){.feature-highlight-card.svelte-njf0r1{padding:30px 120px}}.feature-highlight-card--hero.svelte-njf0r1{position:relative;margin-top:-30px;margin-bottom:60px;padding:var(--gap)}.feature-highlight-card__text.svelte-njf0r1{font-size:16px;line-height:1.5}@media(min-width: 768px){.feature-highlight-card__text.svelte-njf0r1{font-size:18px;line-height:1.6}}",
  map: null
};
const HeroBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { variant = "green" } = $$props;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  $$result.css.add(css$2);
  return `<div class="${escape(null_to_empty(variant + " tight feature-highlight-card feature-highlight-card--hero"), true) + " svelte-njf0r1"}"><span class="${"feature-highlight-card__text svelte-njf0r1"}">${slots.default ? slots.default({}) : ``}</span>
</div>`;
});
const heroTitle_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h1.svelte-1u6dobt{text-align:center}",
  map: null
};
const HeroTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<h1 class="${"jumbotron svelte-1u6dobt"}">${slots.default ? slots.default({}) : ``}
</h1>`;
});
const headerHero_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-oe6krz{background-image:url(/img/man.jpg)}",
  map: null
};
const Header_hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"hero-header top-section hidden-print svelte-oe6krz"}"><div class="${"hero-header__content"}">${validate_component(NavSv, "NavSv").$$render($$result, {}, {}, {})}

        ${validate_component(HeroTitle, "HeroTitle").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.title ? slots.title({}) : ``}`;
    }
  })}</div>
</header>`;
});
export {
  Header_hero as H,
  HeroBox as a
};
