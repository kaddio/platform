import { c as create_ssr_component, d as add_attribute, v as validate_component, h as each, e as escape, b as subscribe, s as setContext } from "../../../../chunks/index3.js";
import { F as FooterSv } from "../../../../chunks/footerSv.js";
import { N as NavSv } from "../../../../chunks/navSv.js";
import { C as Cloud } from "../../../../chunks/cloud.js";
import { t as token } from "../../../../chunks/stores.js";
const ModulePresentation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "puzzle" } = $$props;
  let { href } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<div class="${"relative pl-16"}"><dt class="${"text-base font-semibold leading-7 text-gray-900"}"><div class="${"absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600"}">${slots.icon ? slots.icon({}) : ``}</div>
    ${slots.title ? slots.title({}) : ``}</dt>
  <dd class="${"mt-2 text-base leading-7 text-gray-600"}">${slots.body ? slots.body({}) : ``}</dd>

  <p class="${"mt-1"}"><a${add_attribute("href", href, 0)} class="${"text-sm font-semibold leading-6 text-purple-600"}">Läs mer <span aria-hidden="${"true"}">→</span></a></p></div>`;
});
const ModulesSv = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"bg-white py-24 sm:py-32"}"><div class="${"mx-auto max-w-7xl px-6 lg:px-8"}"><div class="${"mx-auto max-w-2xl lg:text-center"}"><h2 class="${"text-base font-semibold leading-7 text-purple-600"}">Kaddio</h2>
      <p class="${"mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"}">Ge(r) bättre hjälp</p>
      <p class="${"mt-6 text-lg leading-8 text-gray-600"}">Kaddio är så enkelt att använda att du knappt behöver tänka när du använder det, den energi kan du lägga på t.ex. dina kunder. Genom att alla funktioner finns i samma enkla system slipper du trötta ut frontalloben i onödan. Din hjärna kommer att älska det.</p></div>
    <div class="${"mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"}"><dl class="${"grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"}">${validate_component(ModulePresentation, "ModulePresentation").$$render($$result, { href: "sv/module/log" }, {}, {
    body: () => {
      return `<span slot="${"body"}">Flexibelt journalprogram som du själv anpassar efter din verksamhets behov.</span>`;
    },
    title: () => {
      return `<span slot="${"title"}">Dokumentation</span>`;
    },
    icon: () => {
      return `<span slot="${"icon"}"><i class="${"text-white fa-regular fa-heart"}"></i></span>`;
    }
  })}${validate_component(ModulePresentation, "ModulePresentation").$$render($$result, { href: "sv/module/cal" }, {}, {
    body: () => {
      return `<span slot="${"body"}">Kalender för verksamhetens alla behov samt flexibel tidsbokning med kortbetalning. Gruppass och enkelpass.</span>`;
    },
    title: () => {
      return `<span slot="${"title"}">Tidsbokning och kalender</span>`;
    },
    icon: () => {
      return `<span slot="${"icon"}"><i class="${"text-white fa-regular fa-stopwatch"}"></i></span>`;
    }
  })}${validate_component(ModulePresentation, "ModulePresentation").$$render($$result, { href: "sv/module/invoicing" }, {}, {
    body: () => {
      return `<span slot="${"body"}">Fakturera klienter och företag utifrån bokade tider eller journalanteckningar</span>`;
    },
    title: () => {
      return `<span slot="${"title"}">Fakturering</span>`;
    },
    icon: () => {
      return `<span slot="${"icon"}"><i class="${"text-white fa-regular fa-file-lines"}"></i></span>`;
    }
  })}${validate_component(ModulePresentation, "ModulePresentation").$$render($$result, { href: "sv/module/chat" }, {}, {
    body: () => {
      return `<span slot="${"body"}">Säker video för upp till 500 deltagare med skärmdelning, inspelning mm.</span>`;
    },
    title: () => {
      return `<span slot="${"title"}">Video och chat</span>`;
    },
    icon: () => {
      return `<span slot="${"icon"}"><i class="${"text-white fa-regular fa-comments"}"></i></span>`;
    }
  })}${validate_component(ModulePresentation, "ModulePresentation").$$render($$result, { href: "sv/module/forms" }, {}, {
    body: () => {
      return `<span slot="${"body"}">Skicka formulär och hälsodeklarationer till dina kunder, automatiskt och manuellt.</span>`;
    },
    title: () => {
      return `<span slot="${"title"}">Formulär</span>`;
    },
    icon: () => {
      return `<span slot="${"icon"}"><i class="${"text-white fa-regular fa-clipboard-list-check"}"></i></span>`;
    }
  })}${validate_component(ModulePresentation, "ModulePresentation").$$render($$result, { href: "/booking" }, {}, {
    body: () => {
      return `<span slot="${"body"}">Skapa din egen ”Att göra-lista”. Delegera uppgifter till andra och få överblick över vad som ska göras.</span>`;
    },
    title: () => {
      return `<span slot="${"title"}">Uppgifter</span>`;
    },
    icon: () => {
      return `<span slot="${"icon"}"><i class="${"text-white fa-regular fa-list-ul"}"></i></span>`;
    }
  })}${validate_component(ModulePresentation, "ModulePresentation").$$render($$result, { href: "/county-export" }, {}, {
    body: () => {
      return `<span slot="${"body"}">Filhanteringssystem med avancerad behörighetsstyrning, versionshantering och samarbetsverktyg.</span>`;
    },
    title: () => {
      return `<span slot="${"title"}">Dokument</span>`;
    },
    icon: () => {
      return `<span slot="${"icon"}"><i class="${"text-white fa-regular fa-folder-tree"}"></i></span>`;
    }
  })}${validate_component(ModulePresentation, "ModulePresentation").$$render($$result, { href: "/county-export" }, {}, {
    body: () => {
      return `<span slot="${"body"}">Enkel tillgång och snabb insikt i din data</span>`;
    },
    title: () => {
      return `<span slot="${"title"}">Rapporter</span>`;
    },
    icon: () => {
      return `<span slot="${"icon"}"><i class="${"text-white fa-regular fa-chart-line"}"></i></span>`;
    }
  })}</dl></div></div></div>`;
});
const Quote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"pt-8 sm:inline-block sm:w-full sm:px-4"}"><figure class="${"rounded-2xl bg-gray-50 p-8 text-sm leading-6"}"><blockquote class="${"text-gray-900"}"><p>${slots.default ? slots.default({}) : ``}</p></blockquote>
      <figcaption class="${"mt-6 flex items-center gap-x-4"}"><img class="${"h-10 w-10 rounded-full bg-gray-50"}" src="${"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}" alt="${""}">
        <div><div class="${"font-semibold text-gray-900"}">${slots.quoted ? slots.quoted({}) : ``}</div>
          </div></figcaption></figure></div>`;
});
const QuotesSv = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"bg-white py-24 sm:py-32"}"><div class="${"mx-auto max-w-7xl px-6 lg:px-8"}"><div class="${"mx-auto max-w-xl text-center"}"><h2 class="${"text-lg font-semibold leading-8 tracking-tight text-purple-600"}">Vad våra kunder säger</h2>
        <p class="${"mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"}">Kaddio används av fler än 2000 vårdgivare</p></div>
      <div class="${"mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none"}"><div class="${"-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3"}">${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
    quoted: () => {
      return `<span slot="${"quoted"}">Ramzi Jelassi <cite>Grundare  <a href="${"https://dinpsykolog.se"}" target="${"_blank"}" rel="${"noreferrer"}">Din Psykolog</a></cite></span>`;
    },
    default: () => {
      return `Vi på Din Psykolog har haft stor hjälp av Kaddio i vårt arbete i att utveckla framtidens digitala vård med chatterapi, och de har varit väldigt tillmötesgående i utvecklingen av specifika funktioner vi behövt. Vi kan varmt rekommendera Kaddio!
                `;
    }
  })}
            ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
    quoted: () => {
      return `<span slot="${"quoted"}">Ulrika Hiscoke <cite>Leg Psykolog, medicine doktor <a href="${"https://arbor.kaddio.com"}" target="${"_blank"}" rel="${"noreferrer"}">Arbor Psykologi</a></cite></span>`;
    },
    default: () => {
      return `Det är ett rent nöje att fakturera med kaddio! Så smidigt och tydligt. Och så gör det ju skillnad att det är en snygg miljö också, mina andra program har sett ut som ... 😉. Tack för allt ni gör, min jobbdag blir så mycket härligare i kaddio!
                `;
    }
  })}
            
            ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
    quoted: () => {
      return `<span slot="${"quoted"}">Jimmy Lundqvist <cite>Chef IKSU fysio <a href="${"https://iksu.se"}" target="${"_blank"}" rel="${"noreferrer"}">IKSU</a></cite></span>`;
    },
    default: () => {
      return `Kaddio är användarvänligt, funktionellt och passar vår verksamhet perfekt!
                `;
    }
  })}
            
            ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
    quoted: () => {
      return `<span slot="${"quoted"}">Jonas Evander <cite>Leg Psykolog <a href="${"https://afobia.se"}" target="${"_blank"}" rel="${"noreferrer"}">Afobia</a></cite></span>`;
    },
    default: () => {
      return `Jag har samma krav på mitt journalföringssystem som mina behandlingar: effektivitet. Därför använder jag Kaddio.
                `;
    }
  })}
            ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
    quoted: () => {
      return `<span slot="${"quoted"}">Amanda Follin <cite>Certifierad massageterapeut <a href="${"https://www.endorfinkliniken.com"}" target="${"_blank"}" rel="${"noreferrer"}">Endorfinkliniken</a></cite></span>`;
    },
    default: () => {
      return `Kaddio är det journalprogram jag valt pga enkelheten. Programmet är enkelt att navigera och fungerar smidigt att anpassa efter mina behov, både i journalföring och tidsbokning.
                `;
    }
  })}
            ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
    quoted: () => {
      return `<span slot="${"quoted"}">Sofia Viotti <cite>Leg Psykolog Compassionfocus
                </cite></span>`;
    },
    default: () => {
      return `Programmet har allt jag behöver och det är lätt att använda och anpassa efter mina behov. Jag kan verkligen rekommendera detta journalsystem.
                `;
    }
  })}
            ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
    quoted: () => {
      return `<span slot="${"quoted"}">Kim Olausson <cite>Leg Fysioterapeut <a href="${"http://fysiokompassen.se"}" target="${"_blank"}" rel="${"noreferrer"}">Fysiokompassen</a></cite></span>`;
    },
    default: () => {
      return `Ett funktionellt och enkelt journalsystem, med snabb och proffsig support. Fungerar perfekt med samlingsräkning.
                `;
    }
  })}</div></div></div></div>`;
});
const Price = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let total;
  let { modules } = $$props;
  let { currency } = $$props;
  if ($$props.modules === void 0 && $$bindings.modules && modules !== void 0)
    $$bindings.modules(modules);
  if ($$props.currency === void 0 && $$bindings.currency && currency !== void 0)
    $$bindings.currency(currency);
  total = modules.filter((m) => m.selected).map((m) => m.price).reduce((a, b) => a + b, 0);
  return `<div class="${"bg-white py-24 sm:py-32"}" id="${"price"}"><div class="${"mx-auto max-w-7xl px-6 lg:px-8"}"><div class="${"grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2"}"><div class="${"mx-auto w-full max-w-xl lg:mx-0"}"><h2 class="${"text-3xl font-bold tracking-tight text-gray-900"}">${slots.title ? slots.title({}) : ``}</h2>
        <p class="${"mt-6 text-lg leading-8 text-gray-600"}">${slots.sub ? slots.sub({}) : ``}</p>
        <div class="${"mt-8 flex items-center gap-x-6"}"><a href="${"/hp/sv/create"}" class="${"rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"}">Bli kund</a>
          <a href="${"/hp/sv/support"}" class="${"text-sm font-semibold text-gray-900"}">Kontakta oss <span aria-hidden="${"true"}">→</span></a></div></div>
      <div class="${"mx-auto grid w-full max-w-xl items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8"}"><div class="${"-mx-4 mt-8 flow-root sm:mx-0"}"><table class="${"min-w-full divide-y divide-gray-300"}"><thead><tr><th></th>
                <th scope="${"col"}" class="${"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"}">Modul</th>
                <th scope="${"col"}" class="${"py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"}">Pris</th></tr></thead>
            <tbody>${each(modules, (module) => {
    return `<tr class="${"border-b border-gray-200"}"><td class="${"py-4 pl-4 pr-3 text-sm sm:pl-0"}"><input type="${"checkbox"}" class="${"h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"}"${add_attribute("id", module.name, 0)} ${module.disabled ? "disabled" : ""}${add_attribute("checked", module.selected, 1)}></td>
                        
                        <td class="${"py-4 pl-4 pr-3 text-sm sm:pl-0"}"><div class="${"font-medium text-gray-900"}">${escape(module.name)}</div>
                          <div class="${"mt-0.5 text-gray-500 sm:hidden"}">${escape(module.price)}</div></td>
                  
                      <td class="${"py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0"}">${escape(module.price)}</td>
                  </tr>`;
  })}</tbody>
            <tfoot><tr><th scope="${"row"}" colspan="${"2"}" class="${"hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"}">Månadspris / användare</th>
                <th scope="${"row"}" class="${"pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"}">Månadspris / användare</th>
                <td class="${"pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"}">${escape(total)} ${escape(currency)}</td></tr></tfoot></table></div></div></div></div></div>`;
});
const PricesSv = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const modules = [
    {
      name: "Core",
      price: 149,
      selected: true,
      disabled: true
    },
    {
      name: "Journal",
      price: 119,
      selected: true
    },
    {
      name: "Tidsbokning & Kalender",
      price: 79,
      selected: true
    },
    { name: "Dokument", price: 29 },
    { name: "Fakturering", price: 79 },
    { name: "Video och Chat", price: 119 },
    { name: "Hemsida", price: 29 },
    { name: "Uppgifter", price: 29 },
    {
      name: "Samlingsräkning Region",
      price: 29
    }
  ];
  return `${validate_component(Price, "Price").$$render($$result, { currency: "SEK", modules }, {}, {
    sub: () => {
      return `<span slot="${"sub"}">Ingen startkostnad. 1 månad kostnadsfritt.</span>`;
    },
    title: () => {
      return `<span slot="${"title"}">Betala bara för vad du använder.</span>`;
    }
  })}`;
});
const Customer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `<img class="${"max-h-12 w-full object-contain object-left"}"${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} width="${"105"}" height="${"48"}">`;
});
const ReferencesSv = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"bg-white py-24 sm:py-32"}"><div class="${"mx-auto max-w-7xl px-6 lg:px-8"}"><div class="${"grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2"}"><div class="${"mx-auto w-full max-w-xl lg:mx-0"}"><h2 class="${"text-3xl font-bold tracking-tight text-gray-900"}">Kaddio används av fler än 1500 företag</h2>
        <p class="${"mt-6 text-lg leading-8 text-gray-600"}">Från den lilla mottagningen med 1 person som använder Kaddio Journal, till multinationella företag där Kaddio är hjärtat i deras verksamhet med API-integration för automatisering av flöden.</p>
        <div class="${"mt-8 flex items-center gap-x-6"}"><a href="${"/hp/sv/create"}" class="${"rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"}">OK jag är helt såld, nu kör vi!</a>
          <a href="${"/hp/sv/support"}" class="${"text-sm font-semibold text-gray-900"}">Jag har något jag vill fråga <span aria-hidden="${"true"}">→</span></a></div></div>
      <div class="${"mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8"}">${validate_component(Customer, "Customer").$$render(
    $$result,
    {
      src: "/customer-logos/malmo.png",
      alt: "Malmö Universitet"
    },
    {},
    {}
  )}
        ${validate_component(Customer, "Customer").$$render(
    $$result,
    {
      src: "/customer-logos/rfsl.png",
      alt: "RFSL"
    },
    {},
    {}
  )}
        ${validate_component(Customer, "Customer").$$render(
    $$result,
    {
      src: "/customer-logos/Twitch.png",
      alt: "Twitch"
    },
    {},
    {}
  )}
        ${validate_component(Customer, "Customer").$$render(
    $$result,
    {
      src: "/customer-logos/storasyster_ny.png",
      alt: "Storasyster"
    },
    {},
    {}
  )}
        ${validate_component(Customer, "Customer").$$render(
    $$result,
    {
      src: "/customer-logos/sveakbt.png",
      alt: "Svea KBT"
    },
    {},
    {}
  )}
        ${validate_component(Customer, "Customer").$$render(
    $$result,
    {
      src: "/customer-logos/dinpsykolog.png",
      alt: "Din Psykolog"
    },
    {},
    {}
  )}
        ${validate_component(Customer, "Customer").$$render(
    $$result,
    {
      src: "/customer-logos/IKSU Orange 2019 (kopia).png",
      alt: "IKSU"
    },
    {},
    {}
  )}</div></div></div></div>`;
});
const SecuritySection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"relative bg-gray-900"}"><div class="${"relative h-80 overflow-hidden bg-purple-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2"}"><img class="${"h-full w-full object-cover"}" src="${"/img/fan.jpg"}" alt="${""}">
      <svg viewBox="${"0 0 926 676"}" aria-hidden="${"true"}" class="${"absolute left-24 -bottom-24 w-[57.875rem] transform-gpu blur-[118px]"}"><path fill="${"url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"}" fill-opacity="${".4"}" d="${"m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"}"></path><defs><linearGradient id="${"60c3c621-93e0-4a09-a0e6-4c228a0116d8"}" x1="${"926.392"}" x2="${"-109.635"}" y1="${".176"}" y2="${"321.024"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#776FFF"}"></stop><stop offset="${"1"}" stop-color="${"#FF4694"}"></stop></linearGradient></defs></svg></div>
    <div class="${"relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8"}"><div class="${"pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32"}"><h2 class="${"text-base font-semibold leading-7 text-purple-400"}">Säkerhet</h2>
        <p class="${"mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"}">Kaddio är säkert.</p>
        <p class="${"mt-6 text-base leading-7 text-gray-300"}">Kaddio byggs enligt principen &quot;Secure by Design&quot;. Under 2023 genomgår vi certifiering enligt ISO 27001 Informationssäkerhet</p>
        <div class="${"mt-8"}"><a href="${"#"}" class="${"inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"}">Kaddio Hjälpcenter</a></div></div></div></div>`;
});
const SecuritySectionSv = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SecuritySection, "SecuritySection").$$render($$result, {}, {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $token, $$unsubscribe_token;
  $$unsubscribe_token = subscribe(token, (value) => $token = value);
  setContext("lang", "sv");
  $$unsubscribe_token();
  return `${$$result.head += `<!-- HEAD_svelte-kl4aom_START -->${$$result.title = `<title>Kaddio - framtidens journalsystem</title>`, ""}<meta name="${"description"}" content="${"Kaddio - Webbaserat allt-i-allo-system för dig som hjälper andra"}"><!-- HEAD_svelte-kl4aom_END -->`, ""}

<div class="${"bg-white"}">${validate_component(NavSv, "NavSv").$$render($$result, { darkHeader: true }, {}, {})}

	
	<div class="${"relative isolate overflow-hidden bg-gray-900 pt-14 pb-16 sm:pb-20"}">${validate_component(Cloud, "Cloud").$$render($$result, {}, {}, {})}
		
		<div class="${"mx-auto max-w-7xl px-6 lg:px-8"}"><div class="${"mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"}"><div class="${"hidden sm:mb-8 sm:flex sm:justify-center"}"></div>
			<div class="${"text-center"}"><h1 class="${"text-4xl font-bold tracking-tight text-white sm:text-6xl"}">Kaddio är allt du behöver.</h1>
			<p class="${"mt-6 text-lg leading-8 text-gray-300"}">Det är ett webbaserat allt-i-allo-system för dig som hjälper andra. Enkelt att använda. Du kommer att älska det.</p>
			<div class="${"mt-10 flex items-center justify-center gap-x-6"}"><a href="${"/hp/sv/create"}" class="${"rounded-md bg-purple-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"}">Skapa konto</a>
				<a href="${"https://demo.kaddio.com/login"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"text-sm font-semibold leading-6 text-white"}">Live demo <span aria-hidden="${"true"}">→</span></a></div></div>

			${$token?.testimonial ? `<div class="${"mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"}"><figure class="${"col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1"}"><blockquote class="${"p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900"}"><p>“${escape($token.testimonial)}”</p></blockquote>
					<figcaption class="${"flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4"}">${`<img class="${"h-10 w-10 flex-none rounded-full bg-gray-50"}" src="${"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"}" alt="${""}">`}
						<div class="${"flex-auto"}"><div class="${"font-semibold"}">${escape($token.fullname)}</div>
						<div class="${"text-gray-600"}">${escape($token.title)}, ${escape($token.orgName)}</div></div></figcaption></figure></div>` : ``}</div></div>
		
		<div class="${"absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"}"><svg class="${"relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"}" viewBox="${"0 0 1155 678"}"><path fill="${"url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"}" fill-opacity="${".2"}" d="${"M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"}"></path><defs><linearGradient id="${"ecb5b0c9-546c-4772-8c71-4d3f06d544bc"}" x1="${"1155.49"}" x2="${"-78.208"}" y1="${".177"}" y2="${"474.645"}" gradientUnits="${"userSpaceOnUse"}"><stop stop-color="${"#9089FC"}"></stop><stop offset="${"1"}" stop-color="${"#FF80B5"}"></stop></linearGradient></defs></svg></div></div>


${validate_component(ModulesSv, "ModulesSv").$$render($$result, {}, {}, {})}

	<div class="${"mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8"}"><div class="${"relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"}"><svg viewBox="${"0 0 1024 1024"}" class="${"absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"}" aria-hidden="${"true"}"><circle cx="${"512"}" cy="${"512"}" r="${"512"}" fill="${"url(#759c1415-0410-454c-8f7c-9a820de03641)"}" fill-opacity="${"0.7"}"></circle><defs><radialGradient id="${"759c1415-0410-454c-8f7c-9a820de03641"}"><stop stop-color="${"#7775D6"}"></stop><stop offset="${"1"}" stop-color="${"#E935C1"}"></stop></radialGradient></defs></svg>
		<div class="${"mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"}"><h2 class="${"text-3xl font-bold tracking-tight text-white sm:text-4xl"}">Boosta produktiviteten.<br>Engagera dina kunder.</h2>
		  <p class="${"mt-6 text-lg leading-8 text-gray-300"}">Du kan bjuda in dina kunder till Kaddio (om du vill) för att t.ex. dela dokument, chatta med dem, ha videosamtal med dem osv. Kaddio är som ett säkert bankvalv där ni kan dela allt. Dina kunder kommer att älska det.</p>
		  <div class="${"mt-10 flex items-center justify-center gap-x-6 lg:justify-start"}"><a href="${"/hp/sv/create"}" class="${"rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"}">Bli kund</a>
			<a href="${"https://demo.kaddio.com"}" target="${"_blank"}" rel="${"noreferrer"}" class="${"text-sm font-semibold leading-6 text-white"}">Live demo <span aria-hidden="${"true"}">→</span></a></div></div>
		<div class="${"relative mt-16 h-80 lg:mt-8"}"><img class="${"absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"}" src="${"/img/screenshot.png"}" alt="${"App screenshot"}" width="${"1824"}" height="${"1080"}"></div></div></div></div>
  

${validate_component(QuotesSv, "QuotesSv").$$render($$result, {}, {}, {})}
${validate_component(PricesSv, "PricesSv").$$render($$result, {}, {}, {})}
${validate_component(SecuritySectionSv, "SecuritySectionSv").$$render($$result, {}, {}, {})}

${validate_component(ReferencesSv, "ReferencesSv").$$render($$result, {}, {}, {})}
${validate_component(FooterSv, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
