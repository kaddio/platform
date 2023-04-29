function getLang(event) {
  const sv = event.url.pathname.includes("/sv") && "sv";
  const es = event.url.pathname.includes("/sv") && "es";
  return sv || es || "en";
}
async function handle({ event, resolve }) {
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace("%lang%", getLang(event))
  });
}
export {
  handle
};
