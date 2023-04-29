import { c as create_ssr_component, b as subscribe, i as set_store_value } from "../../../../chunks/index3.js";
import { t as token } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $token, $$unsubscribe_token;
  $$unsubscribe_token = subscribe(token, (value) => $token = value);
  let { data } = $$props;
  if (data.referrerData) {
    set_store_value(token, $token = data.referrerData, $token);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_token();
  return ``;
});
export {
  Page as default
};
