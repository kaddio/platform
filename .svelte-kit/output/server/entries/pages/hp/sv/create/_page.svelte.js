import { c as create_ssr_component, e as escape, g as getContext, v as validate_component, d as add_attribute, h as each, s as setContext } from "../../../../../chunks/index3.js";
import { H as HeaderSv } from "../../../../../chunks/headerSv.js";
import { F as FooterSv } from "../../../../../chunks/footerSv.js";
import { C as Cloud } from "../../../../../chunks/cloud.js";
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { state = false } = $$props;
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  return `<div class="${"flex gap-x-4 sm:col-span-2"}"><div class="${"flex h-6 items-center"}">
        <button type="${"button"}" class="${escape(state ? "bg-purple-600" : "bg-gray-200", true) + " flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"}" role="${"switch"}" aria-checked="${"false"}" aria-labelledby="${"switch-1-label"}"><span class="${"sr-only"}">Agree to policies</span>
        
        <span aria-hidden="${"true"}" class="${escape(state ? "translate-x-3.5" : "translate-x-0", true) + " h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"}"></span></button></div>
    <label class="${"text-sm leading-6 text-gray-600"}" id="${"switch-1-label"}">${slots.label ? slots.label({}) : ``}</label></div>`;
});
const CreateAccount = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let submitIsEnabled = false;
  let state;
  const selectedLang = getContext("lang");
  console.log(selectedLang);
  let url = "";
  let orgName;
  let email;
  const slugify = function(str) {
    return str.toLowerCase().replace(/ /g, "").replace(/-*$/, "").replace(/^-*/, "").replace(/Ã¥/g, "a").replace(/Ã¤/g, "a").replace(/Ã¶/g, "o").replace(/http(s)?/g, "").replace(/[^\w-]+/g, "");
  };
  const countries = [
    ["Sverige", "se"],
    ["Finland", "fi"],
    ["Norge", "no"],
    ["Danmark", "dk"],
    ["Spanien", "es"],
    ["Elsewhere", "se"]
  ].map((c) => ({ label: c[0], name: c[1] }));
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    submitIsEnabled = state && !!email;
    url = slugify("");
    $$rendered = `${`<div class="${"isolate bg-white py-24 px-6 sm:py-32 lg:px-8"}">${validate_component(Cloud, "Cloud").$$render($$result, {}, {}, {})}
        <div class="${"mx-auto max-w-2xl text-center"}"><h2 class="${"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"}">Skapa konto</h2>
        <p class="${"mt-2 text-lg leading-8 text-gray-600"}">Det tar bara några minuter att komma igång och du betalar bara för vad du använder. Kostnadsfritt i 1 månad.</p></div>
        <form method="${"POST"}" class="${"mx-auto mt-16 max-w-xl sm:mt-20"}"><div class="${"grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2"}"><div><label for="${"first-name"}" class="${"block text-sm font-semibold leading-6 text-gray-900"}">Förnamn</label>
            <div class="${"mt-2.5"}"><input type="${"text"}" name="${"first-name"}" id="${"first-name"}" autocomplete="${"given-name"}" class="${"block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"}"></div></div>
            <div><label for="${"last-name"}" class="${"block text-sm font-semibold leading-6 text-gray-900"}">Efternamn</label>
            <div class="${"mt-2.5"}"><input type="${"text"}" name="${"last-name"}" id="${"last-name"}" autocomplete="${"family-name"}" class="${"block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"}"></div></div>

            <div class="${"sm:col-span-2"}"><label for="${"company"}" class="${"block text-sm font-semibold leading-6 text-gray-900"}">Företag</label>
                <div class="${"mt-2.5"}"><input type="${"text"}" name="${"company"}" id="${"company"}" autocomplete="${"organization"}" class="${"block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"}"${add_attribute("value", orgName, 0)}></div></div>

            <div class="${"sm:col-span-2"}"><label for="${"url"}" class="${"block text-sm font-semibold leading-6 text-gray-900"}">URL</label>
                <div class="${"mt-2.5"}"><input type="${"text"}" name="${"url"}" id="${"url"}" class="${"block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"}"${add_attribute("value", url, 0)}></div></div>

            <div class="${"sm:col-span-2"}"><label for="${"email"}" class="${"block text-sm font-semibold leading-6 text-gray-900"}">E-post</label>
            <div class="${"mt-2.5"}"><input type="${"email"}" name="${"email"}" id="${"email"}" autocomplete="${"email"}" class="${"block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"}"${add_attribute("value", email, 0)}></div></div>

            <div class="${"sm:col-span-2"}"><label for="${"phone-number"}" class="${"block text-sm font-semibold leading-6 text-gray-900"}">Land</label>

                <select id="${"country"}" name="${"country"}" class="${"mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-purple-600 sm:text-sm sm:leading-6"}">${each(countries, (country) => {
      return `<option${add_attribute("value", country.name, 0)}>${escape(country.label)}</option>`;
    })}</select></div>

            ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      { state },
      {
        state: ($$value) => {
          state = $$value;
          $$settled = false;
        }
      },
      {
        label: () => {
          return `<span slot="${"label"}">Jag godkänner 
                    <a href="${"/hp/sv/page/tos"}" class="${"font-semibold text-purple-600"}">Användarvillkor</a> och <a href="${"/hp/sv/page/privacy"}" class="${"font-semibold text-purple-600"}">Sekretesspolicy</a>.          
                </span>`;
        }
      }
    )}</div>
        <div class="${"mt-10"}"><button ${!submitIsEnabled ? "disabled" : ""} type="${"submit"}" class="${"disabled:opacity-75 block w-full rounded-md bg-purple-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"}">Skapa konto</button></div></form></div>`}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setContext("lang", "sv");
  return `${$$result.head += `<!-- HEAD_svelte-1lmb4lu_START -->${$$result.title = `<title>Kaddio - skapa konto</title>`, ""}<meta name="${"description"}" content="${"Skapa konto"}"><!-- HEAD_svelte-1lmb4lu_END -->`, ""}

${validate_component(HeaderSv, "Header").$$render($$result, {}, {}, {})}
${validate_component(CreateAccount, "CreateAccount").$$render($$result, {}, {}, {})}
${validate_component(FooterSv, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
