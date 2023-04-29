import { g as getContext } from "./index3.js";
import { w as writable } from "./index2.js";
let token = writable();
const translations = {
  "Pris": {
    en: "Price",
    es: "Precio"
  },
  "Du får inte gå över": {
    en: "You shall not pass",
    es: "No hay passadena"
  }
};
let _ = writable(function(phrase) {
  console.log(getContext("lang"));
  const lang = "es";
  return translations[phrase][lang];
});
export {
  _,
  token as t
};
