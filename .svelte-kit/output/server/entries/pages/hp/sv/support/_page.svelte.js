import { c as create_ssr_component, e as escape, s as setContext, v as validate_component } from "../../../../../chunks/index3.js";
import { F as FooterSv } from "../../../../../chunks/footerSv.js";
import { N as NavSv } from "../../../../../chunks/navSv.js";
const SimpleCentered = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"isolate bg-white py-24 px-6 sm:py-32 lg:px-8"}"><div class="${"mx-auto max-w-2xl sm:text-center"}"><h2 class="${"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"}">${slots.title ? slots.title({}) : ``}</h2>
	  <p class="${"mt-2 text-lg leading-8 text-gray-600"}">${slots.sub ? slots.sub({}) : ``}</p></div>
	<div class="${"mx-auto mt-20 max-w-lg space-y-16"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const SimpleCenteredPiece = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  return `<div class="${"flex gap-x-6"}"><div class="${"flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-600"}"><i class="${"fa fa-" + escape(icon, true) + " text-white"}"></i></div>
    <div><h3 class="${"text-base font-semibold leading-7 text-gray-900"}">${slots.title ? slots.title({}) : ``}</h3>
      <p class="${"mt-2 leading-7 text-gray-600"}">${slots.body ? slots.body({}) : ``}</p>
      <p class="${"mt-4"}">${slots.link ? slots.link({}) : ``}</p></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setContext("lang", "sv");
  return `${$$result.head += `<!-- HEAD_svelte-1pdha6h_START -->${$$result.title = `<title>Kaddio - Support</title>`, ""}<meta name="${"description"}" content="${"Kontakta Kaddio support"}"><!-- HEAD_svelte-1pdha6h_END -->`, ""}

${validate_component(NavSv, "NavSv").$$render($$result, {}, {}, {})}

${validate_component(SimpleCentered, "SimpleCentered").$$render($$result, {}, {}, {
    sub: () => {
      return `<span slot="${"sub"}">Vi finns här för att hjälpa till</span>`;
    },
    title: () => {
      return `<span slot="${"title"}">Kontakta oss</span>`;
    },
    default: () => {
      return `${validate_component(SimpleCenteredPiece, "SimpleCenteredPiece").$$render($$result, { icon: "messages-question" }, {}, {
        link: () => {
          return `<span slot="${"link"}"><a href="${"https://support.kaddio.com/booking"}" class="${"text-sm font-semibold leading-6 text-purple-600"}">Boka tid <span aria-hidden="${"true"}">→</span></a></span>`;
        },
        body: () => {
          return `<span slot="${"body"}">Du kan själv bli kund genom att <a href="${"/hp/sv/create"}" class="${"font-semibold text-purple-600"}">Skapa konto</a>. Behöver du hjälp kan du även boka in en tid så ringer vi upp dig			
		</span>`;
        },
        title: () => {
          return `<span slot="${"title"}">Bli kund</span>`;
        }
      })}

	${validate_component(SimpleCenteredPiece, "SimpleCenteredPiece").$$render($$result, { icon: "hands-holding-heart" }, {}, {
        link: () => {
          return `<span slot="${"link"}"><a href="${"https://help.kaddio.com/help"}" class="${"text-sm font-semibold leading-6 text-purple-600"}">help.kaddio.com <span aria-hidden="${"true"}">→</span></a></span>`;
        },
        body: () => {
          return `<span slot="${"body"}">I Kaddios Hjälpcenter help.kaddio.com fyller vi kontinuerligt på med artiklar och svar på vanliga frågor.
		</span>`;
        },
        title: () => {
          return `<span slot="${"title"}">Hjälpcenter</span>`;
        }
      })}	

	${validate_component(SimpleCenteredPiece, "SimpleCenteredPiece").$$render($$result, { icon: "envelope" }, {}, {
        link: () => {
          return `<span slot="${"link"}"><a href="${"mailto:support@kaddio.com"}" class="${"text-sm font-semibold leading-6 text-purple-600"}">support@kaddio.com <span aria-hidden="${"true"}">→</span></a></span>`;
        },
        body: () => {
          return `<span slot="${"body"}">Det går även bra att maila oss för frågor och support. Under vardagar 9-15 gör vi vårt bästa för att svara dig inom några timmar.
		</span>`;
        },
        title: () => {
          return `<span slot="${"title"}">E-post</span>`;
        }
      })}		

	${validate_component(SimpleCenteredPiece, "SimpleCenteredPiece").$$render($$result, { icon: "signal" }, {}, {
        body: () => {
          return `<span slot="${"body"}">Undrar du hur det går för Kaddio just nu? Verkar det som att Kaddio har problem? Kolla vår status-sida :)
		</span>`;
        },
        title: () => {
          return `<span slot="${"title"}">Status <span class="${"inline-flex items-center rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-800"}">Kommer snart</span></span>`;
        }
      })}`;
    }
  })}


  ${validate_component(FooterSv, "FooterSv").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
