import { c as create_ssr_component, d as add_attribute, e as escape, f as null_to_empty, v as validate_component, h as each } from "../../../../chunks/index3.js";
const card_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".kd-card.svelte-5vikrr{background:white;padding:1rem;border-radius:4px;transition:all 0.2s ease;box-shadow:0 4px 10px -4px rgba(0, 0, 0, 0.2);border:1px solid var(--gray-800)}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"kd-card svelte-5vikrr"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const helpArticleLink_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".help-article.svelte-11z2ynd{display:flex;flex-direction:column}.icon.svelte-11z2ynd{font-size:3rem;color:#ccc}",
  map: null
};
const Help_article_link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { iconClass } = $$props;
  let { title } = $$props;
  let { href } = $$props;
  if ($$props.iconClass === void 0 && $$bindings.iconClass && iconClass !== void 0)
    $$bindings.iconClass(iconClass);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css$1);
  return `<a class="${"help-article svelte-11z2ynd"}"${add_attribute("href", href, 0)}><div class="${"icon svelte-11z2ynd"}"><i class="${escape(null_to_empty(iconClass), true) + " svelte-11z2ynd"}"></i></div>
    <div class="${"title"}">${escape(title)}</div>
</a>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".links.svelte-1aci9ys{display:flex;gap:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<header class="${"top-section hidden-print"}"></header>
<div class="${"container"}"><div class="${"row"}"><div class="${"col-md-12"}"><h1>Kom igång med Kaddio</h1></div>
        <div class="${"links svelte-1aci9ys"}">${validate_component(Help_article_link, "HelpArticleLink").$$render(
    $$result,
    {
      title: "Skapa konto",
      href: "allmänt/skapa-konto",
      iconClass: "fa fa-user"
    },
    {},
    {}
  )}
            ${validate_component(Help_article_link, "HelpArticleLink").$$render(
    $$result,
    {
      title: "Journal",
      href: "journal/kom-igång",
      iconClass: "fa fa-file"
    },
    {},
    {}
  )}
            ${validate_component(Help_article_link, "HelpArticleLink").$$render(
    $$result,
    {
      title: "Bokning",
      href: "bokning/kom-igång",
      iconClass: "fa fa-calendar"
    },
    {},
    {}
  )}
            ${validate_component(Help_article_link, "HelpArticleLink").$$render(
    $$result,
    {
      title: "Fakturering",
      href: "faktura/kom-igång",
      iconClass: "fa fa-dollar"
    },
    {},
    {}
  )}</div></div>
        
    
    <h1>Lär dig mer om Kaddio</h1>
    ${each(data ? Object.entries(data.categories) : [], ([category, articles]) => {
    return `<div class="${"row"}"><div class="${"col-md-6"}">${validate_component(Card, "Card").$$render($$result, {}, {}, {
      default: () => {
        return `<h4>${escape(category)}</h4>
                ${each(articles, (article) => {
          return `<a${add_attribute("href", article.path, 0)}>${escape(article.title)}</a>`;
        })}
            `;
      }
    })}</div>
    </div>`;
  })}
<h1>Vanliga frågor</h1>

</div>`;
});
export {
  Page as default
};
