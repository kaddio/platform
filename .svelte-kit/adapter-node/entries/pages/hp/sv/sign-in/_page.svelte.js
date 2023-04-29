import { c as create_ssr_component, d as add_attribute } from "../../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let submitIsEnabled;
  let url;
  submitIsEnabled = url;
  return `${$$result.head += `<!-- HEAD_svelte-ahixln_START -->${$$result.title = `<title>Kaddio - Logga in</title>`, ""}<meta name="${"description"}" content="${"Logga in i Kaddio"}"><!-- HEAD_svelte-ahixln_END -->`, ""}


<div class="${"flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"}"><div class="${"w-full max-w-md space-y-8"}"><div><img class="${"mx-auto h-12 w-auto"}" src="${"/img/kaddio-svart.png"}" alt="${"Your Company"}">
        <h2 class="${"mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"}">Logga in</h2>

        <p class="${"mt-2 text-center text-sm text-gray-600"}">Eller
          <a href="${"/hp/sv/create"}" class="${"font-medium text-purple-600 hover:text-purple-500"}">skapa konto</a></p></div>
      <form class="${"mt-8 space-y-6"}" action="${"#"}" method="${"POST"}"><div class="${"flex max-w-lg rounded-md shadow-sm"}"><input placeholder="${"url"}" autofocus type="${"text"}" name="${"url"}" autocomplete="${"url"}" class="${"block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"}"${add_attribute("value", url, 0)}>
            <span class="${"inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm"}">.kaddio.com</span></div>

        <div><button type="${"submit"}" ${!submitIsEnabled ? "disabled" : ""} class="${"disabled:opacity-75 group relative flex w-full justify-center rounded-md bg-purple-600 py-2 px-3 text-sm font-semibold text-white hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"}"><span class="${"absolute inset-y-0 left-0 flex items-center pl-3"}"><svg class="${"h-5 w-5 text-purple-500 group-hover:text-purple-400"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" d="${"M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"}" clip-rule="${"evenodd"}"></path></svg></span>
                Gå dit
            </button></div></form>

      ${``}</div></div>`;
});
export {
  Page as default
};
