import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component, d as add_attribute } from "./index3.js";
import { t as token, _ } from "./stores.js";
const Referral_banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $token, $$unsubscribe_token;
  $$unsubscribe_token = subscribe(token, (value) => $token = value);
  $$unsubscribe_token();
  return `${$token ? `<div class="${"flex items-center gap-x-6 bg-purple-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"}"><p class="${"text-sm leading-6 text-white"}"><a href="${"/hp/en/referral"}"><strong class="${"font-semibold"}">Rekommendationslänk från ${escape($token.firstname)}</strong><svg viewBox="${"0 0 2 2"}" class="${"mx-2 inline h-0.5 w-0.5 fill-current"}" aria-hidden="${"true"}"><circle cx="${"1"}" cy="${"1"}" r="${"1"}"></circle></svg>Läs mer <span aria-hidden="${"true"}">→</span></a></p>
        <div class="${"flex flex-1 justify-end"}"></div></div>` : ``}`;
});
const NavSv = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_, $$unsubscribe__;
  $$unsubscribe__ = subscribe(_, (value) => $_ = value);
  let { darkHeader = false } = $$props;
  if ($$props.darkHeader === void 0 && $$bindings.darkHeader && darkHeader !== void 0)
    $$bindings.darkHeader(darkHeader);
  $$unsubscribe__();
  return `<header class="${"absolute inset-x-0 top-0 z-50"}">${validate_component(Referral_banner, "Referral").$$render($$result, {}, {}, {})}

  <nav class="${"mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"}" aria-label="${"Global"}"><div class="${"flex lg:flex-1"}"><a href="${"/hp/sv"}" class="${"-m-1.5 p-1.5"}"><span class="${"sr-only"}">Kaddio</span>
        <img class="${"h-8 w-auto"}"${add_attribute(
    "src",
    darkHeader ? "/img/kaddio-logo.png" : "/img/kaddio-svart.png",
    0
  )} alt="${""}"></a></div>
    <div class="${"hidden lg:flex lg:gap-x-12"}">


      <a href="${"/hp/sv/support"}" class="${escape(darkHeader ? "text-white" : "text-gray-900", true) + " text-sm font-semibold leading-6"}">Kontakta oss</a>

      <a href="${"/hp/sv/#price"}" class="${escape(darkHeader ? "text-white" : "text-gray-900", true) + " text-sm font-semibold leading-6"}">${escape($_("Pris"))}</a></div>
    <div class="${"flex flex-1 items-center justify-end gap-x-6"}"><a href="${"/hp/sv/sign-in"}" class="${escape(darkHeader ? "lg:text-white" : "lg:text-gray-900", true) + " hidden lg:block lg:text-sm lg:font-semibold lg:leading-6"}">Logga in</a>
      <a href="${"/hp/sv/create"}" class="${"rounded-md bg-purple-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"}">Skapa konto</a></div>
    <div class="${"flex lg:hidden"}"><button type="${"button"}" class="${escape(darkHeader ? "text-white" : "text-gray-900", true) + " -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"}"><span class="${"sr-only"}">Open main menu</span>
        <svg class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}"></path></svg></button></div></nav>
  
  <div class="${["lg:hidden", "hidden"].join(" ").trim()}" role="${"dialog"}" aria-modal="${"true"}">
    <div class="${"fixed inset-0 z-10"}"></div>
    <div class="${"fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"}"><div class="${"flex items-center gap-x-6"}"><a href="${"#"}" class="${"-m-1.5 p-1.5"}"><span class="${"sr-only"}">Your Company</span>
          <img class="${"h-8 w-auto"}" src="${"/img/kaddio-svart.png"}" alt="${""}"></a>
        <a href="${"/hp/sv/create"}" class="${"ml-auto rounded-md bg-purple-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"}">Bli kund</a>
        <button type="${"button"}" class="${"-m-2.5 rounded-md p-2.5 text-gray-700"}"><span class="${"sr-only"}">Close menu</span>
          <svg class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M6 18L18 6M6 6l12 12"}"></path></svg></button></div>
      <div class="${"mt-6 flow-root"}"><div class="${"-my-6 divide-y divide-gray-500/10"}"><div class="${"space-y-2 py-6"}"><a href="${"/hp/sv/support"}" class="${"-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"}">Kontakta oss</a>

            

            <a href="${"/hp/sv/#price"}" class="${"-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"}">Pris</a></div>
          <div class="${"py-6"}"><a href="${"/hp/sv/sign-in"}" class="${"-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"}">Logga in</a></div></div></div></div></div></header>`;
});
export {
  NavSv as N
};
